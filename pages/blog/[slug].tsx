import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

import Container from 'components/Container';
import { formatDate } from 'utils/formatDate';
import { media } from 'utils/media';
import { getReadTime } from 'utils/readTime';
import Header from 'views/SingleArticlePage/Header';
import MetadataHead from 'views/SingleArticlePage/MetadataHead';
import OpenGraphHead from 'views/SingleArticlePage/OpenGraphHead';
import ShareWidget from 'views/SingleArticlePage/ShareWidget';
import StructuredDataHead from 'views/SingleArticlePage/StructuredDataHead';
import { MDXComponents } from 'components/MDX/MDXComponents';

const postsDir = path.join(process.cwd(), '/posts');

interface Frontmatter {
  title: string;
  description: string;
  date: string;
  tags?: string[];
  imageUrl?: string;
}

interface Props {
  slug: string;
  frontmatter: Frontmatter;
  mdxSource: MDXRemoteSerializeResult;
}

export default function SingleArticlePage({ slug, frontmatter, mdxSource }: InferGetStaticPropsType<typeof getStaticProps>) {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [readTime, setReadTime] = useState('');

  useEffect(() => {
    if (contentRef.current) {
      setReadTime(getReadTime(contentRef.current.textContent || ''));
    }
  }, []);

  const { title, description, date, tags, imageUrl } = frontmatter;
  const meta = { title, description, date, tags, imageUrl, author: '' };
  const formattedDate = formatDate(new Date(date));
  const absoluteImageUrl = imageUrl;

  return (
    <>
      <Head>
        <noscript>
          <link rel="stylesheet" href="/prism-theme.css" />
        </noscript>
      </Head>

      <OpenGraphHead slug={slug} {...meta} />
      <StructuredDataHead slug={slug} {...meta} />
      <MetadataHead {...meta} />

      <CustomContainer id="content" ref={contentRef}>
        <ShareWidget title={title} slug={slug} />
        <Header title={title} formattedDate={formattedDate} imageUrl={absoluteImageUrl} readTime={readTime} />
        <MDXRemote {...mdxSource} components={MDXComponents} />
      </CustomContainer>
    </>
  );
}

export async function getStaticPaths() {
  const filenames = fs.readdirSync(postsDir);
  const paths = filenames.map((filename) => ({
    params: { slug: filename.replace(/\.mdx$/, '') },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: GetStaticPropsContext<{ slug: string }>) {
  const slug = params!.slug;
  const filePath = path.join(postsDir, `${slug}.mdx`);
  const source = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(source);

  const mdxSource = await serialize(content);

  return {
    props: {
      slug,
      frontmatter: data,
      mdxSource,
    },
  };
}

const CustomContainer = styled(Container)`
  position: relative;
  max-width: 90rem;
  margin: 10rem auto;

  ${media('<=tablet')} {
    margin: 5rem auto;
  }
`;

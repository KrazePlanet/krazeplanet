// components/MDXComponents.tsx
import styled from 'styled-components';
import { CodeBlock } from './MDXCodeBlockComponent';

export const MDXComponents = {
  // HEADERS
  h1: styled.h1`
    font-size: 4rem;
    font-weight: 700;
    margin: 3rem 0 2rem 0;
    line-height: 1.2;
  `,
  h2: styled.h2`
    font-size: 3.5rem;
    font-weight: 600;
    margin: 2.5rem 0 1.5rem 0;
    line-height: 1.25;
  `,
  h3: styled.h3`
    font-size: 3rem;
    font-weight: 500;
    margin: 2rem 0 1rem 0;
    line-height: 1.3;
  `,
  h4: styled.h4`
    font-size: 2.5rem;
    font-weight: 500;
    margin: 1.8rem 0 1rem 0;
    line-height: 1.35;
  `,
  h5: styled.h5`
    font-size: 2.2rem;
    font-weight: 500;
    margin: 1.5rem 0 0.8rem 0;
    line-height: 1.4;
  `,
  h6: styled.h6`
    font-size: 2rem;
    font-weight: 500;
    margin: 1.2rem 0 0.6rem 0;
    line-height: 1.45;
  `,

  // PARAGRAPH
  p: styled.p`
    font-size: 1.5rem;
    line-height: 1.9;
    margin: 1rem 0;
    color: #333;
  `,

  // LISTS
  ul: styled.ul`
    margin: 1.2rem 0 1.2rem 2rem;
    padding: 0;
    list-style-type: disc;
  `,
  ol: styled.ol`
    margin: 1.2rem 0 1.2rem 2rem;
    padding: 0;
    list-style-type: decimal;
  `,
  li: styled.li`
    font-size: 1.5rem;
    line-height: 1.9;
    margin: 0.6rem 0;
  `,

  // LINKS
  a: styled.a`
    color: #0070f3;
    text-decoration: underline;
    &:hover {
      text-decoration: none;
    }
  `,

  // IMAGES
  img: styled.img`
    max-width: 100%;
    margin: 2rem 0;
    border-radius: 8px;
  `,

  // BLOCKQUOTE
  blockquote: styled.blockquote`
    border-left: 6px solid #ddd;
    padding-left: 1.5rem;
    margin: 1.5rem 0;
    color: #555;
    font-style: italic;
    background: #f9f9f9;
  `,

  // CODE
 // CODE
 pre: (props: any) => <CodeBlock>{props.children}</CodeBlock>,

// pre: styled.pre`
// background: #f5f5f5;  // light gray for better readability
// color: #1e1e1e;        // dark text
// padding: 1.5rem;
// border-radius: 8px;
// overflow-x: auto;
// margin: 1.5rem 0;
// font-size: 1.1rem;
// font-family: 'Fira Code', monospace;
// `,

// code: styled.code`
// font-family: 'Fira Code', monospace;
// color: #1e1e1e;        // dark text
// padding: 0.3rem 0.5rem;
// border-radius: 4px;
// font-size: 1.2rem;
// `,

  // HORIZONTAL RULE
  hr: styled.hr`
    border: none;
    height: 1px;
    background: #ddd;
    margin: 2.5rem 0;
  `,
};

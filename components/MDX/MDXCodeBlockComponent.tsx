import React, { useState } from 'react';
import styled from 'styled-components';

const Pre = styled.pre`
  background: #f5f5f5;
  color: #1e1e1e;
  padding: 1.5rem;
  border-radius: 8px;
  overflow-x: auto;
  margin: 1.5rem 0;
  font-family: 'Fira Code', monospace;
  font-size: 1.1rem;
  position: relative;
`;

const Code = styled.code`
  font-family: 'Fira Code', monospace;
//   background: #e0e0e0;
  color: #1e1e1e;
  padding: 0.3rem 0.5rem;
  border-radius: 4px;
  font-size: 1.2rem;
`;

const CopyButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: #000000;
  color: white;
  border: none;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.5rem;

  &:hover {
    background: #ffff;
    color: #000000;
  }
`;

interface CodeBlockProps {
  children: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ children }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Pre>
      <CopyButton onClick={handleCopy}>{copied ? 'Copied!' : 'Copy'}</CopyButton>
      <Code>{children}</Code>
    </Pre>
  );
};

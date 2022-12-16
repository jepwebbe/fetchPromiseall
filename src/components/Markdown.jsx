import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

import ReactMarkdown from "react-markdown";

const Markdown = ({ md }) => {
  return (
    <ReactMarkdown
      children={md}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <SyntaxHighlighter
              children={String(children).replace(/\n$/, "")}
              style={dark} // theme
              language={match[1]}
              PreTag="section" // parent tag
              {...props}
            />
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
    />
  );
};

export default Markdown;

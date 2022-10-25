import Link from "next/link";
import React from "react";
import ReactMarkdown from "react-markdown";

export const ZaisteReactMarkDown = ({ children }: { children: string }) => {
  return (
    <ReactMarkdown
      components={{
        a: ({ href, ...props }) => {
          if (!href) {
            return <a {...props}></a>;
          }
          return (
            <Link rel="noopener noreferrer" href={href}>
              <a {...props}></a>
            </Link>
          );
        },
      }}
    >
      {children}
    </ReactMarkdown>
  );
};

import React from 'react';
import clsx from 'clsx';

export default function Markdown({ htmlContent, className, ...props }) {
  return (
    <>
      <div
        className={clsx("markdown px-4 pb-4", className)}
        dangerouslySetInnerHTML={{ __html: htmlContent }}
        {...props}
      />

      <style global jsx>
      {`
        .markdown {
          h2 {
            margin-top: 2rem;
            margin-bottom: 1rem;
            font-weight: bold;
            font-size: 2.25rem;
            line-height: 2.5rem;
          }

          h3 {
            margin-top: 2rem;
            margin-bottom: 1rem;
            font-weight: bold;
            font-size: 1.875rem;
            line-height: 2.25rem;
          }

          p {
            margin-top: 1rem;
            margin-bottom: 1rem;

            font-size: 1.25rem;
            line-height: 1.75rem;
          }

          ul {
            padding-left: 1.5rem;
            li {
              margin-top: 0.5rem;
              margin-bottom: 0.5rem;
              list-style-type: disc;
            }
          }

          ol {
            padding-left: 1.5rem;
            li {
              margin-top: 0.5rem;
              margin-bottom: 0.5rem;
              list-style-type: decimal;
              ::marker {
                font-weight: 600;
              }
            }
          }

          a {
            color: rgb(51, 122, 183);
            text-decoration-color: rgb(51, 122, 183);
          }

          a:hover {
            color: #23527c;
            text-decoration: underline;
          }

          img {
            border-radius: 0.25rem;
            margin-top: 1rem;
            margin-bottom: 1rem;
          }

        }
      `}
        </style>
    </>
  )
}
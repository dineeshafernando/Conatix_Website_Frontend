"use client"

import { BlocksRenderer, type BlocksContent } from '@strapi/blocks-react-renderer';

interface StrapiBlocksRendererProps {
  content: BlocksContent
}

export default function StrapiBlocksRenderer({content}:StrapiBlocksRendererProps) {
  return (
    <BlocksRenderer 
      content={content} 
      blocks={{
        paragraph: ({children}) => <p className="mb-3">{children}</p>,
        list: ({children, format}) => {
          if (format === "ordered") {
            return <ol className="list-decimal list-outside ml-4 mb-4">{children}</ol>
          } else {
            return <ul className="list-disc list-outside ml-4 mb-4">{children}</ul>
          }
        },
        link: ({children, url}) => <a className="font-bold underline" href={url} target="_blank">{children}</a>
      }}
    />
  )
}
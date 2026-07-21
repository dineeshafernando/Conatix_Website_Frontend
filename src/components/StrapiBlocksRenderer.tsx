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
        link: ({children, url}) => <a className="font-bold underline" href={url} target="_blank">{children}</a>
      }}
    />
  )
}
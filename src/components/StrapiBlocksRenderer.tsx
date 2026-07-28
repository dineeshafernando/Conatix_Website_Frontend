"use client"
import { BlocksRenderer, type BlocksContent } from '@strapi/blocks-react-renderer';

interface StrapiBlocksRendererProps {
  content: BlocksContent
}
/* component is used to render rich text (main text) */
export default function StrapiBlocksRenderer({content}:StrapiBlocksRendererProps) {
  return (
    <BlocksRenderer 
      content={content} 
      blocks={{
        paragraph: ({children}) => <p className="mb-5">{children}</p>,
        list: ({children, format}) => {
          if (format === "ordered") {
            return <ol className="list-decimal list-outside ml-4 mb-4">{children}</ol>
          } else {
            return <ul className="list-disc list-outside ml-4 mb-4">{children}</ul>
          }
        },
        link: ({children, url}) => <a className="font-bold underline text-electric-blue" href={url} target="_blank">{children}</a>
      }}
    />
  )
}
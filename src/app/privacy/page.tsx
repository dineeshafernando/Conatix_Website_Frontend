// Privacy page renders privacy content from privacy.md 

// 1. IMPORT NODE.JS MODULES
// 'fs' (File System) lets us read files stored on the server.
import fs from 'fs';
// 'path' helps us safely build file paths regardless of the operating system (Mac, Windows, Linux).
import path from 'path';

// 2. IMPORT THIRD-PARTY LIBRARIES
// 'ReactMarkdown' is the tool we installed to convert our raw .md text into React HTML elements.
import ReactMarkdown from 'react-markdown';

export default function PrivacyPage() {
  // 3. LOCATE AND READ THE FILE
  // process.cwd() gets the root folder. Join it with 'src', 'lib', 'privacy.md' to create the path this file.
  const filePath = path.join(process.cwd(), 'src', 'lib', 'privacy.md');
  
  // We read the file's contents and store it as a giant text string in 'fileContent'.
  const fileContent = fs.readFileSync(filePath, 'utf8');

  return (
    <main className="[&_ul_ul]:list-[circle] max-w-[980px] mx-auto text-xl">
      {/* 4. RENDER THE MARKDOWN */}
      <ReactMarkdown
        components={{
          // Main Title (# PRIVACY POLICY)
          // we pass an object, but we only need everything inside the object except the node property.
          h1: ({ node, ...props }) => (
            <h1 className="h1" {...props} />
          ),
          
          // Section Headers (## Background, ## 1. What personal info...)
          h2: ({ node, ...props }) => (
            <h2 className="font-bold text-4xl mb-4" {...props} />
          ),
          
          // Standard Text (Paragraphs and your UPPERCASE sub-headers)
          p: ({ node, ...props }) => (
            <p className="mb-4" {...props} />
          ),

          // Clickable Links
          a: ({ node, ...props }) => (
            <a 
              className="hover-effect text-electric-blue" 
              target="_blank" 
              {...props} 
            />
          ),

          // Bulleted Lists
          ul: ({ node, ...props }) => (
            <ul className="list-disc mb-4 ml-6" {...props} />
          ),
          
          // Nested list items
          li: ({ node, ...props }) => (
            <li className="pl-1" {...props} />
          ),

          // Images
          img: ({ node, ...props }) => (
            <img 
              className="w-1/2 mx-auto" 
              {...props} 
              alt={props.alt || "Privacy Policy Image"} 
            />
          ),
        }}
      >
        {/* We pass the raw text string into the component to be rendered */}
        {fileContent}
      </ReactMarkdown>
    </main>
  );
}
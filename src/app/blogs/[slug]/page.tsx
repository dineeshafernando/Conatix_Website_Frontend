import Image from "next/image"
import { fetchBlog, BlogPageProps, referenceProp } from "@/lib/strapi"
import { formatDate } from "@/lib/util"
import StrapiBlocksRenderer from "@/components/StrapiBlocksRenderer"

export default async function BlogPage({params}:BlogPageProps) {
  const {slug} = await params;
  const blog = await fetchBlog(slug);
  console.log(blog)

  if (!blog) {
    return <div>Blog not found!</div>
  }
  // console.log(blog)

  return (
    <main className="mx-auto mt-5 px-5 max-w-[800px] text-center">
      <h2 className="font-bungee-reg font-bold leading-10">{blog.title}</h2>
      <div className="font-bungee-reg font-bold flex justify-center gap-2">
        <p>Author: {blog.author} |</p>
        <p>Date: {formatDate(blog.date)}</p>
      </div>
      <p>Summary: {blog.summary}</p>
      <div className="flex justify-center">
        <Image src={`${process.env.NEXT_PUBLIC_API_URL}${blog.media.data[0].attributes.formats.medium.url}`} alt="blog image" width={750} height={625} className="mt-3 rounded-xl" unoptimized />
      </div>
      <p className="text-left italic">Source: {blog.source}</p>
      <h3 className="font-catamaran font-bold">{blog.subtitle}</h3>
      <div className="text-left">
        <StrapiBlocksRenderer content={blog.mainTexts} />
      </div>
      <div className="text-left">
        <h4 className="italic">References</h4>
        {blog.references.map((ref:referenceProp) => <p className="text-left text-electric-blue hover:underline hover-effect"><a href={ref.url} target="_blank">{ref.label}</a></p>)}
      </div>
    </main>
  )
}
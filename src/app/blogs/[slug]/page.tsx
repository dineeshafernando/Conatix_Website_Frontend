import Image from "next/image"
import Link from "next/link"
import { fetchBlog, BlogPageProps, referenceData } from "@/lib/strapi"
import { formatDate } from "@/lib/util"
import StrapiBlocksRenderer from "@/components/StrapiBlocksRenderer"
import {ChevronLeft} from "lucide-react"

export default async function BlogPage({params}:BlogPageProps) {
  const {slug} = await params;
  const blog = await fetchBlog(slug);
  console.log(blog)

  if (!blog) {
    return <p className="text-center text-xl">Blog not found!</p>
  }

  return (
    <main className="mx-auto mt-5 px-5 max-w-[800px] text-center">
      <Link href="/blogs" className="static md:fixed md:top-28 md:left-10 hover-effect hover:underline text-xl flex items-center"><ChevronLeft/>Conatix Blogs</Link>
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
        {blog.references.map((ref:referenceData, index) => <p key={index} className="text-left text-electric-blue hover:underline hover-effect"><a href={ref.url} target="_blank">{ref.label}</a></p>)}
      </div>
    </main>
  )
}
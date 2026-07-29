import Image from "next/image"
import Link from "next/link"
import { fetchBlog, BlogPageProps, referenceData } from "@/lib/strapi"
import { formatDate } from "@/lib/util"
import StrapiBlocksRenderer from "@/components/StrapiBlocksRenderer"
import {ChevronLeft} from "lucide-react"

export default async function BlogPage({params}:BlogPageProps) {
  const {slug} = await params;
  const blog = await fetchBlog(slug);

  if (!blog) {
    return <p className="text-center text-xl">Blog not found!</p>
  }

  console.log(blog.references)

  return (
    <main className="flex flex-col gap-4 mx-auto mt-5 px-5 max-w-[800px] text-center">
      <Link href="/blogs" className="static md:fixed md:top-28 md:left-10 hover-effect hover:underline text-xl flex items-center"><ChevronLeft/>Blogs</Link>
      <h2 className="font-bungee-reg font-bold text-khaki-gold leading-10">{blog.title}</h2>
      <div className="font-bungee-reg text-2xl font-bold flex justify-center gap-2">
        <p>Author: {blog.author} |</p>
        <p>Date: {formatDate(blog.date)}</p>
      </div>
      <p className="text-xl">Summary: {blog.summary}</p>
      <div className="flex flex-col justify-center">
        <Image src={`${process.env.NEXT_PUBLIC_API_URL}${blog.media.data[0].attributes.formats.medium.url}`} alt="blog image" width={750} height={625} className="mt-3 rounded-xl" unoptimized />
        <p className="italic">Source: {blog.source}</p>
      </div>
      <h3 className="text-left font-catamaran font-bold">{blog.subtitle}</h3>
      <div className="text-left text-xl">
        <StrapiBlocksRenderer content={blog.mainTexts} />
      </div>
      <div className="text-left">
        <h4 className="italic">References</h4>
        <ul>
          {blog.references.map((ref:referenceData, index) => <li key={index} className="list-disc list-outside ml-4 text-left text-khaki-gold hover:underline hover-effect text-lg"><a href={ref.url} target="_blank">{ref.label}</a></li>)}
        </ul>
      </div>
    </main>
  )
}
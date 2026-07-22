import Link from "next/link"
import Image from "next/image"
import SearchBar from "@/components/SearchBar"
import {getAllBlogs} from "@/lib/strapi"
import {FlatBlogPost} from "@/lib/strapi"
import {formatDate} from "@/lib/util"

export default async function Blogs() {
  const blogs = await getAllBlogs()
  const blogsEntry = blogs.map((blog:FlatBlogPost) => {
    console.log(blog.image.small)
    return (
      <section key={blog.id} className="w-full flex flex-col items-center justify-between gap-8 text-center border-b-grey border-b-2 md:flex-row md:text-left pb-3 md:pb-5">
        <div className="flex-1 flex flex-col gap-2">
          <h3 className="font-bungee-reg">{blog.title}</h3>
          <p className="font-bungee-reg">{formatDate(blog.date)}</p>
          <p>{blog.summary}</p>
          <Link href={`/blogs/${blog.slug}`} className="text-khaki-gold hover-effect hover:underline">Read More</Link>
        </div>
        <Image src={`${process.env.NEXT_PUBLIC_API_URL}${blog.image.small}`} height={250} width={250} alt={blog.altImgText} unoptimized/>
      </section>
    )
  })

  return (
    <main className="px-6">
      <h1 className="font-denson-bold text-center mb-5">Latest News</h1>
      <div className="max-w-5xl mx-auto">
        <div>
          <SearchBar />
        </div>
        <div className="flex flex-col gap-4">
          {blogsEntry}
        </div>
      </div>
    </main>
  )
}
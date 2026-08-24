import Link from "next/link"
import Image from "next/image"
import FilterBar from "@/components/BlogsFilterBar"
import Pagination from "@/components/Pagination"
import {getAllBlogs, getAllBlogCategories, FlatBlogPost} from "@/lib/strapi/blog"
import {formatDate} from "@/lib/util"
import { Suspense } from "react";

type BlogsPageProps = {
  searchParams: Promise<{search?: string, category?: string, sort?: string, page?:string, pageSize?: string}>; // promise that resolves to an object with an optional search property
}

// export default async function Blogs({searchParams}:BlogsPageProps) {
//   // For searches
//   const currentParams = await searchParams;
//   const searchTerms = currentParams.search;
//   const category = currentParams.category;
//   const sort = currentParams.sort;
//   const page = currentParams.page;
//   const pageSize = currentParams.pageSize

export default async function Blogs() {
  // Hardcoded for static export - no live searchParams available
  const searchTerms = undefined;
  const category = undefined;
  const sort = undefined;
  const page = undefined;
  const pageSize = undefined;

  // creates the blogs array
  const {blogs, metaBlogs} = await getAllBlogs(searchTerms, category, sort, page, pageSize)
  console.log(blogs)
  const blogsEntry = blogs.map((blog:FlatBlogPost, index: number) => {

    const imgUrl = (blog.image && blog.image.small) ?  `${process.env.NEXT_PUBLIC_API_URL}${blog.image.small}` : `${process.env.NEXT_PUBLIC_API_URL}${blog.origImg}`

    return (
      <section key={blog.id} className="w-full flex flex-col-reverse items-center justify-between gap-8 text-center border-b-dark-grey border-b-2 md:flex-row md:text-left pb-3 md:pb-5">
        <div className="flex-1 flex flex-col gap-2">
          <h3 className="font-bungee-hairline [-webkit-text-stroke:2px_currentColor] text-electric-blue">{blog.title}</h3>
          <p className="font-bungee-hairline text-xl">{formatDate(blog.date)}</p>
          <p className="text-xl">{blog.summary}</p>
          <Link href={`/news/${blog.slug}`} className="text-electric-blue text-xl hover-effect hover:underline">Read More</Link>
        </div>
        <Image 
          src={imgUrl} 
          height={300} 
          width={300} 
          alt={blog.altImgText} 
          priority={index === 0}
          />
      </section>
    )
  })

  const blogCategories = await getAllBlogCategories()

  // blogs range text
  const totalBlogs: number = metaBlogs.total;
  const startRange: number = totalBlogs == 0 ? 0 : (metaBlogs.page-1) * metaBlogs.pageSize + 1;
  const endRange: number = Math.min(metaBlogs.page * metaBlogs.pageSize, totalBlogs);
  

  return (
    <main>
      <h1 className="h1 mb-5">News</h1>
      <div className="max-w-5xl mx-auto">
        <div className="mb-2">
          <Suspense fallback={<div>Loading filters...</div>}>
            <FilterBar categories={blogCategories} />
          </Suspense>
          <span className="ml-2 text-xl">{startRange} - {endRange} of {totalBlogs} results</span>
        </div>
        <div className="flex flex-col min-h-[50vh] gap-4 mb-5">
          {blogsEntry.length == 0 ? <h2 className="text-center">No blogs found</h2> : blogsEntry}
        </div>
        <Suspense fallback={<div>Loading filters...</div>}>
        <Pagination pageCount={metaBlogs.pageCount} />
        </Suspense>
      </div>
    </main>
  )
}
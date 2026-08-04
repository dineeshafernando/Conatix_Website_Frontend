import type { BlocksContent } from "@strapi/blocks-react-renderer";

// Define the main object that Strapi returns for each item in the array
export interface BlogPost {
  id: number;
  attributes: BlogAttributes;
}
// Define what a single format looks like (they all share these same fields)
export interface ImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  url: string;
}

//
export interface MediaItemAttributes {
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  url: string; /* original, full-resolution image uploaded on Strapi */
  ext: string;
  mime: string;
  size: number;
  /* Strapi automatically generates smaller, optimized image versions */
  formats: { 
    thumbnail?: ImageFormat;
    small?: ImageFormat;
    medium?: ImageFormat;
    large?: ImageFormat;
  }; 
}

export interface MediaData {
  id: number;
  attributes: MediaItemAttributes;
}

export interface MediaAttributes {
  data: MediaData[];
}

export interface referenceData {
  id: number,
  label: string,
  url: string,
}

export interface categoryData {
  id: number,
  attributes: {
    label: string,
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
  }
}

// Define the blog attributes that Strapi returns 
export interface BlogAttributes {
  title: string;
  subtitle: string;
  author: string;
  date: string;
  summary: string;
  source: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  slug: string;
  mainTexts: BlocksContent;
  media: MediaAttributes;
  references: referenceData[];
  categories: {
    data: categoryData[];
  }
}

// Define the structure of the content inside the blog post, flattened. This will be used to display to the frontend.
export interface FlatBlogPost extends BlogAttributes {
  id: number;
  image: {
    small: string | undefined,
    medium: string | undefined,
    large: string | undefined,
    thumbnail: string | undefined,
  }
  altImgText: string,
  articleCategories: string[],
}

export interface Pagination {
  page: number, // current page you're on
  pageSize: number, // how many blogs per page in the blogs homepage
  pageCount: number, // total # of pages (determined by dividing total # of blogs / pageSize)
  total: number, // total # of blogs in Strapi
}

// helper function to flatten the blog post (this is the blog data object that gets passed into the blogs page and individual blog page)
function flattenBlog(blog: BlogPost):FlatBlogPost {
  const mediaData = blog.attributes.media.data[0]
  const imgFormats = mediaData.attributes.formats
  const altImgText = mediaData.attributes.alternativeText ? mediaData.attributes.alternativeText : blog.attributes.title
  const references = blog.attributes.references
  const articleCategories = blog.attributes.categories.data.map(category => category.attributes.label)

  return {
    id: blog.id,
    ...blog.attributes,
    image : {
      small: imgFormats.small?.url,
      medium: imgFormats.medium?.url,
      large: imgFormats.large?.url,
      thumbnail: imgFormats.thumbnail?.url,
    },
    altImgText: altImgText,
    references: references,
    articleCategories: articleCategories,
  }
}

// Fetches and returns all blogs created on Strapi (for the blogs homepage)
export async function getAllBlogs(searchTerm?: string, category?:string, sort?:string, page?:string, pageSize?:string) {
  const sortParam = sort || "date:desc";
  const activePage = page || "1"
  const activePageSize = pageSize || "5";
  let url = `${process.env.NEXT_PUBLIC_API_URL}/api/blogs?populate=*&sort=${sortParam}&pagination[page]=${activePage}&pagination[pageSize]=${activePageSize}`
  
  // Condition A: if user searched for specific articles by title
  if (searchTerm) url += `&filters[title][$containsi]=${searchTerm}`;
  // Condition B: User filtered by category
  if (category) url += `&filters[categories][label][$eq]=${category}`;

  const blogsPromise = await fetch(url)
  const jsonResponse = await blogsPromise.json()
  const blogs: FlatBlogPost[] = jsonResponse.data.map(flattenBlog)
  const metaBlogs = jsonResponse.meta.pagination
  return {blogs, metaBlogs}
}

export interface BlogPageProps {
  params: Promise<{ 
    slug: string; 
  }>;
}

// Fetches and returns a single blog (for the single blog page)
export async function fetchBlog(slug: string) {
  const blogsPromise = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs?filters[slug][$eq]=${slug}&populate=*`)
  const jsonResponse = await blogsPromise.json()
  return flattenBlog(jsonResponse.data[0])
}

export async function getAllBlogCategories() {
  const categoryPromise = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/categories`)
  const jsonResponse = await categoryPromise.json()
  return jsonResponse.data.map((category:categoryData) => category.attributes.label)
}


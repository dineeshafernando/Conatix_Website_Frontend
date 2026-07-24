"use client"

import { Search, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation"

type BlogsFilterBarProps = {
  categories: string[];
}

export default function BlogsFilterBar({categories}:BlogsFilterBarProps){
  const [searchTerms, setSearchTerms] = useState("")
  const [category, setCategory] = useState("")
  const [sort, setSort] = useState("")
  const router = useRouter()

  // Single source of truth function
  const performSearch = (searchTerm: string, category: string, sort: string) => {
    // Use URLSearchParams to let JavaScript create the URL parameters. This automatically handles the ? and & symbols
    const params = new URLSearchParams();

    // creates parts of the search parameter like &search="AI"
    if (searchTerm) params.append("search", searchTerm);
    if (category) params.append("category", category);
    if (sort) params.append("sort", sort);

    // Push the final URL to the router
    router.push(`/blogs?${params.toString()}`);
  };

    // Form's onSubmit (search bar)
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    performSearch(searchTerms, category, sort); // Uses your state "mirrors"
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerms = e.target.value;
    setSearchTerms(newSearchTerms); // Update UI Mirror
    performSearch(newSearchTerms, category, sort); // Instant search
  }

  // Category Dropdown onChange
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCategory = e.target.value;
    setCategory(newCategory); 
    performSearch(searchTerms, newCategory, sort); 
  };

  // Sort Dropdown onChange
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSort = e.target.value;
    setSort(newSort); // Update UI Mirror
    performSearch(searchTerms, category, newSort); 
  };

  return (
    <section className="flex flex-col md:flex-row gap-5 mb-5">
      {/* Search Bar */}
      <form 
        onSubmit={handleSearchSubmit} 
        className="flex items-center md:w-lg blogs-filter-border">
        <input 
          type="text" 
          placeholder="Search for news..." 
          className="flex-1 p-5 focus:outline-none placeholder:text-white" 
          value={searchTerms}
          onChange={(e) => handleSearchChange(e)}
        />
        <button onSubmit={handleSearchSubmit} className="cursor-pointer pr-5"><Search /></button>
      </form>
      {/* Filter: category */}
      <div className="relative">
        <select 
          className="w-full md:w-[155px] blogs-filter-border p-5 appearance-none focus:outline-none"
          value={category}
          onChange={(e) => handleCategoryChange(e)}
        >
          <option value="">All Categories</option>
          {categories.map((category:string, index) => <option key={index}>{category}</option>)}
        </select>
        <div className="center-chevron-icon">
          <ChevronDown />
        </div>
      </div>
      {/* Filter: sort */}
      <div className="relative">
        <select 
          className="w-full md:w-[120px] blogs-filter-border p-5 appearance-none focus:outline-none"
          value={sort}
          onChange={(e) => handleSortChange(e)}
        >
          <option value="">Sort By</option>
          <option value="date:desc">Latest</option>
          <option value="date:asc">Oldest</option>
          <option value="title:asc">A-Z</option>
        </select>
        <div className="center-chevron-icon">
          <ChevronDown />
        </div>
      </div>
    </section>
  )
}
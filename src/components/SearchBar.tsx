"use client"

import { Search } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation"

export default function SearchBar(){
  const [searchTerm, setSearchTerm] = useState("")
  const router = useRouter()

  function handleSearch(e: React.FormEvent) {
    e.preventDefault(); // stops page from doing a hard refresh when submitting a form
    if (searchTerm != "") {
      router.push(`/blogs?search=${searchTerm}`)
    } else {
      router.push('/blogs')
    }
  }
  return (
    <form onSubmit={handleSearch} className="flex justify-center items-center border w-lg">
      <input 
        type="text" 
        placeholder="Search for news..." 
        className="w-full p-5 focus:outline-none" 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onSubmit={handleSearch} className="cursor-pointer pr-5"><Search /></button>
    </form>
  )
}
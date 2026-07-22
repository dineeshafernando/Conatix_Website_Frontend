"use client"

import { Search } from "lucide-react";

export default function SearchBar(){
  return (
    <form className="flex justify-center items-center border w-lg">
      <input type="text" placeholder="Search for news..." className="w-full p-5" />
      <button className="cursor-pointer pr-5"><Search /></button>
    </form>
  )
}
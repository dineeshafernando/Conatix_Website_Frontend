"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageSizeChange = (newPageSize: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('pageSize', newPageSize)
    router.push(`/blogs?${params.toString()}`);
  }

  const choices: string[] = ["5", "10", "15", "20", "All"];
  const choiceButtons = choices.map(choice => {
    return (
      <button 
        key={choice} 
        className="bg-khaki-gold flex justify-center items-center p-6 w-[40px] h-[40px] rounded-md hover-effect"
        onClick={() => handlePageSizeChange(choice)}>
        {choice}
      </button>
    )
  })

  const handlePrevPage = () => {

  }

  const handleNextPage = () => {

  }

  return (
    <section className="text-2xl">
      <p className="text-center mb-5">Articles per page:</p>
      <div className="flex flex-row justify-center gap-5">
        <button className="flex items-center" onClick={handlePrevPage}><ChevronLeft />Previous</button>
        {choiceButtons}
        <button className="flex items-center" onClick={handleNextPage}>Next<ChevronRight /></button>
      </div>
    </section>
  )
}
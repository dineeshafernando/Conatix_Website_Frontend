"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { ChevronLeft, ChevronRight } from "lucide-react";

type PaginationProps = {
  pageCount: number,
}

export default function Pagination({pageCount}:PaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage: number = parseInt(searchParams.get("page") || "1")

  const handlePageSizeChange = (newPageSize: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('pageSize', newPageSize)
    router.push(`/news?${params.toString()}`);
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
    // Take a snapshot of the current URL (keeps your search, category, and pageSize intact!)
    const params = new URLSearchParams(searchParams.toString())
    // if (currentPage <= 1) return;
    // updates the current URL parameter page to be currentPage-1
    params.set("page", (currentPage-1).toString())
    router.push(`/news?${params.toString()}`)
  }

  const handleNextPage = () => {
    const params = new URLSearchParams(searchParams.toString())
    // if (currentPage >= pageCount) return;
    params.set("page", (currentPage+1).toString())
    router.push(`/news?${params.toString()}`)
  }

  return (
    <section className="text-2xl">
      <p className="text-center mb-5">Articles per page:</p>
      <div className="flex flex-row justify-center gap-5">
        <button 
          className={`flex items-center disabled:text-gray-500 disabled:cursor-not-allowed ${currentPage <= pageCount ? "" : "hover-effect" }`} 
          onClick={handlePrevPage} 
          disabled={currentPage == 1}
        >
          <ChevronLeft />Previous
        </button>
        {choiceButtons}
        <button 
          className={`flex items-center disabled:text-gray-500 disabled:cursor-not-allowed ${currentPage >= pageCount ? "" : "hover-effect" }`} 
          onClick={handleNextPage} 
          disabled={currentPage >= pageCount}
          >Next<ChevronRight />
        </button>
      </div>
    </section>
  )
}
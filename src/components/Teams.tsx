import Image from "next/image"
import { getAllMembers, FlatMember, getAllTeamCategories } from "@/lib/strapi/team"


interface MemberCardProps {
  member: FlatMember
}

// MemberCard Component
function MemberCard({member}: MemberCardProps) {
  return (
    <div className="flex flex-col items-center w-[200px]">
      <Image src={`${process.env.NEXT_PUBLIC_API_URL}${member.image.thumbnail!}`} height={200} width={200} alt={member.alternativeText ? member.alternativeText : "team member profile picture"} unoptimized className="w-[200px] h-[200px] object-contain"></Image>
      <div className="text-center mt-4 w-full">
        <p>{member.name}</p>
        <p>{member.role}</p>
      </div>
    </div>
  )
}

export default async function Teams() {
  const members: FlatMember[] = await getAllMembers();
  const categories = await getAllTeamCategories();

  return (
    <section>
      {/* "advisor" and "core" excluded: rendered separately from src/lib/advisors.ts and src/lib/core.ts, not Strapi */}
      {categories.filter((category:string) => category !== "advisor" && category !== "core").map((category:string) => {
        // grab team members with this category
        const categoryTeamMembers = members.filter((member:FlatMember) => member.teamCategory === category)
        // hide empty categories 
        if (categoryTeamMembers.length === 0) return null;
        
        return (
          <section key={category} className="mb-4">
            <h2 className="mb-4">{category.toUpperCase()}</h2>
            <div className="flex flex-wrap gap-16 text-2xl">
              {categoryTeamMembers.map((member:FlatMember) => <MemberCard key={member.slug} member={member} />)}
            </div>
          </section>
        )
      })}
    </section>
  )
}
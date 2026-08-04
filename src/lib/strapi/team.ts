import { MediaItemAttributes } from "@/lib/strapi/blog"

// Define the main object that Strapi returns for each item in the array
interface Member {
  id: number,
  attributes: MemberAttributes
}

interface MemberAttributes {
  name: string,
  role: string,
  slug: string,
  media: {
    attributes: MediaItemAttributes
  }
  team_category: {
    data?: {
      attributes: {
        label: string
      }
    }
  }
}

export interface FlatMember {
  name: string;
  role: string;
  slug: string;
  teamCategory?: string;
  image: {
    thumbnail?: string;
    small?: string;
    medium?: string;
    large?: string;
  };
  alternativeText: string | null;
}

function flattenMember({attributes}:Member):FlatMember {
  const imgFormats = attributes.media.attributes.formats
  const alternativeText = attributes.media.attributes.alternativeText
  
  return {
    name: attributes.name,
    role: attributes.role,
    teamCategory: attributes.team_category.data?.attributes.label,
    slug: attributes.slug,
    image: {
      thumbnail: imgFormats.thumbnail?.url,
      small: imgFormats.small?.url,
      medium: imgFormats.medium?.url,
      large: imgFormats.large?.url,
    },
    alternativeText: alternativeText,
  }
}

export async function getAllMembers() {
  const membersPromise = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/team-members?&populate=*`)
  const jsonResponse = await membersPromise.json()
  const members = jsonResponse.data.map(flattenMember)
  return members
}
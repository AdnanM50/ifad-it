const API_URL = process.env.NEXT_PUBLIC_API_URL

export async function getAboutPage() {
  const res = await fetch(
    `${API_URL}/api/pages?filters[slug][$eq]=about&populate[blocks][on][blocks.page-hero-section][populate][image][fields][0]=url&populate[blocks][on][blocks.page-hero-section][populate][image][fields][1]=alternativeText&populate[blocks][on][blocks.our-story-block][populate][image][fields][0]=url&populate[blocks][on][blocks.our-story-block][populate][image][fields][1]=alternativeText&populate[blocks][on][blocks.stats-block][populate]&populate[blocks][on][blocks.mission-vision-block][populate][icon][fields][0]=url&populate[blocks][on][blocks.mission-vision-block][populate][icon][fields][1]=alternativeText&populate[blocks][on][blocks.mission-vision-block][populate][image][fields][0]=url&populate[blocks][on][blocks.mission-vision-block][populate][image][fields][1]=alternativeText&populate[blocks][on][blocks.our-values-section][populate][values][populate][icon][fields][0]=url&populate[blocks][on][blocks.our-values-section][populate][values][populate][icon][fields][1]=alternativeText&populate[blocks][on][blocks.team-section][populate][teams][populate][image][fields][0]=url&populate[blocks][on][blocks.team-section][populate][teams][populate][image][fields][1]=alternativeText&populate[blocks][on][blocks.cta-section][populate][cta]=true`,
    {
      cache: "no-store",
    }
  )

  if (!res.ok) {
    throw new Error("Failed to fetch About page")
  }

  const json = await res.json()
  return json.data?.[0] || null
}

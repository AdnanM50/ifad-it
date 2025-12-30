const BASE_URL = process.env.NEXT_PUBLIC_API_URL

export async function getServiceMSIPage(slug: string) {
  const res = await fetch(
    `${BASE_URL}/api/pages?filters[slug][$eq]=${slug}` +
      `&populate[blocks][on][blocks.cta-section][populate][cta]=true` +
      `&populate[blocks][on][blocks.policy-block][populate]=*` +
      `&populate[blocks][on][blocks.card-section][populate][cards][populate][icon][fields][0]=url` +
      `&populate[blocks][on][blocks.card-section][populate][cards][populate][icon][fields][1]=alternativeText` +
      `&populate[blocks][on][blocks.our-values-section][populate][values][populate][icon][fields][0]=url` +
      `&populate[blocks][on][blocks.our-values-section][populate][values][populate][icon][fields][1]=alternativeText` +
      `&populate[blocks][on][blocks.image-card-block][populate][imageCards][populate][image][fields][0]=url` +
      `&populate[blocks][on][blocks.image-card-block][populate][imageCards][populate][image][fields][1]=alternativeText` +
      `&populate[blocks][on][blocks.image-card-block][populate][imageCards][populate][icon][fields][0]=url` +
      `&populate[blocks][on][blocks.image-card-block][populate][imageCards][populate][icon][fields][1]=alternativeText` +
      `&populate[blocks][on][blocks.text-cards][populate][textCards][populate][icon][fields][0]=url` +
      `&populate[blocks][on][blocks.text-cards][populate][textCards][populate][icon][fields][1]=alternativeText` +
      `&populate[blocks][on][blocks.faq-section][populate][faq]=true`,
    {
      cache: "no-store", // ✅ SSR fresh data
    }
  )

  if (!res.ok) {
    throw new Error("Failed to fetch service page")
  }

  const json = await res.json()

  // Strapi returns array → we always take first item
  return json?.data?.[0] ?? null
}

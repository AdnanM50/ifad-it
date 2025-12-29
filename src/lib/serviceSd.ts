const BASE_URL = process.env.NEXT_PUBLIC_API_URL

export async function getServiceSoftwarePage(slug: string) {
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
      `&populate[blocks][on][blocks.slider-block][populate][logos][fields][0]=url` +
      `&populate[blocks][on][blocks.slider-block][populate][logos][fields][1]=alternativeText` +
      `&populate[blocks][on][blocks.faq-section][populate][faq]=true`,
    { cache: 'no-store' }
  )

  if (!res.ok) {
    throw new Error('Failed to fetch Software Development page')
  }

  const json = await res.json()
  return json?.data?.[0] ?? null
}

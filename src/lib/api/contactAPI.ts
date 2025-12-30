const BASE_URL = process.env.NEXT_PUBLIC_API_URL

export async function getContactPage() {
  try {
    const res = await fetch(
      `${BASE_URL}/api/pages?filters[slug][$eq]=contact&populate[blocks][on][blocks.page-hero-section][populate][image][fields][0]=url&populate[blocks][on][blocks.page-hero-section][populate][image][fields][1]=alternativeText&populate[blocks][on][blocks.form-block][populate][InputFields]=true&populate[blocks][on][blocks.form-block][populate][cta]=true&populate[blocks][on][blocks.contact-block][populate][ContactDetails]=true&populate[blocks][on][blocks.contact-block][populate][SocialLinks]=true`,
      {
        cache: "no-store", // always fresh (SSR)
      }
    )

    if (!res.ok) {
      console.error("❌ Failed to fetch Contact page")
      return null
    }

    const json = await res.json()

    // Strapi pages API returns array
    return json?.data?.[0] ?? null
  } catch (error) {
    console.error("❌ Contact API error:", error)
    return null
  }
}

const BASE_URL = process.env.NEXT_PUBLIC_API_URL

export async function getTermsData() {
  const res = await fetch(
    `${BASE_URL}/api/pages?filters[slug][$eq]=terms-and-conditions&populate[blocks][on][blocks.page-hero-section][populate][image][fields][0]=url&populate[blocks][on][blocks.page-hero-section][populate][image][fields][1]=alternativeText&populate[blocks][on][blocks.policy-block][populate]`,
    { cache: 'no-store' } // ✅ SSR fresh
  )

  if (!res.ok) {
    throw new Error('Failed to fetch Terms policy')
  }

  const json = await res.json()
  return json?.data?.[0] ?? null
}

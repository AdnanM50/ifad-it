export async function getArticles() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/articles?populate[image][fields][0]=url&populate[image][fields][1]=alternativeText`,
    {
      cache: "no-store",
    }
  )

  if (!res.ok) {
    throw new Error("Failed to fetch articles")
  }

  const json = await res.json()
  return json.data || []
}

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/global?populate[header][populate][logo][populate][image][fields][0]=url&populate[header][populate][logo][populate][image][fields][1]=alternativeText&populate[header][populate][navigation]=true&populate[header][populate][cta]=true&populate[header][populate][services]=true&populate[footer][populate][logo][populate][image][fields][0]=url&populate[footer][populate][logo][populate][image][fields][1]=alternativeText&populate[footer][populate][social]=true&populate[footer][populate][navigation]=true&populate[footer][populate][contact]=true&populate[footer][populate][policyLinks]=true`

export async function getGlobalData() {
  const res = await fetch(API_URL, {
    next: { revalidate: 60 },
  })

  if (!res.ok) {
    throw new Error("Failed to fetch global data")
  }

  const json = await res.json()
  return json.data
}

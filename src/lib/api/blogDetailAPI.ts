const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://essential-angel-fbef6af473.strapiapp.com";

export async function getSingleBlog(slug: string) {
  const res = await fetch(
    `${BASE_URL}/api/articles?filters[slug][$eq]=${slug}` +
      `&populate[image][fields][0]=url` +
      `&populate[image][fields][1]=alternativeText` +
      `&populate[blocks][on][blocks.news-detail-section][populate]`,
    {
      cache: "no-store", // SSR, always fresh
    }
  );

  const json = await res.json();
  return json?.data?.[0] || null;
}

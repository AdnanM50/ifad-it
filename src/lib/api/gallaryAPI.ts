// lib/strapi.js

const BASE_URL = process.env.NEXT_PUBLIC_API_URL ;

export async function fetchGalleryPage() {
  const url = new URL(`${BASE_URL}/api/pages`);

  // Build query params
  url.searchParams.append('filters[slug][$eq]', 'gallery');
  url.searchParams.append('populate[blocks][on][blocks.slider-block][populate][logos][fields][0]', 'url');
  url.searchParams.append('populate[blocks][on][blocks.slider-block][populate][logos][fields][1]', 'alternativeText');

  try {
    const res = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: { revalidate: 60 }, // ISR: regenerate every 60 seconds (optional)
    });

    if (!res.ok) {
      throw new Error(`Strapi API error: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    return data.data[0]; // Return the first page (since slug is unique)
  } catch (error) {
    console.error('Error fetching gallery page:', error);
    return null;
  }
}
const API_URL = process.env.NEXT_PUBLIC_API_URL

export async function getHomePage() {
  const res = await fetch(
    `${API_URL}/api/home-page?populate[blocks][on][blocks.hero-section][populate][media][fields][0]=url&populate[blocks][on][blocks.hero-section][populate][media][fields][1]=alternativeText&populate[blocks][on][blocks.hero-section][populate][cta]=true&populate[blocks][on][blocks.slider-block][populate][logos][fields][0]=url&populate[blocks][on][blocks.slider-block][populate][logos][fields][1]=alternativeText&populate[blocks][on][blocks.about-section][populate][image][fields][0]=url&populate[blocks][on][blocks.about-section][populate][image][fields][1]=alternativeText&populate[blocks][on][blocks.about-section][populate][aboutCTA]=true&populate[blocks][on][blocks.stats-block][populate]&populate[blocks][on][blocks.service-section][populate][services][populate][icon][fields][0]=url&populate[blocks][on][blocks.service-section][populate][services][populate][icon][fields][1]=alternativeText&populate[blocks][on][blocks.service-section][populate][services][populate][cta]=true&populate[blocks][on][blocks.why-choose-section][populate][whyChoose][populate][icon][fields][0]=url&populate[blocks][on][blocks.why-choose-section][populate][whyChoose][populate][icon][fields][1]=alternativeText&populate[blocks][on][blocks.why-choose-section][populate][cta]=true&populate[blocks][on][blocks.testimonial-section][populate][testimonial][populate][image][fields][0]=url&populate[blocks][on][blocks.testimonial-section][populate][testimonial][populate][image][fields][1]=alternativeText&populate[blocks][on][blocks.faq-section][populate][faq]=true`,
    {
      next: { revalidate: 10 } // 🔥 auto update every 10s
    }
  )

  if (!res.ok) throw new Error("Failed to fetch home page")

  const json = await res.json()
  return json.data
}

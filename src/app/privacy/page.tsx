import React from 'react'
import { getPrivacyData } from '@/lib/api/privacyAPI'

export default async function Page() {
  const page = await getPrivacyData()
  console.log("🚀 ~ Page ~ page:", page)
  if (!page) return null

  const blocks = page.blocks || []

  const hero = blocks.find(
    (b: any) => b.__component === 'blocks.page-hero-section'
  )

  const policy = blocks.find(
    (b: any) => b.__component === 'blocks.policy-block'
  )

  return (
    <div className="mt-[85px] lg:mt-[100px]">

      {hero && (
        <div className="relative h-[260px] md:h-80 bg-[#7A7777] flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold arial-font">
            {hero.title}
          </h1>
        </div>
      )}

      {/* {policy && (
        <div className="bg-white"> 
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14">
           
            <p className="text-sm text-gray-500 mb-6">
              {policy.SubTitle}
            </p>

            <article className="prose prose-gray max-w-none prose-h2:text-xl prose-h2:font-semibold prose-h2:mt-8 prose-h3:text-lg prose-h3:font-semibold prose-strong:font-semibold">
              {policy.content
                .split('\n\n')
                .map((block: string, index: number) => {
               
                  if (
                    !block.includes(':') &&
                    block.length < 80 &&
                    block === block.trim()
                  ) {
                    return <h2 key={index}>{block}</h2>
                  }

                  if (block.startsWith('-')) {
                    return (
                      <ul key={index}>
                        {block.split('\n').map((li, i) => (
                          <li key={i}>{li.replace('-', '').trim()}</li>
                        ))}
                      </ul>
                    )
                  }

                  return <p key={index}>{block}</p>
                })}
            </article>
          </div>
        </div>
      )} */}
    </div>
  )
}

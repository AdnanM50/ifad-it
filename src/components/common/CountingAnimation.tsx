'use client'
import React, { useEffect, useRef, useState } from 'react'

const parseNumber = (value?: string) =>
  value ? parseInt(value.replace(/\D/g, ''), 10) : 0

const CountingAnimation = ({ data }: { data: any }) => {
  const [counts, setCounts] = useState({ exp: 0, clients: 0, team: 0 })
  const [hasAnimated, setHasAnimated] = useState(false)
  const statsRef = useRef<HTMLDivElement | null>(null)

  const animateCount = (
    start: number,
    end: number,
    duration: number,
    setter: (val: number) => void
  ) => {
    let startTime: number | null = null

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setter(Math.floor(progress * (end - start) + start))
      if (progress < 1) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }

  useEffect(() => {
    if (!data || hasAnimated) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true)

          animateCount(0, parseNumber(data.experience), 1500, (v) =>
            setCounts((p) => ({ ...p, exp: v }))
          )
          animateCount(0, parseNumber(data.clients), 1800, (v) =>
            setCounts((p) => ({ ...p, clients: v }))
          )
          animateCount(0, parseNumber(data.team), 1200, (v) =>
            setCounts((p) => ({ ...p, team: v }))
          )
        }
      },
      { threshold: 0.2 }
    )

    const el = statsRef.current
    if (el) observer.observe(el)

    // ✅ CLEANUP — ALWAYS RETURNS VOID
    return () => {
      if (el) observer.unobserve(el)
    }
  }, [data, hasAnimated])

  return (
    <div ref={statsRef} className="mt-16 bg-orange-50 py-12 md:py-16">
      <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row justify-around items-center gap-8">
        {[
          { label: 'Years of Experience', value: counts.exp },
          { label: 'Happy Clients', value: counts.clients },
          { label: 'Team Members', value: counts.team },
        ].map((stat, idx) => (
          <div key={idx} className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-[#F36A10] font-inter">
              {stat.value}+
            </div>
            <div className="text-[#6F7377] text-base font-inter mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CountingAnimation

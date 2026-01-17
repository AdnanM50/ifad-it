'use client'

import { useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import PrimaryButton from "../common/primary-button"

type HeroSectionProps = {
  data: {
    heading: string
    subTitle: string
    media?: {
      url: string
      alternativeText?: string | null
    }
    cta?: {
      text: string
      href: string
      isExternal: boolean
    }
  }
}

export function HeroSection({ data }: HeroSectionProps) {
  if (!data) return null

  const isVideo =
    !!data.media?.url &&
    (data.media.url.endsWith(".mp4") || data.media.url.endsWith(".webm"))

  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isMuted, setIsMuted] = useState(true)

  const toggleSound = () => {
    if (!videoRef.current) return
    videoRef.current.muted = !isMuted
    setIsMuted(!isMuted)
  }

  return (
    <section className="relative w-full h-[600px] md:h-[815px] pt-20 overflow-hidden">
      {/* MEDIA */}
      <div className="absolute inset-0">
        {isVideo ? (
          <>
            <video
              ref={videoRef}
              src={data.media?.url}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              className="w-full h-full object-cover"
            />

            {/* SOUND BUTTON (VIDEO ONLY) */}
            <button
              onClick={toggleSound}
              aria-label="Toggle sound"
              className="absolute bottom-6 right-6 z-20 bg-black/60 hover:bg-black/80 p-2 rounded-full transition"
            >
              {isMuted ? (
                /* MUTE ICON */
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <line x1="23" y1="9" x2="17" y2="15" />
                  <line x1="17" y1="9" x2="23" y2="15" />
                </svg>
              ) : (
                /* SOUND ON ICON */
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                </svg>
              )}
            </button>
          </>
        ) : (
          /* IMAGE ONLY (NO SOUND BUTTON) */
          <Image
            src={data.media?.url || ""}
            alt={data.media?.alternativeText || "Hero background"}
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            className="object-cover object-center"
          />
        )}

        <div className="hero-bg-shadow" />
      </div>

      {/* CONTENT */}
      <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl arial-font lg:text-6xl font-bold text-white mb-4 max-w-4xl text-balance">
          {data.heading}
        </h1>

        <p className="text-xl md:text-2xl text-white/90 !font-inter mb-8 max-w-2xl">
          {data.subTitle}
        </p>

        {data.cta?.href && (
          <Link
            href={data.cta.href}
            target={data.cta.isExternal ? "_blank" : "_self"}
          >
            <PrimaryButton>{data.cta.text}</PrimaryButton>
          </Link>
        )}
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="w-[30px] h-[50px] border-2 border-white rounded-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="animate-bounce mt-2"
            width="15"
            height="21"
            viewBox="0 0 15 21"
            fill="none"
          >
            <path d="M7.27 20.84V0.7" stroke="white" strokeWidth="2" />
            <path d="M1 14l6 6 6-6" stroke="white" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </section>
  )
}

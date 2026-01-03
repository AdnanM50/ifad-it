'use client'

import Image from 'next/image'
import { ShieldCheck, Zap } from 'lucide-react'

const technologies = [
  { name: 'React', src: '/tech/react.svg' },
  { name: 'Node.js', src: '/tech/node.svg' },
  { name: 'Python', src: '/tech/python.svg' },
  { name: 'PHP', src: '/tech/php.svg' },
  { name: 'Flutter', src: '/tech/flutter.svg' },
  { name: 'TypeScript', src: '/tech/typescript.svg' },
]

export default function TechnologyStack() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Left Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-orange-500">
              Technology Stack
            </p>

            <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
              Modern, Proven <br /> Technologies
            </h2>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-500">
              We use industry-standard frameworks and languages ensuring your
              software is built on solid foundations that can scale with your business.
            </p>

            {/* Features */}
            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-100">
                  <ShieldCheck size={18} className="text-orange-500" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Secure Architecture
                  </p>
                  <p className="text-xs text-gray-500">
                    Cloud-ready infrastructure that handles growth and protects your data.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-100">
                  <Zap size={18} className="text-orange-500" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    High Performance
                  </p>
                  <p className="text-xs text-gray-500">
                    Optimized code and efficient databases for lightning-fast experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="rounded-2xl border border-orange-100 bg-[#FFFAF5] p-8">
            <div className="grid grid-cols-3 gap-6 sm:gap-8">
              {technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center justify-center"
                >
                  <Image
                    src={tech.src}
                    alt={tech.name}
                    width={64}
                    height={64}
                    className="h-14 w-14 object-contain sm:h-16 sm:w-16"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

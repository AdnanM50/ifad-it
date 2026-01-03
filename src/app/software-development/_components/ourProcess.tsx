'use client'

import {
  Search,
  PenTool,
  Code2,
  ShieldCheck,
  Rocket,
  Headphones,
} from 'lucide-react'

type Step = {
  id: string
  title: string
  description: string
  icon: React.ElementType
}

const steps: Step[] = [
  {
    id: '01',
    title: 'Discovery & Planning',
    description:
      'Understand your goals, users, and requirements. We map out features and technical architecture.',
    icon: Search,
  },
  {
    id: '02',
    title: 'Design & Prototyping',
    description:
      'Create intuitive interfaces and user experiences. You see what you’re getting before we code.',
    icon: PenTool,
  },
  {
    id: '03',
    title: 'Agile Development',
    description:
      'Build in sprints with regular updates. You stay informed and can provide feedback throughout.',
    icon: Code2,
  },
  {
    id: '04',
    title: 'Testing & Quality Assurance',
    description:
      'Rigorous testing ensures your software works flawlessly before launch.',
    icon: ShieldCheck,
  },
  {
    id: '05',
    title: 'Deployment & Training',
    description:
      'Smooth launch with user training and documentation. Your team knows how to use it.',
    icon: Rocket,
  },
  {
    id: '06',
    title: 'Ongoing Support',
    description:
      'Continuous monitoring, updates, and improvements as your needs evolve.',
    icon: Headphones,
  },
]

export default function OurProcess() {
  return (
    <section className="relative bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-orange-500 uppercase tracking-wide">
            Our Process
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
            Development Approach
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-500 text-sm sm:text-base">
            A proven methodology that ensures your project is delivered on time,
            on budget, and exceeds expectations.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical dotted line */}
          <div className="absolute left-6 top-0 h-full w-px border-l border-dashed border-orange-200 hidden sm:block" />

          <div className="space-y-6">
            {steps.map((step) => {
              const Icon = step.icon

              return (
                <div
                  key={step.id}
                  className="relative flex items-start gap-5"
                >
                  {/* Icon */}
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-500 text-white">
                    <Icon size={22} />
                  </div>

                  {/* Card */}
                  <div className="flex-1 rounded-xl border border-gray-100 bg-white px-5 py-4 shadow-sm transition hover:shadow-md">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-orange-500">
                        {step.id}.
                      </span>
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                        {step.title}
                      </h3>
                    </div>
                    <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

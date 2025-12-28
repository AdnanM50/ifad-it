'use client'

import { useState } from 'react'

interface FAQItem {
  id: number
  ques: string
  ans: string
}

const faqs: FAQItem[] = [
  {
    id: 1,
    ques: 'Is iTracker compatible with all vehicle types in Bangladesh?',
    ans: 'Yes, iTracker works with most cars, motorcycles, and commercial vehicles commonly used in Bangladesh.',
  },
  {
    id: 2,
    ques: 'How quickly can I start tracking after installation?',
    ans: 'Immediately. Once our technician installs the device, you’ll get instant access to your dashboard. Most installations take 30–45 minutes.',
  },
  {
    id: 3,
    ques: 'What happens if my vehicle is stolen?',
    ans: 'You can track your vehicle in real time using the dashboard and share location details with law enforcement for quick recovery.',
  },
  {
    id: 4,
    ques: 'Does iTracker require a monthly subscription?',
    ans: 'Yes, a minimal monthly subscription is required to maintain GPS connectivity and real-time tracking services.',
  },
]

const ServiceThFAQSection = () => {
  // Open the 2nd FAQ by default
  const [openIndex, setOpenIndex] = useState<number | null>(1)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-white py-12 md:py-[120px] px-2 lg:px-0">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h3 className="section-title mb-2">FAQ</h3>

          <h2 className="section-subtitle mb-4">
            Common Questions About iTracker
          </h2>

          <p className="section-description  mx-auto">
            Here are answers to some of the most common questions about iTracker.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="bg-white rounded-[8px] border border-[#EBECF0] transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 sm:px-6 py-4 flex justify-between items-center text-left hover:bg-[#EBECF0] transition-colors"
              >
                <span className="font-medium font-inter text-lg sm:text-xl text-[#1A1A1A]">
                  {faq.ques}
                </span>

                <span
                  className={`w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-[8px] transition-colors ${
                    openIndex === index
                      ? 'bg-orange-100 text-[#F36A10]'
                      : 'bg-[#F36A10] text-white'
                  }`}
                >
                  {openIndex === index ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 12H5"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m-6-6h6m0 0h6"
                      />
                    </svg>
                  )}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? 'max-h-[1000px] opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-4 text-base font-normal font-inter text-[#6F7377]">
                  {faq.ans}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceThFAQSection

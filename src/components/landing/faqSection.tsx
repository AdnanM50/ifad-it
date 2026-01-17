'use client';

import { useState } from 'react';

interface FAQItem {
  id: number;
  ques: string;
  ans: string;
}

const FAQSection = ({ data }: { data: any }) => {


  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs: FAQItem[] = data?.faq || [];

  return (
    <section className="bg-[#FCFCFD] py-12 md:py-[120px] px-2 lg:px-0">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h3 className="section-title mb-2">
            {data?.title}
          </h3>

          <h2 className="section-subtitle mb-4">
            {data?.headline}
          </h2>

          <p className="section-description max-w-[500px] mx-auto">
            {data?.subTitle}
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="bg-white rounded-[8px] border border-[#EBECF0] transition-all duration-1000"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 gap-1 sm:px-6 py-4 flex justify-between items-center text-left hover:bg-[#EBECF0] transition-colors"
              >
                <span className="font-medium font-inter text-lg sm:text-xl text-[#1A1A1A]">
                  {faq.ques}
                </span>

                <span
                  className={`w-6 sm:h-8 h-6 sm:w-8 flex items-center justify-center rounded-[8px] transition-colors ${
                    openIndex === index
                      ? 'bg-orange-100 text-[#F36A10]'
                      : 'bg-[#F36A10] text-white'
                  }`}
                >
                  {openIndex === index ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 mx-1 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H5" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 mx-1 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  )}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-1000 ease-in-out ${
                  openIndex === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-4 pt-0 text-base font-normal font-inter text-[#6F7377]">
                  {faq.ans}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

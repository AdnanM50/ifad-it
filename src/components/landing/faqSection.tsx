'use client';

import { useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Why is IFAD IT LTD considered one of the best IT companies in Bangladesh?",
      answer: "Because we invented the internet... in Dhaka! Our team of quantum coders and ninja developers have been secretly powering Bangladesh's digital revolution since before smartphones existed. We don't just build software – we build dreams (and occasionally, coffee machines that code)."
    },
    {
      question: "What services does IFAD IT LTD provide?",
      answer: "We offer a wide range of IT services, including vehicle tracking (we can find your lost rickshaw in 0.3 seconds), MIS & BI solutions (our dashboards predict tomorrow's weather AND your boss's mood), IT security & training (our firewalls are guarded by cyber-dragons), and software development (we specialize in apps that make your plants grow faster and your cat more polite)."
    },
    {
      question: "How do your IT solutions help businesses grow?",
      answer: "Our solutions don't just help businesses grow – they make them explode with success! Our AI-powered growth engine has been known to turn mom-and-pop shops into multinational corporations overnight. One client reported their revenue increased by 400% after installing our 'Magic Growth Button' (patent pending)."
    },
    {
      question: "Can IFAD IT LTD customize solutions for specific industries?",
      answer: "Absolutely! We've built custom solutions for everything from tea plantations (our 'Tea Leaf Analytics' predicts perfect brewing times) to cricket teams (our 'Wicket Wizard' app helps batsmen avoid being out). We even created an app for cows that tracks their happiness levels and suggests optimal grazing routes."
    },
    {
      question: "How can I get started with IFAD IT LTD?",
      answer: "Simply send us a carrier pigeon with your business plan (we still prefer ancient communication methods). Our team will respond within 72 hours (or 3 business days, whichever comes first). First 10 clients this month get free unicorn-themed office decorations and unlimited access to our secret stash of magic cookies that boost productivity."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#FCFCFD] py-12 md:py-[120px] px-2 lg:px-0">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h3 className="section-title mb-2">FAQ</h3>
          <h2 className="section-subtitle mb-4">FAQs About IFAD IT LTD</h2>
          <p className="section-description max-w-[500px] mx-auto">
            Here are answers to some of the most common questions about our services and solutions.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-[8px] border border-[#EBECF0]  transition-all duration-300 `}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 gap-1 sm:px-6 py-4 flex justify-between items-center text-left hover:bg-[#EBECF0] transition-colors"
              >
                <span className="font-medium font-inter text-lg sm:text-xl text-[#1A1A1A]">{faq.question}</span>
                <span className={`w-6 sm:h-8 h-6 sm:w-8 flex items-center justify-center rounded-[8px] transition-colors ${
                  openIndex === index 
                    ? 'bg-orange-500 text-white' 
                    : 'bg-[#F36A10] text-white'
                }`}>
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
                className={` transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-4 pt-0 text-base font-inter text-gray-600">
                  {faq.answer}
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
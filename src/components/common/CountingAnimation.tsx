'use client'
import React, { useEffect, useRef, useState } from 'react'

const CountingAnimation = () => {
      const [counts, setCounts] = useState({ exp: 0, clients: 0, team: 0 });
      const [hasAnimated, setHasAnimated] = useState(false);
      const statsRef = useRef(null);
    
      const animateCount = (start: number, end: number, duration: number, setter: (val: number) => void) => {
        let startTime: number | null = null;
        const animate = (timestamp: number) => {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / duration, 1);
          const val = Math.floor(progress * (end - start) + start);
          setter(val);
          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        requestAnimationFrame(animate);
      };
    
      useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            const entry = entries[0];
            if (entry.isIntersecting && !hasAnimated) {
              setHasAnimated(true);
              animateCount(0, 10, 1500, (val) => setCounts((prev) => ({ ...prev, exp: val })));
              animateCount(0, 200, 1800, (val) => setCounts((prev) => ({ ...prev, clients: val })));
              animateCount(0, 50, 1200, (val) => setCounts((prev) => ({ ...prev, team: val })));
            }
          },
          { threshold: 0.2 } 
        );
    
        if (statsRef.current) {
          observer.observe(statsRef.current);
        }
    
        return () => {
          if (statsRef.current) {
            observer.unobserve(statsRef.current);
          }
        };
      }, [hasAnimated]);
  return (
  <div ref={statsRef} className="mt-16 bg-orange-50 py-12 md:py-16">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row justify-around items-center gap-8">
          {[
            { label: "Years of Experience", value: counts.exp, plus: true },
            { label: "Happy Clients", value: counts.clients, plus: true },
            { label: "Team Members", value: counts.team, plus: true }
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#F36A10] font-inter">
                {stat.value}
                {stat.plus && '+'}
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
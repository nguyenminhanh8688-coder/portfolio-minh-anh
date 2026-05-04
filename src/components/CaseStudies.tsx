'use client'

import { motion } from 'framer-motion'
import { portfolioData } from '@/lib/data'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { useRef } from 'react'

export default function CaseStudies() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400
      scrollContainerRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section id="projects" className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-navy mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl">
            A selection of culture campaigns and communication strategies that made impact.
          </p>
        </motion.div>

        {/* Horizontal scroll container */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory"
            style={{ scrollBehavior: 'smooth' }}
          >
            {portfolioData.caseStudies.map((caseStudy, idx) => (
              <motion.div
                key={caseStudy.id}
                className="flex-shrink-0 w-full md:w-[500px] snap-start"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden bg-gray-200">
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${caseStudy.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                    />
                    <Image
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="mb-4">
                      <p className="text-sm text-accent font-semibold uppercase tracking-wider">
                        {caseStudy.company}
                      </p>
                      <h3 className="text-2xl font-bold text-navy mt-2 mb-2">
                        {caseStudy.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{caseStudy.subtitle}</p>
                    </div>

                    <div className="mb-6 flex-1">
                      <p className="text-sm text-gray-600 mb-4">
                        <span className="font-semibold text-navy">Role:</span> {caseStudy.role}
                      </p>
                      <div className="space-y-2">
                        {caseStudy.results.map((result, i) => (
                          <p key={i} className="text-sm text-gray-600 flex items-start gap-2">
                            <span className="text-accent font-bold mt-1">+</span>
                            {result}
                          </p>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <p className="text-xs text-gray-500">{caseStudy.timeline}</p>
                      <motion.button
                        className="flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
                        whileHover={{ x: 5 }}
                      >
                        View Case <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scroll buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10 p-2 bg-navy text-white rounded-full hover:bg-navy-dark transition-colors hidden lg:flex items-center justify-center"
          >
            ←
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10 p-2 bg-navy text-white rounded-full hover:bg-navy-dark transition-colors hidden lg:flex items-center justify-center"
          >
            →
          </button>
        </div>
      </div>
    </section>
  )
}

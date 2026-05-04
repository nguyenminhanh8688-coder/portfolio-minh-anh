'use client'

import { motion } from 'framer-motion'
import { portfolioData } from '@/lib/data'

export default function About() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left: Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
            className="relative"
          >
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-accent to-blue-500 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-navy opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-48 h-48 rounded-full bg-white bg-opacity-10 backdrop-blur-sm flex items-center justify-center mx-auto mb-6">
                    <span className="text-6xl">📸</span>
                  </div>
                  <p className="text-sm text-gray-100">Headshot placeholder</p>
                  <p className="text-xs text-gray-200 mt-2">(Update with real image later)</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Text content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-navy mb-6">
              Who I am
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {portfolioData.personal.bio}
            </p>

            <div className="space-y-4 mb-8">
              <div>
                <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
                  What I Do
                </h3>
                <p className="text-gray-600">
                  Craft culture strategies that scale. Build systems where people understand and live the values. Create content that lands. Tell stories that matter.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
                  How I Work
                </h3>
                <p className="text-gray-600">
                  Strategic + creative. Data-informed + human-centered. Thinking about scalability from day one. Cross-functional collaboration is my playground.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
                  Beyond Work
                </h3>
                <p className="text-gray-600">
                  Athlete, photographer, architecture nerd. Love team sports and capturing authentic moments. Always curious about human behavior and culture systems.
                </p>
              </div>
            </div>

            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-navy to-accent text-white font-semibold rounded-lg hover:shadow-lg transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Work Together
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

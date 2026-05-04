'use client'

import { motion } from 'framer-motion'
import { portfolioData } from '@/lib/data'

export default function Stats() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {portfolioData.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              className="text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative inline-block">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-accent to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-40 transition-opacity"
                  whileHover={{ scale: 1.1 }}
                />
                <div className="relative bg-white px-8 py-6 rounded-lg">
                  <div className="text-5xl md:text-6xl font-bold text-accent mb-2">
                    {stat.number}
                  </div>
                  <p className="text-gray-600 text-lg">{stat.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

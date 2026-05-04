'use client'

import { motion } from 'framer-motion'
import { portfolioData } from '@/lib/data'

export default function Skills() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-navy mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600">
            Strategic thinking + creative execution
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {portfolioData.skills.map((skillGroup, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-8 bg-gradient-to-b from-accent to-blue-500 rounded-full"></div>
                  <h3 className="text-2xl font-bold text-navy">
                    {skillGroup.group}
                  </h3>
                </div>

                <div className="space-y-3">
                  {skillGroup.items.map((item, itemIdx) => (
                    <motion.div
                      key={itemIdx}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: itemIdx * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-accent font-bold text-lg mt-1">•</span>
                      <p className="text-gray-700">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bonus: Languages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 bg-white p-8 rounded-2xl shadow-lg"
        >
          <h3 className="text-2xl font-bold text-navy mb-4 flex items-center gap-3">
            <span className="text-xl">🌐</span> Languages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="font-semibold text-navy mb-2">Vietnamese</p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-accent to-blue-500 h-2 rounded-full w-full"></div>
              </div>
              <p className="text-sm text-gray-600 mt-1">Native</p>
            </div>
            <div>
              <p className="font-semibold text-navy mb-2">English</p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-accent to-blue-500 h-2 rounded-full w-4/5"></div>
              </div>
              <p className="text-sm text-gray-600 mt-1">TOEIC 695 – Professional</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

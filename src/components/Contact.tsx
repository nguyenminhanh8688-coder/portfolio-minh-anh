'use client'

import { motion } from 'framer-motion'
import { portfolioData } from '@/lib/data'
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react'

export default function Contact() {
  return (
    <section className="py-24 px-6 bg-gradient-navy text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Let's Talk About<br />Culture Strategy
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Ready to build something meaningful? Let's explore how we can transform your organizational culture together.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Mail,
              label: 'Email',
              value: portfolioData.personal.email,
              href: `mailto:${portfolioData.personal.email}`,
            },
            {
              icon: Phone,
              label: 'Phone',
              value: portfolioData.personal.phone,
              href: `tel:${portfolioData.personal.phone.replace(/\s/g, '')}`,
            },
            {
              icon: MapPin,
              label: 'Location',
              value: portfolioData.personal.location,
              href: '#',
            },
          ].map((contact, idx) => {
            const Icon = contact.icon
            return (
              <motion.a
                key={idx}
                href={contact.href}
                className="group bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-2xl hover:bg-opacity-20 transition-all duration-300 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Icon className="w-12 h-12 mx-auto mb-4 text-accent group-hover:scale-110 transition-transform" />
                <p className="text-sm text-gray-300 mb-2 uppercase tracking-wider">
                  {contact.label}
                </p>
                <p className="text-lg font-semibold group-hover:text-accent transition-colors">
                  {contact.value}
                </p>
              </motion.a>
            )
          })}
        </div>

        {/* CTA Button */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.a
            href={`mailto:${portfolioData.personal.email}`}
            className="inline-flex items-center gap-2 px-10 py-4 bg-accent text-navy font-bold text-lg rounded-lg hover:bg-white transition-all duration-300 shadow-2xl hover:shadow-3xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
            <ExternalLink className="w-5 h-5" />
          </motion.a>
        </motion.div>

        {/* Social links */}
        <motion.div
          className="flex justify-center gap-8 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {[
            { label: 'LinkedIn', href: '#' },
            { label: 'Portfolio', href: '#' },
            { label: 'Email', href: `mailto:${portfolioData.personal.email}` },
          ].map((social, idx) => (
            <motion.a
              key={idx}
              href={social.href}
              className="text-gray-300 hover:text-accent transition-colors"
              whileHover={{ scale: 1.1, y: -2 }}
            >
              {social.label}
            </motion.a>
          ))}
        </motion.div>

        {/* Footer */}
        <div className="border-t border-white border-opacity-20 pt-8 text-center text-gray-300">
          <p className="mb-2">
            © 2026 Nguyễn Minh Anh. All rights reserved.
          </p>
          <p className="text-sm">
            Designed with care. Built with React + Framer Motion.
          </p>
        </div>
      </div>
    </section>
  )
}

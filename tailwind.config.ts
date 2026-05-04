import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#1a3a52',
        'navy-dark': '#0e2638',
        accent: '#2c9991',
        'accent-light': '#e8f4f3',
      },
      backgroundImage: {
        'gradient-navy': 'linear-gradient(135deg, #1a3a52 0%, #0e2638 50%, #2c9991 100%)',
        'gradient-navy-accent': 'linear-gradient(135deg, #1a3a52 0%, #2c9991 100%)',
      },
    },
  },
  plugins: [],
}
export default config

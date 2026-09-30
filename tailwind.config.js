/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        night: '#000000',      // OLED black base
        raised: '#0A0A0A',     // elevated panels
        line: '#1C1C1C',       // hairlines & borders
        snow: '#F4F1EA',       // headings / bright text (warm white)
        mist: '#9A9AA0',       // body text
        accent: '#C9A254',     // champagne gold
        accentdeep: '#7E5F22', // deep gold — glows & gradients
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '64rem',
      },
    },
  },
  plugins: [],
};

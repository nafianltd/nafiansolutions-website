/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
  ], 
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-dm-sans)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      keyframes: {
        glow: {
          '0%, 100%': {
            textShadow: '0 0 4px rgba(255, 255, 0, 0.2), 0 0 12px rgba(255, 255, 0, 0.2)',
          },
          '50%': {
            textShadow: '0 0 16px rgba(255, 255, 0, 0.4), 0 0 24px rgba(255, 255, 0, 0.2)',
          },
        },
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}


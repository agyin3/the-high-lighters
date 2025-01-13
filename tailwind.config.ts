import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        highlightersGreen: 'var(--highlighters-green)',
        highlightersRed: 'var(--highlighters-red)',
        highlightersYellow: 'var(--highlighters-yellow)',
        highlightersOrange: 'var(--highlighters-orange)',
      },
      fontFamily: {
        'shrikhand': ['Shrikhand', 'cursive'],
      },
    },
  },
  plugins: [],
} satisfies Config;

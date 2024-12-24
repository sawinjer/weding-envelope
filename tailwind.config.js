/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
      fontFamily: {
        "great-vibe": ['"Great Vibes"', 'serif'],
        "oswald": ['"Didact Gothic"', 'serif']
      }
    },
    screens: {
      'md': '660px'
    }
	},
	plugins: [],
};

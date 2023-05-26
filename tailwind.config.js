/** @type {import('tailwindcss').Config} */

export const content = [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    fontFamily: {
      satoshi: ["Satoshi", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
    colors: {
      "primary-orange": "#FF5722",
    },
  },
};
export const plugins = [];

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     './pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './components/**/*.{js,ts,jsx,tsx,mdx}',
//     './app/**/*.{js,ts,jsx,tsx,mdx}',
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         satoshi: ['Satoshi', 'sans-serif'],
//         inter: ['Inter', 'sans-serif'],
//       },
//       colors: {
//         'primary-orange': '#FF5722',
//       }
//     },
//   },
//   plugins: [],
// }

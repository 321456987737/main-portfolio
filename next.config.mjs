/** @type {import('next').NextConfig} */
const nextConfig = {
    darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'jetbrains': ['JetBrains Mono', 'monospace'],
        'inter': ['Inter', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
    },
  },
};

export default nextConfig;
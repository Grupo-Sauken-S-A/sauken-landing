import type { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin';

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	container: {
		center: true,
		padding: "2rem",
		screens: {
		  "2xl": "1300px",
		},
	  },
  	extend: {
		fontSize: {
			'xs': ['0.81rem', { lineHeight: '1.2'}],
			'sm': ['0.93rem', { lineHeight: '1.2'}],
			'base': ['1rem', { lineHeight: '1.2'}],
			'lg': ['1.125rem',{ lineHeight: '1.2'}],
			'xl': [ 'clamp(1rem, calc(0.0095 * (100vw - 40rem) + 1rem), 1.38rem)', {lineHeight: '1.35', fontWeight: '330'}],
			'2xl': ['clamp(1rem, calc(0.0125 * (100vw - 40rem) + 1rem), 1.5rem)', { lineHeight: '1.18'}],
			'3xl': ['clamp(1.2rem, calc(0.02 * (100vw - 40rem) + 1.2rem), 2rem)', { lineHeight: '1.1' }],
			'4xl': ['clamp(1.56rem, calc(0.061 * (100vw - 40rem) + 1.56rem), 4rem)', { lineHeight: '1.1' }],
			'5xl': [ 'clamp(1.56rem, calc(0.0705 * (100vw - 40rem) + 1.56rem), 4.38rem)', { lineHeight: '1.1' }],
			'lead':['clamp(1rem, calc(0.0095 * (100vw - 40rem) + 1rem), 1.38rem)', {lineHeight: '1.25', fontWeight: '330'}],
			'alternative-title': ['clamp(1.25rem, calc(0.01575 * (100vw - 40rem) + 1.25rem), 1.88rem)', { lineHeight: '1.3' }],
		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
			c1: 'var(--c1)',
			c2: 'var(--c2)',
			c3: 'var(--c3)',
			c4: 'var(--c4)',
			c5: 'var(--c5)',
			c6: 'var(--c6)',
			c7: 'var(--c7)',
			lightblue: 'var(--lightblue)',
			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [
	require("tailwindcss-animate"),
	plugin(function ({ addComponents }) {
      addComponents({
        '.text-sm strong, .text-sm b': { fontWeight: '500' },  
        '.text-base strong, .text-base b': { fontWeight: '500' }, 
        '.text-lg strong, .text-lg b': { fontWeight: '500' }, 
        '.text-xl strong, .text-xl b': { fontWeight: '500' }, 
        // Agrega más tamaños según necesites
      });
    }),

	],
};
export default config;

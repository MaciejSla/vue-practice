import animate from 'tailwindcss-animate'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  safelist: ['dark'],
  prefix: '',
  content: [
    './pages/**/*.{ts,tsx,vue}',
    './components/**/*.{ts,tsx,vue}',
    './app/**/*.{ts,tsx,vue}',
    './src/**/*.{ts,tsx,vue}',
    './node_modules/flowbite/**/*.js'
  ],

  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        main: {
          DEFAULT: 'hsl(var(--main))',
          hover: 'hsl(var(--main-hover))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          50: 'hsl(var(--primary-50))',
          100: 'hsl(var(--primary-100))',
          200: 'hsl(var(--primary-200))',
          300: 'hsl(var(--primary-300))',
          400: 'hsl(var(--primary-400))',
          500: 'hsl(var(--primary-500))',
          600: 'hsl(var(--primary-600))',
          700: 'hsl(var(--primary-700))',
          800: 'hsl(var(--primary-800))',
          900: 'hsl(var(--primary-900))',
          950: 'hsl(var(--primary-950))',
          inverse: 'hsl(var(--primary-inverse))',
          hover: 'hsl(var(--primary-hover))',
          activeColor: 'hsl(var(--primary-active-color))',
          highlight: 'hsl(var(--primary)/var(--primary-highlight-opacity))',
          'highlight-inverse': 'hsl(var(--primary-highlight-inverse))',
          'highlight-hover': 'hsl(var(--primary)/var(--primary-highlight-hover-opacity))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        surface: {
          DEFAULT: 'hsl(var(--surface-500))',
          0: 'hsl(var(--surface-0))',
          50: 'hsl(var(--surface-50))',
          100: 'hsl(var(--surface-100))',
          200: 'hsl(var(--surface-200))',
          300: 'hsl(var(--surface-300))',
          400: 'hsl(var(--surface-400))',
          500: 'hsl(var(--surface-500))',
          600: 'hsl(var(--surface-600))',
          700: 'hsl(var(--surface-700))',
          800: 'hsl(var(--surface-800))',
          900: 'hsl(var(--surface-900))',
          950: 'hsl(var(--surface-950))'
        }
      },
      borderRadius: {
        xl: 'calc(var(--radius) + 4px)',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 }
        },
        'collapsible-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-collapsible-content-height)' }
        },
        'collapsible-up': {
          from: { height: 'var(--radix-collapsible-content-height)' },
          to: { height: 0 }
        },
        rotate: {
          to: {
            transform: 'rotate(360deg)'
          }
        },
        'bounce-once': {
          '0%, 100%': {
            transform: 'none',
            'animation-timing-function': 'cubic-bezier(0,0,0.2,1)'
          },
          '50%': {
            transform: 'translateY(-25%) scale(1.15)',
            'animation-timing-function': 'cubic-bezier(0.8,0,1,1)'
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'collapsible-down': 'collapsible-down 0.2s ease-in-out',
        'collapsible-up': 'collapsible-up 0.2s ease-in-out',
        'slow-ping': 'ping 4s cubic-bezier(0, 0, 0.2, 1) infinite',
        rotate: 'rotate 0.5s ease-in-out',
        'bounce-once': 'bounce-once 0.3s'
      },
      screens: {
        xs: '520px',
        '2xs': '410px'
      },
      transitionProperty: {
        width: 'width'
      },
      fontSize: {
        'adaptive-xl': 'calc(1.35rem + 1.2vw)'
      },
      fontFamily: {
        serif: ['Lora', 'serif'],
        sans: ['Montserrat', 'sans-serif']
      },
      boxShadow: {
        border: '0px 0px 20px 0px rgba(136, 136, 136, 0.1)'
      }
    }
  },
  plugins: [animate]
}

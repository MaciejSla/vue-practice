import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { useDateFormat as useDateFormatVue, type UseDateFormatOptions } from '@vueuse/core'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

export function useDateFormat(
  date: Date | string,
  formatStr: string,
  options?: UseDateFormatOptions
) {
  return useDateFormatVue(date, formatStr, { ...options, locales: ['en-US'] })
}

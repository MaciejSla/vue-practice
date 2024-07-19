export { default as ProductCarousel } from './ProductCarousel.vue'
export { default as ProductReviewForm } from './ProductReviewForm.vue'

import * as z from 'zod'

export const reviewSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  message: z.string().min(2).max(500),
  score: z.number().min(1).max(5)
})

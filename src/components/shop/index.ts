import type { Product } from '@/stores/cart'
import * as z from 'zod'

export type ResponseType = {
  products: Product[]
  total: number
  skip: number
  limit: number
}

export { default as ShopListElement } from './ShopListElement.vue'
export { default as ShopPagination } from './ShopPagination.vue'

export const checkoutSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  company: z.string().optional(),
  country: z.string().min(2),
  address: z.string().min(2),
  address2: z.string().optional(),
  city: z.string().min(2),
  state: z.string().min(2),
  zip: z.string().min(2),
  phone: z.string().regex(/^\+[1-9]\d{1,14}$/),
  email: z.string().email(),
  createAccount: z.boolean().default(false).optional(),
  shippingType: z.enum(['Free', 'Standard', 'Express']),
  shippingNotes: z.string().optional(),
  paymentMethod: z.enum(['card', 'bKash', 'cash']),
  items: z.array(
    z.object({
      id: z.number(),
      amount: z.number()
    })
  )
})

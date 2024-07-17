import type { Product } from '@/stores/cart'

export type ResponseType = {
  products: Product[]
  total: number
  skip: number
  limit: number
}

export { default as ShopListElement } from './ShopListElement.vue'
export { default as ShopPagination } from './ShopPagination.vue'

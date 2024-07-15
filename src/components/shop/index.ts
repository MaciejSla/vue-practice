export type ProductPreview = {
  id: number
  title: string
  price: number
  discountPercentage: number
  thumbnail: string
  description: string
}

export type ResponseType = {
  products: ProductPreview[]
  total: number
  skip: number
  limit: number
}

export { default as ShopListElement } from './ShopListElement.vue'
export { default as ShopPagination } from './ShopPagination.vue'

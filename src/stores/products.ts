import { ref } from 'vue'
import { defineStore } from 'pinia'

export type Product = {
  id: string
  price: number
  title: string
  discountPercentage: number
  thumbnail: string
  images: string[]
}

export const useProductsStore = defineStore('products', () => {
  const products = ref<Product[]>([])

  return {
    products,
    setProducts: (items: Product[]) => {
      products.value = items
    }
  }
})

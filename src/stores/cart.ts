import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Product } from '@/stores/products'

export type CartItem = Product & {
  quantity: number
  discountedPrice: number
}

export const useCartStore = defineStore('cart', () => {
  const cart = ref<CartItem[]>([])
  const total = computed(() =>
    cart.value.reduce((acc, item) => acc + item.price * item.quantity, 0)
  )
  const discountedTotal = computed(() =>
    cart.value.reduce((acc, item) => acc + item.discountedPrice * item.quantity, 0)
  )
  const count = computed(() => cart.value.length)

  return {
    cart,
    total,
    discountedTotal,
    count,
    setCart: (items: Product[]) => {
      cart.value = items.map((item) => ({
        ...item,
        quantity: 1,
        discountedPrice: item.price * (1 - item.discountPercentage / 100)
      }))
    },
    addProduct: (item: Product) => {
      if (cart.value.some((i) => i.id === item.id)) {
        const index = cart.value.findIndex((i) => i.id === item.id)
        cart.value[index].quantity++
      } else {
        cart.value.push({
          ...item,
          quantity: 1,
          discountedPrice: item.price * (1 - item.discountPercentage / 100)
        })
      }
    },
    removeProduct: (item: CartItem) => {
      const index = cart.value.findIndex((i) => i.id === item.id)
      if (cart.value[index].quantity == 1) {
        cart.value.splice(index, 1)
      } else {
        cart.value[index].quantity--
      }
    },
    clearCart: () => {
      cart.value = []
    }
  }
})

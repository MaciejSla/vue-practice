import { computed } from 'vue'
import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export type Product = {
  id: number
  title: string
  price: number
  discountPercentage: number
  thumbnail: string
  description: string
}

export type CartItem = Product & {
  amount: number
  discountedPrice: number
}

export const getDiscountedPrice = (price: number, discountPercentage: number) => {
  return ((price * (100 - discountPercentage)) / 100).toFixed(2)
}

export const useCartStore = defineStore('cart', () => {
  const cart = useStorage<CartItem[]>('cart', [])
  const total = computed(() => cart.value.reduce((acc, item) => acc + item.price * item.amount, 0))
  const discountedTotal = computed(() =>
    cart.value.reduce((acc, item) => acc + item.discountedPrice * item.amount, 0)
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
        amount: 1,
        discountedPrice: item.price * (1 - item.discountPercentage / 100)
      }))
    },
    addProduct: (item: Product, amount: number) => {
      const index = cart.value.findIndex((i) => i.id === item.id)
      if (index !== -1) {
        cart.value[index].amount += amount
      } else {
        cart.value.push({
          ...item,
          amount,
          discountedPrice: item.price * (1 - item.discountPercentage / 100)
        })
      }
    },
    removeProduct: (itemId: number) => {
      const index = cart.value.findIndex((i) => i.id === itemId)
      cart.value.splice(index, 1)
    },
    updateProductAmount: (itemId: number, amount: number) => {
      const index = cart.value.findIndex((i) => i.id === itemId)
      if (index !== -1) {
        cart.value[index].amount = amount
      }
    },
    getItemTotal: (itemId: number) => {
      const index = cart.value.findIndex((i) => i.id === itemId)
      if (index === -1) return 0
      return (cart.value[index].amount * cart.value[index].discountedPrice).toFixed(2)
    },
    clearCart: () => {
      cart.value = []
    }
  }
})

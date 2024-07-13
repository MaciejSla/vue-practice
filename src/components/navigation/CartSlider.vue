<script setup lang="ts">
import { IconShopping } from '@/components/icons'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetDescription,
  SheetClose
} from '@/components/ui/sheet'
import CustomButton from '@/components/ui/CustomButton.vue'
import { useCartStore } from '@/stores/cart'
import { useFetch } from '@vueuse/core'
import { watch } from 'vue'
import AppLink from './AppLink.vue'

const cartStore = useCartStore()

const { data, isFinished, execute } = useFetch(
  'https://dummyjson.com/products?limit=4&select=title,price,discountPercentage,thumbnail,images'
)
  .get()
  .json()

watch(isFinished, () => {
  if (isFinished.value) {
    cartStore.setCart(data.value.products)
  }
})
</script>

<template>
  <Sheet>
    <SheetTrigger as-child>
      <div class="relative cursor-pointer rounded-full border p-3">
        <IconShopping class="size-4" />
        <div
          class="absolute right-0 top-0 flex size-4 items-center justify-center rounded-full bg-black text-xs text-white"
        >
          {{ cartStore.count > 99 ? '99' : cartStore.count }}
        </div>
      </div>
    </SheetTrigger>
    <SheetContent class="dark overflow-y-auto bg-black text-white">
      <SheetHeader>
        <img src="@/assets/images/logo/01.png" alt="logo full" class="mb-6 w-min" />
        <SheetTitle class="mb-6 font-serif font-normal text-white">Shopping Cart</SheetTitle>
        <SheetDescription></SheetDescription>
      </SheetHeader>
      <TransitionGroup name="cart-item" tag="div" class="mb-10 flex flex-col items-start gap-4">
        <div v-for="item in cartStore.cart" :key="item.id">
          <div class="flex items-center justify-center gap-4">
            <img :src="item.thumbnail" alt="product" class="size-24 shrink-0 bg-white" />
            <div class="flex flex-col gap-3">
              <div>
                <div class="line-clamp-1 font-serif text-lg text-white">{{ item.title }}</div>
                <div class="flex items-center gap-2">
                  <div class="text-white">${{ item.discountedPrice.toFixed(2) }}</div>
                  <div class="text-white/40 line-through">${{ item.price }}</div>
                </div>
              </div>
              <button
                class="w-min rounded bg-main px-3 py-2 text-xs text-white transition-all duration-500 hover:opacity-80"
                @click="cartStore.removeProduct(item)"
              >
                REMOVE
              </button>
            </div>
          </div>
        </div>
      </TransitionGroup>
      <div class="flex justify-center gap-4">
        <SheetClose>
          <AppLink to="/checkout">
            <CustomButton type="submit"> CHECKOUT </CustomButton>
          </AppLink>
        </SheetClose>
        <CustomButton type="button" @click="execute"> REFRESH </CustomButton>
      </div>
    </SheetContent>
  </Sheet>
</template>

<style scoped>
.cart-item-enter-active,
.cart-item-leave-active {
  transition: all 0.3s ease-in-out;
}
.cart-item-enter-from,
.cart-item-leave-to {
  opacity: 0;
  transform: translateX(-100%) scale(0);
}
</style>

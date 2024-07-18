<script setup lang="ts">
import { ShoppingBagIcon, XIcon } from 'lucide-vue-next'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetDescription,
  SheetClose
} from '@/components/ui/sheet'
import {
  NumberField,
  NumberFieldContent,
  NumberFieldDecrement,
  NumberFieldIncrement,
  NumberFieldInput
} from '@/components/ui/number-field'
import CustomButton from '@/components/ui/CustomButton.vue'
import { useCartStore } from '@/stores/cart'
import { useWindowSize } from '@vueuse/core'
import { watch, ref, computed } from 'vue'
import AppLink from './AppLink.vue'

const cartStore = useCartStore()
const { width } = useWindowSize()

const smallScreen = computed(() => width.value < 520 && width.value >= 410)

const total = computed(() => cartStore.total)
const animate = ref(false)

watch(total, () => {
  animate.value = true
})
</script>

<template>
  <Sheet>
    <SheetTrigger as-child>
      <div class="relative cursor-pointer rounded-full border p-3">
        <ShoppingBagIcon class="size-4 stroke-gray-500" />
        <div
          :class="`absolute right-0 top-0 flex size-4 items-center justify-center rounded-full bg-black text-xs text-white ${animate ? 'animate-bounce-once' : ''}`"
          @animationend="animate = false"
        >
          {{ cartStore.count > 99 ? '99' : cartStore.count }}
        </div>
      </div>
    </SheetTrigger>
    <SheetContent
      class="dark overflow-y-auto bg-black text-white outline-none"
      @open-auto-focus="(e) => e.preventDefault()"
    >
      <SheetHeader>
        <img src="@/assets/images/logo/01.png" alt="logo full" class="mb-6 w-min" />
        <SheetTitle class="mb-6 font-serif font-normal text-white">Shopping Cart</SheetTitle>
        <SheetDescription></SheetDescription>
      </SheetHeader>
      <TransitionGroup name="cart-item" tag="div" class="mb-10 flex flex-col gap-4 2xs:items-start">
        <div v-for="item in cartStore.cart" :key="item.id">
          <div class="flex flex-col items-center justify-center gap-4 2xs:flex-row">
            <img :src="item.thumbnail" alt="product" class="size-24 shrink-0 bg-white" />
            <div class="flex flex-col items-center gap-3 2xs:items-start">
              <div>
                <div class="line-clamp-1 font-serif text-lg text-white">{{ item.title }}</div>
                <div class="flex items-center gap-2">
                  <div class="text-white">${{ item.discountedPrice.toFixed(2) }}</div>
                  <div class="text-white/40 line-through">${{ item.price }}</div>
                </div>
              </div>
              <div class="flex gap-2">
                <NumberField
                  :min="1"
                  :default-value="item.amount"
                  @update:model-value="
                    (v) => {
                      if (v) {
                        cartStore.updateProductAmount(item.id, v)
                      } else {
                        cartStore.updateProductAmount(item.id, 1)
                      }
                    }
                  "
                  class="max-w-32"
                >
                  <NumberFieldContent>
                    <NumberFieldDecrement />
                    <NumberFieldInput />
                    <NumberFieldIncrement />
                  </NumberFieldContent>
                </NumberField>
                <button
                  v-if="!smallScreen"
                  class="w-min rounded bg-main px-3 py-2 text-xs text-white transition-all duration-500 hover:opacity-80"
                  @click="cartStore.removeProduct(item.id)"
                >
                  REMOVE
                </button>
                <button
                  v-else
                  class="flex size-10 shrink-0 items-center justify-center rounded bg-main transition-all duration-500 hover:opacity-80"
                  @click="cartStore.removeProduct(item.id)"
                >
                  <XIcon class="size-5 stroke-[3]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </TransitionGroup>
      <div class="flex justify-center">
        <SheetClose class="flex items-center justify-center gap-8">
          <AppLink
            to="/cart"
            class="text-main transition-colors duration-300 hover:text-main/80 hover:underline"
          >
            SHOW CART
          </AppLink>
          <AppLink to="/checkout">
            <CustomButton type="submit"> CHECKOUT </CustomButton>
          </AppLink>
        </SheetClose>
      </div>
    </SheetContent>
  </Sheet>
</template>

<style>
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

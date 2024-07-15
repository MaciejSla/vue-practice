<script setup lang="ts">
import { useFetch } from '@vueuse/core'
import { ref, computed } from 'vue'
import {
  LayoutGridIcon,
  LayoutListIcon,
  HeartIcon,
  ShoppingCartIcon,
  EyeIcon
} from 'lucide-vue-next'

type ProductPreview = {
  id: number
  title: string
  price: number
  discountPercentage: number
  thumbnail: string
  description: string
}

type ResponseType = {
  products: ProductPreview[]
  total: number
  skip: number
  limit: number
}

const listView = ref(false)

const limit = ref(12)
const page = ref(1)
const skip = computed(() => (page.value - 1) * limit.value)

const getDiscountedPrice = (price: number, discountPercentage: number) => {
  return ((price * (100 - discountPercentage)) / 100).toFixed(2)
}

const url = ref(
  `https://dummyjson.com/products?limit=${limit.value}&skip=${skip.value}&select=title,price,discountPercentage,thumbnail,description`
)

const { data } = useFetch(url, { refetch: true }).get().json<ResponseType>()
</script>

<!-- TODO figure out layout change animation -->

<template>
  <div class="flex items-center justify-center p-4 md:p-10">
    <div
      class="flex w-full max-w-[30rem] flex-col items-center justify-center gap-6 md:max-w-[45rem] lg:max-w-[60rem]"
    >
      <div class="flex w-full justify-between border p-3">
        <span>
          Showing {{ skip + 1 }} - {{ (skip + 1) * limit }} of {{ data?.total }} Results
        </span>
        <div class="flex items-center gap-2">
          <button @click="listView = false">
            <LayoutGridIcon
              :class="`size-6 transition-colors duration-300 hover:stroke-main ${!listView ? 'stroke-main' : ''}`"
            />
          </button>
          <button @click="listView = true">
            <LayoutListIcon
              :class="`size-6 transition-colors duration-300 hover:stroke-main ${listView ? 'stroke-main' : ''}`"
            />
          </button>
        </div>
      </div>
      <div v-if="!listView" class="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="item in data?.products"
          :key="item.id"
          class="group flex w-full flex-col items-center justify-center gap-3 border p-3"
        >
          <div class="relative w-full overflow-hidden md:h-auto">
            <img :src="item.thumbnail" :alt="item.title" />
            <div
              class="absolute bottom-0 left-0 right-0 h-full scale-0 bg-main/80 transition-all duration-300 group-hover:scale-100"
            />
            <div
              class="absolute bottom-0 left-0 right-0 flex h-full translate-y-full items-center justify-center gap-3 transition-all duration-300 group-hover:translate-y-0"
            >
              <div class="flex size-9 items-center justify-center rounded-full bg-white">
                <EyeIcon class="size-4" />
              </div>
              <div class="flex size-9 items-center justify-center rounded-full bg-white">
                <HeartIcon class="size-4" />
              </div>
              <div class="flex size-9 items-center justify-center rounded-full bg-white">
                <ShoppingCartIcon class="size-4" />
              </div>
            </div>
          </div>
          <div class="flex flex-col items-center justify-center">
            <h3
              class="line-clamp-1 font-serif text-2xl transition-colors duration-300 group-hover:text-main"
            >
              {{ item.title }}
            </h3>
            <div class="flex items-center justify-between gap-2">
              <span class="font-serif text-xl"
                >${{ getDiscountedPrice(item.price, item.discountPercentage) }}</span
              >
              <span class="font-serif text-xl text-black/60 line-through">${{ item.price }}</span>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="flex flex-col gap-6">
        <div
          v-for="item in data?.products"
          :key="item.id"
          class="group flex w-full flex-col items-center justify-center gap-3 border p-3 md:flex-row"
        >
          <div class="relative w-full shrink-0 overflow-hidden md:w-auto">
            <img :src="item.thumbnail" :alt="item.title" class="h-full w-full object-cover" />
            <div
              class="absolute bottom-0 left-0 right-0 h-full scale-0 bg-main/80 transition-all duration-300 group-hover:scale-100"
            />
            <div
              class="absolute bottom-0 left-0 right-0 flex h-full translate-y-full items-center justify-center gap-3 transition-all duration-300 group-hover:translate-y-0"
            >
              <div class="flex size-9 items-center justify-center rounded-full bg-white">
                <EyeIcon class="size-4" />
              </div>
              <div class="flex size-9 items-center justify-center rounded-full bg-white">
                <HeartIcon class="size-4" />
              </div>
              <div class="flex size-9 items-center justify-center rounded-full bg-white">
                <ShoppingCartIcon class="size-4" />
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <h3 class="font-serif text-2xl transition-colors duration-300 group-hover:text-main">
              {{ item.title }}
            </h3>
            <div class="flex items-center gap-2">
              <span class="font-serif text-xl">
                ${{ getDiscountedPrice(item.price, item.discountPercentage) }}
              </span>
              <span class="font-serif text-xl text-black/60 line-through"> ${{ item.price }} </span>
            </div>
            <p class="line-clamp-4 font-serif text-black/60">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

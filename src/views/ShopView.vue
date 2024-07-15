<script setup lang="ts">
import { useFetch } from '@vueuse/core'
import { ref, computed, watch } from 'vue'
import {
  LayoutGridIcon,
  LayoutListIcon,
  HeartIcon,
  ShoppingCartIcon,
  EyeIcon,
  XIcon
} from 'lucide-vue-next'
import {
  Pagination,
  PaginationEllipsis,
  PaginationFirst,
  PaginationLast,
  PaginationList,
  PaginationListItem,
  PaginationNext,
  PaginationPrev
} from '@/components/ui/pagination'
import AppLink from '@/components/navigation/AppLink.vue'
import { UseImage } from '@vueuse/components'
import { useElementVisibility } from '@vueuse/core'
import { useRouteQuery } from '@vueuse/router'

import { Button } from '@/components/ui/button'

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
const currentPage = useRouteQuery('p', 1, { transform: Number })
const skip = computed(() => (currentPage.value - 1) * limit.value)

const target = ref<HTMLElement | null>(null)
const isVisible = useElementVisibility(target)

watch(currentPage, () => {
  if (!isVisible.value) {
    setTimeout(() => {
      window.scrollTo({
        top: 0
      })
    }, 100)
  }
})

const getDiscountedPrice = (price: number, discountPercentage: number) => {
  return ((price * (100 - discountPercentage)) / 100).toFixed(2)
}

const url = computed(
  () =>
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
          Showing {{ skip + 1 }} -
          {{ limit * currentPage > data?.total! ? data?.total : limit * currentPage }} of
          {{ data?.total }} Results
        </span>
        <div class="flex items-center gap-2">
          <button @click="listView = false">
            <LayoutGridIcon
              :class="`size-6 transition-colors duration-300 hover:stroke-main ${!listView ? 'stroke-main' : 'stroke-gray-500'}`"
            />
          </button>
          <button @click="listView = true">
            <LayoutListIcon
              :class="`size-6 transition-colors duration-300 hover:stroke-main ${listView ? 'stroke-main' : 'stroke-gray-500'}`"
            />
          </button>
        </div>
      </div>
      <Pagination
        ref="target"
        v-model:page="currentPage"
        v-slot="{ page }"
        :total="data?.total"
        :sibling-count="1"
        show-edges
        :items-per-page="limit"
      >
        <PaginationList v-slot="{ items }" class="flex items-center gap-1">
          <PaginationFirst />
          <PaginationPrev />

          <template v-for="(item, index) in items">
            <PaginationListItem
              v-if="item.type === 'page'"
              :key="index"
              :value="item.value"
              as-child
            >
              <AppLink :to="`/shop?p=${item.value}`">
                <Button
                  class="h-10 w-10 p-0"
                  :variant="item.value === page ? 'default' : 'outline'"
                >
                  {{ item.value }}
                </Button>
              </AppLink>
            </PaginationListItem>
            <PaginationEllipsis v-else :key="item.type" :index="index" />
          </template>

          <PaginationNext />
          <PaginationLast />
        </PaginationList>
      </Pagination>
      <div v-if="!listView" class="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="item in data?.products"
          :key="item.id"
          class="group flex w-full flex-col items-center justify-center gap-3 border p-3"
        >
          <div class="relative aspect-square size-full overflow-hidden">
            <UseImage :src="item.thumbnail" :alt="item.title" class="h-full w-full object-cover">
              <template #loading>
                <div class="size-96 bg-white"></div>
              </template>
              <template #error>
                <div
                  class="flex size-full flex-col items-center justify-center bg-destructive text-destructive-foreground"
                >
                  <XIcon class="size-12" />
                  Failed to load image
                </div>
              </template>
            </UseImage>
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
          <div
            class="relative aspect-square size-full overflow-hidden xs:max-w-[30rem] md:max-w-[14rem] lg:max-w-[20rem]"
          >
            <UseImage :src="item.thumbnail" :alt="item.title" class="h-full w-full object-cover">
              <template #loading>
                <div class="size-96 bg-white"></div>
              </template>
              <template #error>
                <div
                  class="flex size-full flex-col items-center justify-center bg-destructive text-destructive-foreground"
                >
                  <XIcon class="size-12" />
                  Failed to load image
                </div>
              </template>
            </UseImage>
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
      <Pagination
        v-model:page="currentPage"
        v-slot="{ page }"
        :total="data?.total"
        :sibling-count="1"
        show-edges
        :items-per-page="limit"
      >
        <PaginationList v-slot="{ items }" class="flex items-center gap-1">
          <PaginationFirst />
          <PaginationPrev />

          <template v-for="(item, index) in items">
            <PaginationListItem
              v-if="item.type === 'page'"
              :key="index"
              :value="item.value"
              as-child
            >
              <AppLink :to="`/shop?p=${item.value}`">
                <Button
                  class="h-10 w-10 p-0"
                  :variant="item.value === page ? 'default' : 'outline'"
                >
                  {{ item.value }}
                </Button>
              </AppLink>
            </PaginationListItem>
            <PaginationEllipsis v-else :key="item.type" :index="index" />
          </template>

          <PaginationNext />
          <PaginationLast />
        </PaginationList>
      </Pagination>
    </div>
  </div>
</template>

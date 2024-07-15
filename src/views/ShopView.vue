<script setup lang="ts">
// UI
import { LayoutGridIcon, LayoutListIcon } from 'lucide-vue-next'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'
import {
  type ProductPreview,
  type ResponseType,
  ShopListElement,
  ShopPagination
} from '@/components/shop'

// Functional
import { useRouteQuery } from '@vueuse/router'
import { useFetch, useElementVisibility, useWindowSize } from '@vueuse/core'
import { ref, computed, watch } from 'vue'

const { width } = useWindowSize()
const showEdges = computed(() => width.value >= 520)

const currentProduct = ref<ProductPreview | null>(null)
const showProduct = ref(false)

const selectProduct = (product: ProductPreview) => {
  currentProduct.value = product
  showProduct.value = true
}

const listView = ref(false)

const limit = ref(12)
const currentPage = useRouteQuery('p', 1, { transform: Number })
const skip = computed(() => (currentPage.value - 1) * limit.value)

const target = ref<HTMLElement | null>(null)
const isVisible = useElementVisibility(target)

watch(currentPage, () => {
  if (!isVisible.value) {
    window.scrollTo({
      top: 0
    })
  }
})

const url = computed(
  () =>
    `https://dummyjson.com/products?limit=${limit.value}&skip=${skip.value}&select=title,price,discountPercentage,thumbnail,description`
)

const { data } = useFetch(url, { refetch: true }).get().json<ResponseType>()
</script>

<!-- TODO figure out layout change animation -->
<!-- TODO fix closing dialog messing up product styling -->

<template>
  <div class="flex items-center justify-center p-4 md:p-10">
    <div
      class="flex w-full max-w-[35rem] flex-col items-center justify-center gap-6 md:max-w-[45rem] lg:max-w-[60rem]"
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
      <ShopPagination
        ref="target"
        v-model:page="currentPage"
        :total="data?.total"
        :sibling-count="1"
        :show-edges="showEdges"
        :items-per-page="limit"
      />
      <div v-if="!listView" class="2xs:grid-cols-2 grid w-full grid-cols-1 gap-6 lg:grid-cols-3">
        <ShopListElement
          v-for="item in data?.products"
          :key="item.id"
          :list-view="listView"
          :item="item"
          :select-product="selectProduct"
        />
      </div>
      <div v-else class="flex flex-col gap-6">
        <ShopListElement
          v-for="item in data?.products"
          :key="item.id"
          :list-view="listView"
          :item="item"
          :select-product="selectProduct"
        />
      </div>
      <ShopPagination
        v-model:page="currentPage"
        :total="data?.total"
        :sibling-count="1"
        :show-edges="showEdges"
        :items-per-page="limit"
      />
    </div>
    <Dialog v-model:open="showProduct">
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{{ currentProduct?.title }}</DialogTitle>
          <DialogDescription>
            {{ currentProduct?.description }}
          </DialogDescription>
        </DialogHeader>

        <DialogFooter> Save changes </DialogFooter>
      </DialogContent>
    </Dialog>
  </div>
</template>

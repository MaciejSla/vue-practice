<script setup lang="ts">
// UI
import { LayoutGridIcon, LayoutListIcon, XIcon } from 'lucide-vue-next'
import { type ResponseType, ShopListElement, ShopPagination } from '@/components/shop'
import { type Product } from '@/stores/cart'
import {
  NumberField,
  NumberFieldContent,
  NumberFieldDecrement,
  NumberFieldIncrement,
  NumberFieldInput
} from '@/components/ui/number-field'
import AppLink from '@/components/navigation/AppLink.vue'
import CustomButton from '@/components/ui/CustomButton.vue'

// Functional
import { useRouteQuery } from '@vueuse/router'
import { useFetch, useElementVisibility, useWindowSize } from '@vueuse/core'
import { ref, computed, watch } from 'vue'
import { useCartStore, getDiscountedPrice } from '@/stores/cart'

const cartStore = useCartStore()

const { width } = useWindowSize()
const showEdges = computed(() => width.value >= 520)

const currentProduct = ref<Product | null>(null)
const currentProductAmount = ref(1)
const showProduct = ref(false)

const selectProduct = (product: Product) => {
  currentProductAmount.value = 1
  currentProduct.value = product
  showProduct.value = true
}

const addToCart = () => {
  cartStore.addProduct(currentProduct.value!, currentProductAmount.value)
  showProduct.value = false
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

<template>
  <div class="flex justify-center p-4 md:p-10">
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
      <div
        :class="`gap-6 ${
          listView ? 'flex flex-col' : 'grid w-full grid-cols-1 2xs:grid-cols-2 lg:grid-cols-3'
        }`"
      >
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
    <Transition name="slide-down">
      <div v-if="showProduct" class="fixed inset-0 z-50 flex items-center justify-center bg-black">
        <div class="relative flex max-w-[31rem] flex-col bg-white p-4 lg:max-w-[50rem] lg:flex-row">
          <div class="w-full overflow-hidden lg:max-w-[19rem]">
            <img
              :src="currentProduct?.thumbnail"
              :alt="currentProduct?.title"
              class="h-full w-full object-cover"
            />
          </div>
          <div class="flex flex-col justify-center gap-2">
            <AppLink :to="`/product/${currentProduct?.id}`">
              <h1
                class="line-clamp-1 font-serif text-3xl text-gray-500 transition-colors duration-300 hover:text-main"
              >
                {{ currentProduct?.title }}
              </h1>
            </AppLink>
            <div class="flex items-center gap-2">
              <span class="font-serif text-xl 2xs:text-[calc(0.7rem+1vw)] md:text-xl">
                ${{
                  getDiscountedPrice(currentProduct?.price!, currentProduct?.discountPercentage!)
                }}
              </span>
              <span
                class="font-serif text-xl text-black/60 line-through 2xs:text-[calc(0.7rem+1vw)] md:text-xl"
              >
                ${{ currentProduct?.price }}
              </span>
            </div>
            <p class="text-gray-500">{{ currentProduct?.description }}</p>
            <div class="mt-6 flex gap-4">
              <NumberField
                :min="1"
                :default-value="1"
                @update:model-value="
                  (v) => {
                    if (v) {
                      currentProductAmount = v
                    } else {
                      currentProductAmount = 1
                    }
                  }
                "
                class="w-32"
              >
                <NumberFieldContent>
                  <NumberFieldDecrement />
                  <NumberFieldInput v-model="currentProductAmount" />
                  <NumberFieldIncrement />
                </NumberFieldContent>
              </NumberField>
              <CustomButton class="py-2" @click="addToCart"> Add To Cart </CustomButton>
            </div>
          </div>
          <button
            type="button"
            @click="showProduct = false"
            class="absolute right-0 top-0 flex size-10 items-center justify-center bg-main"
          >
            <XIcon class="size-5 stroke-white stroke-[3]" />
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  transform: translateY(-100%);
}
</style>

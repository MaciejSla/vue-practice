<script setup lang="ts">
import type { ProductPreview } from '.'
import { UseImage } from '@vueuse/components'
import { HeartIcon, ShoppingCartIcon, EyeIcon, XIcon } from 'lucide-vue-next'

const props = defineProps<{
  listView: boolean
  item: ProductPreview
  selectProduct: (product: ProductPreview) => void
}>()

const getDiscountedPrice = (price: number, discountPercentage: number) => {
  return ((price * (100 - discountPercentage)) / 100).toFixed(2)
}
</script>

<template>
  <div
    :class="`group flex w-full flex-col items-center justify-center gap-3 border p-3 ${listView ? 'md:flex-row' : ''}`"
  >
    <div
      :class="`relative aspect-square size-full overflow-hidden ${listView ? 'xs:max-w-[30rem] md:max-w-[14rem] lg:max-w-[20rem]' : ''}`"
    >
      <UseImage
        :src="props.item.thumbnail"
        :alt="props.item.title"
        class="h-full w-full object-cover"
      >
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
        <button
          class="flex size-9 items-center justify-center rounded-full bg-white"
          @click="selectProduct(props.item)"
        >
          <EyeIcon class="size-4" />
        </button>
        <div class="flex size-9 items-center justify-center rounded-full bg-white">
          <HeartIcon class="size-4" />
        </div>
        <div class="flex size-9 items-center justify-center rounded-full bg-white">
          <ShoppingCartIcon class="size-4" />
        </div>
      </div>
    </div>
    <div :class="`flex flex-col justify-center ${listView ? 'items-start' : 'items-center'}`">
      <h3
        :class="`font-serif text-2xl transition-colors duration-300 group-hover:text-main ${listView ? '' : 'line-clamp-1'}`"
      >
        {{ props.item.title }}
      </h3>
      <div :class="`flex items-center ${listView ? '' : 'justify-between'} gap-2`">
        <span class="font-serif text-xl">
          ${{ getDiscountedPrice(props.item.price, props.item.discountPercentage) }}
        </span>
        <span class="font-serif text-xl text-black/60 line-through">${{ props.item.price }}</span>
      </div>
      <p v-if="listView" class="line-clamp-4 font-serif text-black/60">{{ item.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { watchOnce } from '@vueuse/core'
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'

const props = defineProps<{
  images: string[]
  title?: string
}>()

const emblaMainApi = ref<CarouselApi>()
const emblaThumbnailApi = ref<CarouselApi>()
const selectedIndex = ref(0)

function onSelect() {
  if (!emblaMainApi.value || !emblaThumbnailApi.value) return
  selectedIndex.value = emblaMainApi.value.selectedScrollSnap()
  emblaThumbnailApi.value.scrollTo(emblaMainApi.value.selectedScrollSnap())
}

function onThumbClick(index: number) {
  if (!emblaMainApi.value || !emblaThumbnailApi.value) return
  emblaMainApi.value.scrollTo(index)
}

function thumbNext() {
  if (!emblaMainApi.value) return
  emblaMainApi.value.scrollNext()
}

function thumbPrev() {
  if (!emblaMainApi.value) return
  emblaMainApi.value.scrollPrev()
}

watchOnce(emblaMainApi, (emblaMainApi) => {
  if (!emblaMainApi) return

  onSelect()
  emblaMainApi.on('select', onSelect)
  emblaMainApi.on('reInit', onSelect)
})
</script>

<template>
  <div class="flex w-full flex-col items-center">
    <Carousel
      class="relative w-full max-w-[23rem]"
      @init-api="(val) => (emblaMainApi = val)"
      :opts="{ loop: true }"
    >
      <CarouselContent>
        <CarouselItem v-for="(image, index) in props.images" :key="index">
          <div class="p-1">
            <div class="flex aspect-square items-center justify-center">
              <img :src="image" :alt="props.title" class="h-full w-full object-contain" />
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
    <Carousel
      class="relative w-full max-w-[15rem]"
      @init-api="(val) => (emblaThumbnailApi = val)"
      :opts="{ loop: true }"
    >
      <CarouselContent class="ml-0 flex">
        <CarouselItem
          v-for="(image, index) in props.images"
          :key="index"
          class="basis-1/2 cursor-pointer pl-0 xs:basis-1/3"
          @click="onThumbClick(index)"
        >
          <div class="p-1" :class="index === selectedIndex ? '' : 'opacity-50'">
            <div class="flex aspect-square items-center justify-center">
              <img :src="image" :alt="props.title" class="h-full w-full object-contain" />
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious @click="thumbPrev" />
      <CarouselNext @click="thumbNext" />
    </Carousel>
  </div>
</template>

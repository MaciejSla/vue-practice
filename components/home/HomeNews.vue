<script setup lang="ts">
import { ScrollArea } from '@/components/ui/scroll-area'
import { scrollToTop, useDateFormat } from '@/lib/utils'
import Autoplay from 'embla-carousel-autoplay'
import type { CarouselApi, Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'

const api = ref<CarouselApi>()
const totalCount = ref<number>(0)
const current = ref<number>(0)

function setApi(val: CarouselApi) {
  api.value = val
}

watchOnce(api, (api) => {
  if (!api) return

  totalCount.value = api.scrollSnapList().length
  current.value = api.selectedScrollSnap() + 1

  api.on('select', () => {
    current.value = api.selectedScrollSnap() + 1
  })
})

const onButtonClick = (index: number) => {
  api?.value?.scrollTo(index)
}

const getDate = (date: string) => useDateFormat(date, 'DD MMM YYYY').value

const news = [
  {
    title: 'Collaboratively Coordinate.',
    image: '/images/blog/01.jpg',
    date: '2024-07-25 18:30',
    user: 'Admin',
    comments: 10,
    description:
      'Revolutions of the bright points that first defined him to me. And beneath the effulgent Antarctic skies I have boarded the Argo-Navis, and joined the I have boarded the Argo-Navis, and joined the'
  },
  {
    title: 'Quicky Develop Exceptional',
    image: '/images/blog/02.jpg',
    date: '2024-12-25 18:30',
    user: 'Admin',
    comments: 10,
    description:
      'Revolutions of the bright points that first defined him to me. And beneath the effulgent Antarctic skies I have boarded the Argo-Navis, and joined the I have boarded the Argo-Navis, and joined the'
  },
  {
    title: 'Why You Need This Theme?',
    image: '/images/blog/03.jpg',
    date: '2025-01-25 18:30',
    user: 'Admin',
    comments: 10,
    description:
      'Revolutions of the bright points that first defined him to me. And beneath the effulgent Antarctic skies I have boarded the Argo-Navis, and joined the I have boarded the Argo-Navis, and joined the'
  },
  {
    title: 'What You Know About Life',
    image: '/images/blog/04.jpg',
    date: '2025-06-12 18:30',
    user: 'Admin',
    comments: 10,
    description:
      'Revolutions of the bright points that first defined him to me. And beneath the effulgent Antarctic skies I have boarded the Argo-Navis, and joined the I have boarded the Argo-Navis, and joined the'
  }
]

const products = [
  {
    name: 'Lorem Ipsum Dolor.',
    image: '/images/blog/slider/01.jpg',
    price: 100.0,
    rating: 2.5
  },
  {
    name: 'Lorem Ipsum Dolor.',
    image: '/images/blog/slider/02.jpg',
    price: 9.0,
    rating: 3.5
  },
  {
    name: 'Lorem Ipsum Dolor.',
    image: '/images/blog/slider/03.jpg',
    price: 21.37,
    rating: 4.5
  }
]
</script>

<template>
  <div class="my-24 flex flex-col items-center">
    <div class="group/anim flex flex-col items-center justify-center gap-5 text-center">
      <h1 class="font-serif text-5xl">Recent News</h1>
      <AnimatedAccent reverse />
      <p class="max-w-[42rem] text-gray-500">
        Proin Eget Tortor Risus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
        Curabitur aliquet quam id dui posuere blandit
      </p>
    </div>
    <div class="grid max-w-[50rem] grid-cols-1 gap-6 p-10 lg:max-w-[76rem] lg:grid-cols-3">
      <div class="col-span-1 rounded border p-6 lg:col-span-2">
        <ScrollArea class="h-[35rem] p-2" type="always">
          <div class="flex flex-col gap-6">
            <div
              v-for="newsItem in news"
              :key="newsItem.title"
              class="group flex flex-col items-start gap-6 xs:flex-row"
            >
              <div class="size-52 shrink-0 overflow-hidden">
                <NuxtImg
                  :src="newsItem.image"
                  :alt="newsItem.title"
                  class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-125"
                />
              </div>
              <div class="flex flex-col gap-3">
                <h2
                  class="line-clamp-1 max-w-[25rem] font-serif text-2xl transition-colors duration-300 group-hover:text-main"
                >
                  {{ newsItem.title }}
                </h2>
                <div class="flex flex-wrap items-center gap-4">
                  <p class="flex items-center gap-2 text-gray-500">
                    <IconCalendar class="size-4 fill-gray-500" />
                    {{ getDate(newsItem.date) }}
                  </p>
                  <p class="flex items-center gap-2 text-gray-500">
                    <IconUser class="size-4 fill-gray-500" />
                    {{ newsItem.user }}
                  </p>
                  <p class="flex items-center gap-2 text-gray-500">
                    <IconComments class="size-4 fill-gray-500" />
                    {{ newsItem.comments }}
                  </p>
                </div>
                <p class="line-clamp-4 text-gray-500">
                  {{ newsItem.description }}
                </p>
              </div>
            </div>
          </div>
        </ScrollArea>
      </div>
      <div class="col-span-1 flex flex-col gap-10 rounded border p-8">
        <div class="group/anim flex flex-col items-start justify-center gap-5 text-center">
          <h1 class="font-serif text-3xl">Best Product</h1>
          <AnimatedAccent />
        </div>
        <div class="flex flex-col gap-6">
          <Carousel
            :opts="{ loop: true }"
            class="select-none"
            :plugins="[
              Autoplay({
                delay: 10000
              })
            ]"
            @init-api="setApi"
          >
            <CarouselContent class="ml-0">
              <CarouselItem
                v-for="(product, index) in products"
                :key="index"
                class="basis-1/1 w-full pl-0"
              >
                <div class="flex flex-col bg-gray-200">
                  <NuxtImg
                    :src="product.image"
                    :alt="product.name"
                    class="h-full w-full object-cover object-top"
                  />
                  <div class="flex flex-col items-center justify-center gap-1 p-8">
                    <h3 class="font-serif text-xl">{{ product.name }}</h3>
                    <StarRating :rating="product.rating" class="size-4" />
                    <span class="font-serif text-[calc(1.4rem+0.3vw)] lg:text-2xl"
                      >${{ product.price.toFixed(2) }}</span
                    >
                    <button
                      class="flex w-fit items-center gap-1 rounded-full bg-main px-4 py-2 text-sm font-bold uppercase text-white transition-all duration-300 ease-in-out hover:bg-[#da5455]"
                      @click="scrollToTop"
                    >
                      <IconCartPlus class="size-4 fill-white" />
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
          <div class="flex items-center justify-center gap-2">
            <div
              v-for="index in totalCount"
              :key="index"
              :class="`size-3 cursor-pointer rounded-full ${index === current ? 'bg-main' : 'bg-gray-300'}`"
              @click="onButtonClick(index - 1)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

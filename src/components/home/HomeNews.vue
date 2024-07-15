<script setup lang="ts">
import AnimatedAccent from '@/components/ui/AnimatedAccent.vue'
import CustomButton from '@/components/ui/CustomButton.vue'
import { ScrollArea } from '@/components/ui/scroll-area'
import blog1 from '@/assets/images/blog/01.jpg'
import blog2 from '@/assets/images/blog/02.jpg'
import blog3 from '@/assets/images/blog/03.jpg'
import blog4 from '@/assets/images/blog/04.jpg'
import { CalendarIcon, UserIcon, MessagesSquareIcon, ShoppingCartIcon } from 'lucide-vue-next'
import { type CarouselApi, Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { scrollToTop } from '@/lib/utils'
import StarRating from '@/components/ui/StarRating.vue'
import { computed, ref } from 'vue'
import { watchOnce, useFetch, useDateFormat } from '@vueuse/core'
import Autoplay from 'embla-carousel-autoplay'

const api = ref<CarouselApi>()
const current = ref<number>(0)

function setApi(val: CarouselApi) {
  api.value = val
}

watchOnce(api, (api) => {
  if (!api) return

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
    image: blog1,
    date: '2024-07-25 18:30',
    user: 'Admin',
    comments: 10,
    description:
      'Revolutions of the bright points that first defined him to me. And beneath the effulgent Antarctic skies I have boarded the Argo-Navis, and joined the I have boarded the Argo-Navis, and joined the'
  },
  {
    title: 'Quicky Develop Exceptional',
    image: blog2,
    date: '2024-12-25 18:30',
    user: 'Admin',
    comments: 10,
    description:
      'Revolutions of the bright points that first defined him to me. And beneath the effulgent Antarctic skies I have boarded the Argo-Navis, and joined the I have boarded the Argo-Navis, and joined the'
  },
  {
    title: 'Why You Need This Theme?',
    image: blog3,
    date: '2025-01-25 18:30',
    user: 'Admin',
    comments: 10,
    description:
      'Revolutions of the bright points that first defined him to me. And beneath the effulgent Antarctic skies I have boarded the Argo-Navis, and joined the I have boarded the Argo-Navis, and joined the'
  },
  {
    title: 'What You Know About Life',
    image: blog4,
    date: '2025-06-12 18:30',
    user: 'Admin',
    comments: 10,
    description:
      'Revolutions of the bright points that first defined him to me. And beneath the effulgent Antarctic skies I have boarded the Argo-Navis, and joined the I have boarded the Argo-Navis, and joined the'
  }
]

const { data: products } = useFetch(
  'https://dummyjson.com/products?skip=54&limit=4&select=title,thumbnail,price,rating'
)
  .get()
  .json<{
    products: { id: number; title: string; thumbnail: string; price: number; rating: number }[]
    total: number
  }>()

const totalCount = computed(() => products?.value?.products.length)
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
        <ScrollArea class="h-[39.5rem] p-2" type="hover">
          <div class="flex flex-col gap-6">
            <div
              v-for="newsItem in news"
              :key="newsItem.title"
              class="group flex flex-col items-start gap-6 xs:flex-row"
            >
              <div class="size-52 shrink-0 overflow-hidden">
                <img
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
                  <p class="flex items-center gap-1 text-gray-500">
                    <CalendarIcon class="size-4 stroke-gray-500" />
                    {{ getDate(newsItem.date) }}
                  </p>
                  <p class="flex items-center gap-1 text-gray-500">
                    <UserIcon class="size-4 stroke-gray-500" />
                    {{ newsItem.user }}
                  </p>
                  <p class="flex items-center gap-1 text-gray-500">
                    <MessagesSquareIcon class="size-4 stroke-gray-500" />
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
                v-for="product in products?.products"
                :key="product.id"
                class="basis-1/1 w-full pl-0"
              >
                <div class="flex flex-col bg-gray-200">
                  <div class="p-3">
                    <img
                      :src="product.thumbnail"
                      :alt="product.title"
                      class="aspect-square h-full w-full bg-white object-fill object-top"
                    />
                  </div>
                  <div class="flex flex-col items-center justify-center gap-1 p-8">
                    <h3 class="line-clamp-1 font-serif text-xl">{{ product.title }}</h3>
                    <StarRating :rating="product.rating" class="size-4" />
                    <span class="font-serif text-[calc(1.4rem+0.3vw)] lg:text-2xl"
                      >${{ product?.price?.toFixed(2) }}</span
                    >
                    <CustomButton class="w-fit px-4 py-2 text-sm" @click="scrollToTop">
                      <span class="flex items-center gap-1">
                        <ShoppingCartIcon class="size-4 stroke-white" />
                        ADD TO CART
                      </span>
                    </CustomButton>
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

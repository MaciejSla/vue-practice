<script setup>
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { scrollToTop } from '@/lib/utils'
import { ref, nextTick, watch } from 'vue'
import img1 from '@/assets/images/banner/01.jpg'
import img2 from '@/assets/images/banner/02.jpg'
import img3 from '@/assets/images/banner/03.jpg'

const bannerSubtext =
  'Enthusiastically underwhelm quality benefits rather than professional "outside the box" thinking. Distinctively network highly efficient leadership skills'

const banners = [
  {
    src: img1,
    alt: 'banner1',
    text: 'We Believe In Humanity',
    subtext: bannerSubtext,
    rightAlign: true
  },
  {
    src: img2,
    alt: 'banner2',
    text: 'A Powerful Religion Theme',
    subtext: bannerSubtext,
    rightAlign: false
  },
  {
    src: img3,
    alt: 'banner3',
    text: "It's Useless To Lecture",
    subtext: bannerSubtext,
    rightAlign: true
  }
]

const api = ref()
const currentSlide = ref(0)

function setApi(val) {
  api.value = val
}

const stop = watch(api, (api) => {
  if (!api) return

  nextTick(() => {
    stop()
  })

  api.on('select', (test) => {
    currentSlide.value = test.selectedScrollSnap()
  })
})
</script>

<template>
  <Carousel
    :opts="{ loop: true }"
    :plugins="[Autoplay({ delay: 10000 })]"
    class="bg-black"
    @init-api="setApi"
  >
    <CarouselContent>
      <CarouselItem v-for="(banner, index) in banners" :key="index" class="basis-1/1 w-full">
        <div class="relative flex select-none items-center text-white">
          <div class="absolute flex w-full justify-around px-10">
            <div v-if="banner.rightAlign"></div>
            <div class="flex flex-col gap-4 sm:w-[45rem] lg:w-[35rem]">
              <h1
                :class="`font-serif text-[calc(1.5rem+3vw)] font-semibold leading-none transition-all duration-300 ease-in-out xl:text-6xl ${index == currentSlide ? 'slide-up' : 'translate-y-[200%] opacity-0'}`"
              >
                {{ banner.text }}
              </h1>
              <p
                :class="`text-lg font-normal capitalize transition-all duration-300 ease-in-out ${index == currentSlide ? 'slide-up' : 'translate-y-[200%] opacity-0'}`"
              >
                {{ banner.subtext }}
              </p>
              <button
                @click="scrollToTop"
                :class="`w-fit rounded-full bg-main px-6 py-4 font-bold text-white transition-all duration-300 ease-in-out hover:bg-[#da5455] ${index == currentSlide ? 'slide-up' : 'translate-y-[200%] opacity-0'}`"
              >
                GET HELP NOW
              </button>
            </div>
            <div v-if="!banner.rightAlign"></div>
          </div>
          <img
            :src="banner.src"
            :alt="banner.alt"
            class="h-[43rem] object-cover sm:object-right lg:h-[46.5rem] lg:object-center"
          />
        </div>
      </CarouselItem>
    </CarouselContent>
  </Carousel>
</template>
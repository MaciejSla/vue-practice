<script setup>
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { scrollToTop } from '@/lib/utils'
import { ref, nextTick, watch } from 'vue'

import img1 from '@/assets/images/banner/01.jpg'
import img2 from '@/assets/images/banner/02.jpg'
import img3 from '@/assets/images/banner/03.jpg'

const bannerText = ['We Belive In Humanity', 'A Powerful Religion Theme', "It's Useless To Lecture"]
const bannerSubtext =
  'Enthusiastically underwhelm quality benefits rather than professional "outside the box" thinking. Distinctively network highly efficient leadership skills'

const bannerBg = [img1, img2, img3]

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
    console.log(test.selectedScrollSnap())
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
      <CarouselItem v-for="(_, index) in 3" :key="index" class="basis-1/1">
        <div class="relative flex select-none items-center text-white">
          <div class="absolute flex w-full justify-around">
            <div v-if="index != 1"></div>
            <div class="flex w-[35rem] flex-col gap-4">
              <h1
                :class="`font-serif text-6xl font-semibold transition-all duration-300 ease-in-out ${index == currentSlide ? 'slide-up' : 'translate-y-[200%] opacity-0'}`"
                :key="`${index}-title`"
              >
                {{ bannerText[index] }}
              </h1>
              <p
                :class="`font-medium transition-all duration-300 ease-in-out ${index == currentSlide ? 'slide-up' : 'translate-y-[200%] opacity-0'}`"
                :key="`${index}-subtext`"
              >
                {{ bannerSubtext }}
              </p>
              <button
                @click="scrollToTop"
                :class="`w-fit rounded-full bg-yellow-500 px-6 py-4 font-bold text-white transition-all duration-300 ease-in-out hover:bg-[#da5455] ${index == currentSlide ? 'slide-up' : 'translate-y-[200%] opacity-0'}`"
                :key="`${index}-button`"
              >
                GET HELP NOW
              </button>
            </div>
            <div v-if="index == 1"></div>
          </div>
          <img :src="bannerBg[index]" class="h-[46.5rem] w-full object-cover" />
        </div>
      </CarouselItem>
    </CarouselContent>
  </Carousel>
  <div class="h-screen bg-gray-500"></div>
</template>

<style scoped>
.slide-up {
  animation: slide-up 0.7s ease-in-out;
}

@keyframes slide-up {
  0% {
    transform: translateY(200%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>

<script setup>
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { scrollToTop } from '@/lib/utils'

import img1 from '@/assets/images/banner/01.jpg'
import img2 from '@/assets/images/banner/02.jpg'
import img3 from '@/assets/images/banner/03.jpg'

const bannerText = ['We Belive In Humanity', 'A Powerful Religion Theme', "It's Useless To Lecture"]
const bannerSubtext =
  'Enthusiastically underwhelm quality benefits rather than professional "outside the box" thinking. Distinctively network highly efficient leadership skills'

const bannerBg = [img1, img2, img3]

</script>

<template>
  <Carousel :opts="{ loop: true }" :plugins="[Autoplay({ delay: 10000 })]" class="bg-black">
    <CarouselContent>
      <CarouselItem v-for="(_, index) in 3" :key="index">
        <div class="relative flex select-none flex-col items-center justify-center text-white">
          <div class="absolute flex w-[35rem] flex-col gap-4">
            <h1 class="font-serif text-6xl font-semibold">{{ bannerText[index] }}</h1>
            <p class="font-medium">{{ bannerSubtext }}</p>
            <button
              @click="scrollToTop"
              class="transition-color w-fit rounded-full bg-yellow-500 px-6 py-4 font-bold text-white duration-300 hover:bg-[#da5455]"
            >
              GET HELP NOW
            </button>
          </div>
          <img :src="bannerBg[index]" class="h-[46.5rem] w-full object-cover" />
        </div>
      </CarouselItem>
    </CarouselContent>
  </Carousel>
  <div class="h-screen bg-gray-500"></div>
</template>

<script setup>
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'

const bannerText = ['We Belive In Humanity', 'A Powerful Religion Theme', "It's Useless To Lecture"]
const bannerSubtext =
  'Enthusiastically underwhelm quality benefits rather than professional "outside the box" thinking. Distinctively network highly efficient leadership skills'
</script>

<template>
  <Carousel :opts="{ loop: true }">
    <CarouselContent>
      <CarouselItem v-for="(_, index) in 3" :key="index">
        <div class="relative flex select-none flex-col items-center justify-center text-white">
          <div class="absolute flex w-[35rem] flex-col gap-4">
            <h1 class="font-serif text-6xl font-semibold">{{ bannerText[index] }}</h1>
            <p class="font-medium">{{ bannerSubtext }}</p>
            <button
              class="transition-color w-fit rounded-full bg-yellow-500 px-6 py-4 font-bold text-white duration-500 hover:bg-[#da5455]"
            >
              GET HELP NOW
            </button>
          </div>
          <img
            :src="`/src/assets/images/banner/0${index + 1}.jpg`"
            class="h-[46.5rem] w-full object-cover"
          />
        </div>
      </CarouselItem>
    </CarouselContent>
  </Carousel>
</template>

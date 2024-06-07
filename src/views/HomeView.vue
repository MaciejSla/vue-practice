<script setup>
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { scrollToTop } from '@/lib/utils'
import { ref, nextTick, watch } from 'vue'
import EventCounter from '@/components/EventCounter.vue'
import {
  IconFacebook,
  IconXTwitter,
  IconLinkedin,
  IconBriefcase,
  IconBinoculars,
  IconRocket
} from '@/components/icons'
import AnimatedAccent from '@/components/ui/AnimatedAccent.vue'
import HoverGroup from '@/components/ui/HoverGroup.vue'

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
                :class="`font-serif text-4xl font-semibold leading-none transition-all duration-300 ease-in-out sm:text-[5.9vw] lg:text-6xl ${index == currentSlide ? 'slide-up' : 'translate-y-[200%] opacity-0'}`"
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
                :class="`w-fit rounded-full bg-amber-300 px-6 py-4 font-bold text-white transition-all duration-300 ease-in-out hover:bg-[#da5455] ${index == currentSlide ? 'slide-up' : 'translate-y-[200%] opacity-0'}`"
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
  <div class="flex flex-col items-center justify-center gap-10 bg-stone-950 p-10 xl:flex-row">
    <h1 class="font-serif text-5xl text-amber-300">Upcoming Event</h1>
    <EventCounter :date="new Date('2025-06-04')" />
    <button
      @click="scrollToTop"
      class="w-fit rounded-full bg-amber-300 px-6 py-4 font-bold text-white transition-all duration-300 ease-in-out hover:bg-[#da5455]"
    >
      ALL EVENTS
    </button>
  </div>
  <div class="flex flex-col justify-center gap-10 px-10 py-24 lg:flex-row">
    <div class="flex flex-col items-center justify-center gap-3">
      <img src="@/assets/images/about/01.jpg" alt="about" class="rounded-full" />
      <div class="flex flex-col items-center gap-1">
        <h1 class="font-serif text-2xl xs:text-3xl">Deniyel Murchi</h1>
        <h3 class="text-gray-500">Church Pastor</h3>
      </div>
      <p class="max-w-[40rem] text-center text-gray-500 lg:max-w-[20rem]">
        Objectively streamline low-risk high-yield results whereas client-centric products.
        Objectively enable unique.
      </p>
      <div class="flex gap-2">
        <IconFacebook class="brand-icon size-4" />
        <IconXTwitter class="brand-icon size-4" />
        <IconLinkedin class="brand-icon size-4" />
      </div>
    </div>
    <div class="flex flex-col items-start gap-10 xs:px-10 lg:border-l">
      <div class="group/anim flex flex-col items-start gap-4">
        <h1 class="font-serif text-[3.5rem] leading-none">What We Do?</h1>
        <AnimatedAccent />
        <p class="max-w-[42rem] text-gray-500">
          Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor
          sit amet,consectetur adipiscing elit. Curabitur aliquet quam id dui posuere blandit.
        </p>
      </div>
      <div class="flex flex-col items-start gap-4">
        <HoverGroup
          title="Glorify God"
          subtext="Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a."
        >
          <IconBriefcase />
        </HoverGroup>
        <HoverGroup
          title="Love Community"
          subtext="Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a."
        >
          <IconBinoculars />
        </HoverGroup>
        <HoverGroup
          title="Believe Biblically"
          subtext="Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a."
        >
          <IconRocket />
        </HoverGroup>
      </div>
    </div>
  </div>
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

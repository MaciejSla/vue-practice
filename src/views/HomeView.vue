<script setup>
import EventCounter from '@/components/home/EventCounter.vue'
import HomeBanner from '@/components/home/HomeBanner.vue'
import HomeAbout from '@/components/home/HomeAbout.vue'
import AnimatedAccent from '@/components/ui/AnimatedAccent.vue'
import images from '@/assets/images/gallery'
import { IconPlus } from '@/components/icons'
</script>

<template>
  <HomeBanner />
  <div class="flex flex-col items-center justify-center gap-10 bg-stone-950 p-10 xl:flex-row">
    <h1 class="text-main font-serif text-5xl">Upcoming Event</h1>
    <EventCounter :date="new Date('2025-06-04')" />
    <button
      @click="scrollToTop"
      class="bg-main w-fit rounded-full px-6 py-4 font-bold text-white transition-all duration-300 ease-in-out hover:bg-[#da5455]"
    >
      ALL EVENTS
    </button>
  </div>
  <HomeAbout />
  <div class="flex flex-col items-center gap-10 p-4">
    <div class="group/anim flex flex-col items-center justify-center gap-4">
      <h1 class="font-serif text-5xl">Christian Festivals</h1>
      <AnimatedAccent reverse />
    </div>
    <!-- TODO filtering and image modal -->
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="(img, index) in images"
        :key="index"
        class="group relative flex items-center justify-center"
      >
        <img :src="img" alt="image" />
        <div
          class="absolute bottom-0 left-0 right-0 z-10 flex h-full scale-0 items-center justify-center bg-black/60 text-white duration-300 group-hover:scale-100"
        >
          <div
            class="hover:bg-main hover:border-main flex cursor-pointer items-center justify-center rounded-full border p-2 transition-colors duration-300"
          >
            <IconPlus class="size-5 stroke-white" stroke-width="4" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="h-screen bg-gray-500"></div>
</template>

<script setup>
import EventCounter from '@/components/home/EventCounter.vue'
import HomeBanner from '@/components/home/HomeBanner.vue'
import HomeAbout from '@/components/home/HomeAbout.vue'
import HomeGallery from '@/components/home/HomeGallery.vue'
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
  <HomeGallery />
  <div class="h-screen bg-gray-500"></div>
</template>

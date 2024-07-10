<script setup lang="ts">
import { scrollToTop } from '@/lib/utils'
</script>

<template>
  <HomeBanner />
  <div class="flex flex-col items-center justify-center gap-10 bg-stone-950 p-10 xl:flex-row">
    <h1 class="font-serif text-5xl text-main">Upcoming Event</h1>
    <EventCounter :date="new Date('2025-06-04')" />
    <button
      class="w-fit rounded-full bg-main px-6 py-4 font-bold text-white transition-all duration-300 ease-in-out hover:bg-[#da5455]"
      @click="scrollToTop"
    >
      ALL EVENTS
    </button>
  </div>
  <HomeAbout />
  <HomeGallery />
  <HomeEvents />
  <HomeSchedule />
  <HomeSermons />
  <HomeCauses />
  <HomeNews />
  <div class="h-screen bg-gray-500" />
</template>

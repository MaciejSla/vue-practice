<script setup lang="ts">
import EventCounter from '@/components/home/EventCounter.vue'
import CustomButton from '@/components/ui/CustomButton.vue'
import { scrollToTop } from '@/lib/utils'
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-10 bg-stone-950 p-10 xl:flex-row">
    <h1 class="font-serif text-5xl text-main">Upcoming Event</h1>
    <EventCounter :date="new Date('2025-06-04')" />
    <CustomButton @click="scrollToTop"> ALL EVENTS </CustomButton>
  </div>
</template>

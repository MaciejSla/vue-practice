<script setup>
import {
  Carousel,
  CarouselContent,
  CarouselItem
  // CarouselNext,
  // CarouselPrevious
} from '@/components/ui/carousel'
</script>

<template>
  <!-- TODO figure out how to add text to image -->
  <Carousel :opts="{ loop: true }">
    <CarouselContent>
      <CarouselItem v-for="(_, index) in 3" :key="index">
        <img :src="`/src/assets/images/banner/0${index + 1}.jpg`" />
      </CarouselItem>
    </CarouselContent>
  </Carousel>
</template>

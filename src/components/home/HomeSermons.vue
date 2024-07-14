<script setup lang="ts">
import AnimatedAccent from '@/components/ui/AnimatedAccent.vue'
import SermonsPage from '@/components/pages/SermonsPage.vue'
</script>

<template>
  <div class="my-16 flex flex-col items-center justify-center gap-10">
    <div class="group/anim flex flex-col items-center justify-center gap-5 text-center">
      <h1 class="font-serif text-5xl">Latest Sermons</h1>
      <AnimatedAccent reverse />
      <p class="max-w-[42rem] text-gray-500">
        Proin Eget Tortor Risus. Cras ultricies ligula sed magna dictum porta. Vivamus suscipit
        tortor eget felis porttitor volutpat.
      </p>
    </div>
    <SermonsPage />
  </div>
</template>

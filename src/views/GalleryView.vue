<script setup lang="ts">
import GalleryPage from '@/components/pages/GalleryPage.vue'
import AnimatedAccent from '@/components/ui/AnimatedAccent.vue'
</script>

<template>
  <div class="flex flex-col items-center gap-10 p-4">
    <div class="group/anim flex flex-col items-center justify-center gap-5 text-center">
      <h1 class="font-serif text-[calc(1.425rem+2.5vw)] xl:text-6xl">Gallery</h1>
      <AnimatedAccent reverse />
      <p class="max-w-[42rem] text-gray-500">
        Enthusiastically underwhelm quality benefits rather than professional ``outside the box``
        thinking. Distinctively network highly efficient leadership skills
      </p>
    </div>
    <GalleryPage />
  </div>
</template>

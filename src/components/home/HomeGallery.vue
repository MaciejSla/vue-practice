<script setup>
import { IconPlus } from '@/components/icons'
import images from '@/assets/images/gallery'
import AnimatedAccent from '@/components/ui/AnimatedAccent.vue'
</script>

<template>
  <div class="flex flex-col items-center gap-10 p-4">
    <div class="group/anim flex flex-col items-center justify-center gap-4">
      <h1 class="font-serif text-5xl">Christian Festivals</h1>
      <AnimatedAccent reverse />
    </div>
    <!-- TODO filtering and image modal -->
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <GalleryImage v-for="(img, index) in images" :key="index" :src="img" alt="Image" preview>
        <template #indicatoricon>
          <div
            class="flex cursor-pointer items-center justify-center rounded-full border p-2 transition-colors duration-300 hover:border-main hover:bg-main"
          >
            <IconPlus class="size-5 stroke-white" stroke-width="4" />
          </div>
        </template>
      </GalleryImage>
    </div>
  </div>
</template>

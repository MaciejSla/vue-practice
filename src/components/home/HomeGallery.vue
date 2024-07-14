<script setup lang="ts">
import AnimatedAccent from '@/components/ui/AnimatedAccent.vue'
import GalleryPage from '@/components/pages/GalleryPage.vue'
import CustomButton from '@/components/ui/CustomButton.vue'
import { RouterLink } from 'vue-router'
import { scrollToTop } from '@/lib/utils'
</script>

<template>
  <div class="flex flex-col items-center gap-10 p-4">
    <div class="group/anim flex flex-col items-center justify-center gap-5">
      <h1 class="font-serif text-5xl">Christian Festivals</h1>
      <AnimatedAccent reverse />
    </div>
    <GalleryPage />
    <RouterLink to="/gallery">
      <CustomButton> VIEW ALL </CustomButton>
    </RouterLink>
  </div>
</template>

<style>
.gallery-move, /* apply transition to moving elements */
.gallery-enter-active,
.gallery-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

.gallery-enter-from,
.gallery-leave-to {
  opacity: 0;
  transform: scale(0);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.gallery-leave-active {
  position: absolute;
}
</style>

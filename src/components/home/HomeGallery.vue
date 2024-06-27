<script setup>
import { IconPlus } from '@/components/icons'
import { images, tags } from '@/assets/images/gallery'
import AnimatedAccent from '@/components/ui/AnimatedAccent.vue'
import { ref, computed } from 'vue'

const filteredImages = computed(() => {
  return images.filter((img) => {
    return img.tags.includes(selectedTag.value) || selectedTag.value === 'All'
  })
})

const selectedTag = ref('All')
</script>

<template>
  <div class="flex flex-col items-center gap-10 p-4">
    <div class="group/anim flex flex-col items-center justify-center gap-4">
      <h1 class="font-serif text-5xl">Christian Festivals</h1>
      <AnimatedAccent reverse />
    </div>
    <!-- TODO filtering and image modal -->
    <div class="font-sm flex flex-wrap justify-center gap-10 text-sm font-bold capitalize">
      <p
        :class="`cursor-pointer ${selectedTag === 'All' ? 'text-main' : ''}`"
        @click="selectedTag = 'All'"
      >
        All
      </p>
      <p
        v-for="(tag, index) in tags"
        :key="index"
        :class="`cursor-pointer ${selectedTag === tag ? 'text-main' : ''}`"
        @click="selectedTag = tag"
      >
        {{ tag }}
      </p>
    </div>
    <!-- TODO fix leave animation -->
    <TransitionGroup
      name="gallery"
      tag="div"
      class="relative grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
    >
      <GalleryImage
        v-for="img in filteredImages"
        :key="img.src"
        :src="img.src"
        :alt="img.alt"
        preview
      >
        <template #indicatoricon>
          <div
            class="pointer-events-auto flex cursor-pointer items-center justify-center rounded-full border p-2 transition-colors duration-300 hover:border-main hover:bg-main"
          >
            <IconPlus class="size-5 stroke-white" stroke-width="4" />
          </div>
        </template>
      </GalleryImage>
    </TransitionGroup>
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
  transform: scale(0.2);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.gallery-leave-active {
  position: absolute;
  grid-row: 1;
  grid-column: 2;
  width: 32vw;
}
</style>

<script setup lang="ts">
import { IconPlus } from '@/components/icons'
import AnimatedAccent from '@/components/ui/AnimatedAccent.vue'
import CustomButton from '@/components/ui/CustomButton.vue'
import { images, tags } from '@/assets/images/gallery'
import { scrollToTop } from '@/lib/utils'
import { ref, computed } from 'vue'
import { useWindowSize } from '@vueuse/core'

const filteredImages = computed(() => {
  return images.filter((img) => {
    return img.tags.includes(selectedTag.value) || selectedTag.value === 'All'
  })
})

const { width } = useWindowSize()

const columns = computed(() => {
  if (width.value >= 1024) return 3
  if (width.value >= 640) return 2
  return 1
})

const getGridStyle = (index: number) => {
  if (columns.value === 3) {
    return {
      'grid-column': (index % 3) + 1,
      'grid-row': Math.floor(index / 3) + 1
    }
  } else if (columns.value === 2) {
    return {
      'grid-column': (index % 2) + 1,
      'grid-row': Math.floor(index / 2) + 1
    }
  }
  return {
    'grid-column': 1,
    'grid-row': index + 1
  }
}

const selectedTag = ref('All')
</script>

<template>
  <div class="flex flex-col items-center gap-10 p-4">
    <div class="group/anim flex flex-col items-center justify-center gap-5">
      <h1 class="font-serif text-5xl">Christian Festivals</h1>
      <AnimatedAccent reverse />
    </div>
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
    <TransitionGroup
      name="gallery"
      tag="div"
      class="relative grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
    >
      <GalleryImage
        v-for="(img, index) in filteredImages"
        :key="img.src"
        :src="img.src"
        :alt="img.alt"
        :class="`w-[92vw] sm:w-[46.5vw] lg:w-[31vw]`"
        :style="getGridStyle(index)"
        preview
      >
        <template #previewicon>
          <div
            class="pointer-events-auto flex cursor-pointer items-center justify-center rounded-full border p-2 transition-colors duration-300 hover:border-main hover:bg-main"
          >
            <IconPlus class="size-5 stroke-white" stroke-width="4" />
          </div>
        </template>
      </GalleryImage>
    </TransitionGroup>
    <CustomButton @click="scrollToTop"> VIEW ALL </CustomButton>
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

<script setup lang="ts">
import { IconHeart, IconInfo, IconMenu, IconArrow } from '@/components/icons'
import { RouterLink } from 'vue-router'
import MenuItem from '@/components/navigation/MenuItem.vue'
import { onMounted, onBeforeUnmount, ref, computed } from 'vue'
import { scrollToTop } from '@/lib/utils'
import TopHeader from '@/components/navigation/TopHeader.vue'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { Collapsible, CollapsibleContent } from '@/components/ui/collapsible'
import { useWindowSize } from '@vueuse/core'

import logo from '@/assets/images/logo/01-b.png'
import logo2 from '@/assets/images/logo/01.png'

const navEl = ref()
const navYTop = ref(1)
const { width } = useWindowSize()
const info = ref(false)
const dropdown = ref(false)

const isTop = computed(() => {
  return navYTop.value === 0
})

const onScroll = () => {
  if (navEl.value == null) return
  navYTop.value = navEl.value.getBoundingClientRect().top
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <Collapsible v-if="width <= 1200" v-model:open="info">
    <CollapsibleContent>
      <TopHeader />
    </CollapsibleContent>
  </Collapsible>
  <TopHeader v-else />

  <div v-if="width <= 1200" ref="navEl" class="flex flex-col items-center bg-main">
    <div class="flex w-full flex-wrap items-center justify-between gap-4 px-5 py-4 xs:px-20">
      <RouterLink to="/" @click="scrollToTop">
        <img :src="logo2" />
      </RouterLink>
      <div class="flex items-center gap-4">
        <button
          class="cursor-pointer rounded border border-black/15 px-4 py-2"
          @click="dropdown = !dropdown"
        >
          <IconMenu class="size-5 fill-black/70" />
        </button>
        <button
          class="cursor-pointer rounded border border-black/15 px-4 py-2"
          @click="info = !info"
        >
          <IconInfo class="size-5 fill-black/70" />
        </button>
      </div>
    </div>
    <Collapsible v-model:open="dropdown" class="w-full">
      <CollapsibleContent class="w-full">
        <div class="w-full px-5 xs:px-20">
          <!-- TODO add routes etc -->
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Home</AccordionTrigger>
              <AccordionContent class="p-0">
                <RouterLink
                  to="/"
                  class="flex w-full items-center border-b border-black/15 px-6 py-2 font-semibold transition-colors hover:bg-black hover:text-main"
                  active-class="bg-black text-main"
                >
                  Home
                </RouterLink>
                <RouterLink
                  to="/about"
                  class="flex w-full items-center border-b border-black/15 px-6 py-2 font-semibold transition-colors hover:bg-black hover:text-main"
                  active-class="bg-black text-main"
                >
                  About
                </RouterLink>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" class="border-none">
              <AccordionTrigger>Test</AccordionTrigger>
              <AccordionContent> No </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </CollapsibleContent>
    </Collapsible>
  </div>
  <div
    v-if="width > 1200"
    ref="navEl"
    :class="`sticky top-0 z-10 bg-black transition-all duration-500 ${isTop ? 'p-4' : ''}`"
  >
    <div class="flex justify-center transition-all">
      <RouterLink v-if="isTop" to="/" @click="scrollToTop">
        <img :src="logo" class="mr-32" />
      </RouterLink>
      <MenuItem to="/">Home</MenuItem>
      <MenuItem to="/about">About</MenuItem>
      <MenuItem to="/causes">Causes</MenuItem>
      <MenuItem to="/gallery">Gallery</MenuItem>
      <MenuItem to="/sermons">Sermons</MenuItem>
      <MenuItem to="/blog">Blog</MenuItem>
      <MenuItem to="/shop">Shop</MenuItem>
      <MenuItem :arrow="false" to="/contact">Contact Us</MenuItem>
      <div
        v-if="!isTop"
        class="ml-4 flex -skew-x-[20deg] cursor-pointer items-center gap-1 bg-main px-8 py-4 text-white transition-colors hover:bg-[#da5455]"
      >
        <b class="scale-y-110">DONATE NOW</b>
        <IconHeart height="16" class="scale-y-110 fill-white" />
      </div>
    </div>
  </div>
  <Transition name="slide">
    <div
      v-if="(isTop && width > 1200) || (width <= 1200 && navYTop < -100)"
      class="fixed bottom-8 right-8 z-50 flex cursor-pointer items-center justify-center text-6xl text-white xs:right-24"
      @click="scrollToTop"
    >
      <IconArrow class="z-50 size-6 fill-white drop-shadow" />
      <div class="absolute z-40 animate-slow-ping rounded-full bg-main p-5" />
      <div class="absolute z-40 rounded-full bg-main p-5" />
    </div>
  </Transition>
</template>

<style scoped>
.slide-enter-active {
  transition: all 0.1s ease-out;
}

.slide-leave-active {
  transition: all 0.1s ease-in;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(200%);
}
</style>

<script setup>
import { IconHeart, IconInfo, IconMenu } from '@/components/icons'
import MenuItem from '@/components/navigation/MenuItem.vue'
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { computed } from 'vue'
import { scrollToTop } from '@/lib/utils'
import TopHeader from '@/components/navigation/TopHeader.vue'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { Collapsible, CollapsibleContent } from '@/components/ui/collapsible'

import logo from '@/assets/images/logo/01-b.png'
import logo2 from '@/assets/images/logo/01.png'

const navEl = ref()
const navYTop = ref(1)
const screenWidth = ref(window.innerWidth)
const info = ref(false)
const dropdown = ref(false)

const isTop = computed(() => {
  return navYTop.value === 0
})

const onResize = () => {
  screenWidth.value = window.innerWidth
}

const onScroll = () => {
  navYTop.value = navEl.value.getBoundingClientRect().top
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
  window.addEventListener('resize', onResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onResize)
})
</script>

<template>
  <Collapsible v-model:open="info" v-if="screenWidth <= 1200">
    <CollapsibleContent>
      <TopHeader />
    </CollapsibleContent>
  </Collapsible>
  <TopHeader v-else />

  <div class="flex flex-col items-center bg-amber-300" v-if="screenWidth <= 1200">
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
                  class="flex w-full items-center border-b border-black/15 px-6 py-2 font-semibold transition-colors hover:bg-black hover:text-amber-300"
                  active-class="bg-black text-amber-300"
                >
                  Home
                </RouterLink>
                <RouterLink
                  to="/about"
                  class="flex w-full items-center border-b border-black/15 px-6 py-2 font-semibold transition-colors hover:bg-black hover:text-amber-300"
                  active-class="bg-black text-amber-300"
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
    v-if="screenWidth > 1200"
    :class="`sticky top-0 z-10 bg-black transition-all duration-500 ${isTop ? 'p-4' : ''}`"
    ref="navEl"
  >
    <div class="flex justify-center transition-all">
      <RouterLink to="/" @click="scrollToTop" v-if="isTop">
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
        class="ml-4 flex -skew-x-[20deg] cursor-pointer items-center gap-1 bg-amber-300 px-8 py-4 text-white transition-colors hover:bg-[#da5455]"
      >
        <b class="scale-y-110">DONATE NOW</b>
        <IconHeart height="16" class="scale-y-110 fill-white" />
      </div>
    </div>
  </div>
</template>

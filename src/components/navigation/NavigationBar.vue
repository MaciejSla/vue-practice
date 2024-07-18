<script setup lang="ts">
import { HeartIcon, InfoIcon, MenuIcon, ArrowUpIcon } from 'lucide-vue-next'
import AppLink from '@/components/navigation/AppLink.vue'
import MenuItem from '@/components/navigation/MenuItem.vue'
import { ref, computed, watch } from 'vue'
import { scrollToTop } from '@/lib/utils'
import TopHeader from '@/components/navigation/TopHeader.vue'
import { Collapsible, CollapsibleContent } from '@/components/ui/collapsible'
import { useWindowSize, useElementBounding } from '@vueuse/core'
import { useRouter } from 'vue-router'

import logo from '@/assets/images/logo/01-b.png'
import logo2 from '@/assets/images/logo/01.png'

const router = useRouter()
const routes = [
  {
    name: '',
    alt: 'Home'
  },
  {
    name: 'events'
  },
  {
    name: 'causes'
  },
  {
    name: 'gallery'
  },
  {
    name: 'sermons'
  },
  {
    name: 'blog'
  },
  {
    name: 'shop'
  },
  {
    name: 'contact',
    alt: 'Contact Us'
  }
]

watch(router.currentRoute, () => {
  info.value = false
  dropdown.value = false
})

const navEl = ref()
const { width } = useWindowSize()
const isLarge = computed(() => {
  return width.value > 1200
})

const info = ref(false)
const toggleInfo = () => {
  info.value = !info.value
}

const dropdown = ref(false)
const toggleDropdown = () => {
  dropdown.value = !dropdown.value
}

const { top, bottom } = useElementBounding(navEl)
const isTop = computed(() => {
  return top.value <= 0
})
const isBottom = computed(() => {
  return bottom.value <= 0
})
</script>

<template>
  <Collapsible v-if="!isLarge" v-model:open="info">
    <CollapsibleContent>
      <TopHeader />
    </CollapsibleContent>
  </Collapsible>
  <TopHeader v-else />

  <div v-if="!isLarge" ref="navEl" class="flex flex-col items-center bg-main">
    <div class="flex w-full flex-wrap items-center justify-between gap-4 px-5 py-4 xs:px-20">
      <AppLink to="/" @click="scrollToTop">
        <img :src="logo2" />
      </AppLink>
      <div class="flex items-center gap-4">
        <button
          class="cursor-pointer rounded border border-black/15 px-4 py-2"
          @click="toggleDropdown"
        >
          <MenuIcon class="size-6 stroke-black/70" />
        </button>
        <button class="cursor-pointer rounded border border-black/15 px-4 py-2" @click="toggleInfo">
          <InfoIcon class="size-6 stroke-black/70" />
        </button>
      </div>
    </div>
    <Collapsible v-model:open="dropdown" class="w-full">
      <CollapsibleContent class="w-full">
        <div class="w-full px-5 xs:px-20">
          <AppLink
            :to="`/${route.name}`"
            class="flex w-full items-center border-b border-black/15 px-6 py-2 font-semibold capitalize transition-colors hover:bg-black hover:text-main"
            active-class="bg-black text-main"
            v-for="route in routes"
            :key="route.name"
          >
            {{ route.alt ? route.alt : route.name }}
          </AppLink>
        </div>
      </CollapsibleContent>
    </Collapsible>
  </div>
  <div v-if="isLarge" ref="navEl" class="bg-black">
    <div class="flex justify-center gap-8 transition-all">
      <MenuItem :to="`/${route.name}`" v-for="route in routes" :key="route.name" class="capitalize">
        {{ route.alt ? route.alt : route.name }}
      </MenuItem>
      <div
        class="ml-4 flex -skew-x-[20deg] cursor-pointer items-center gap-1 bg-main px-8 py-4 text-white transition-colors duration-300 hover:bg-main-hover"
      >
        <b class="scale-y-110">DONATE NOW</b>
        <HeartIcon class="size-5 scale-y-110 fill-white" />
      </div>
    </div>
  </div>
  <Transition name="slide-down">
    <div v-if="isBottom && isLarge" class="fixed top-0 z-50 w-full bg-black p-4">
      <div class="flex justify-center gap-8 transition-all">
        <AppLink to="/" @click="scrollToTop">
          <img :src="logo" class="mr-32" />
        </AppLink>
        <MenuItem
          :to="`/${route.name}`"
          v-for="route in routes"
          :key="route.name"
          class="capitalize"
        >
          {{ route.alt ? route.alt : route.name }}
        </MenuItem>
      </div>
    </div>
  </Transition>
  <Transition name="slide">
    <div
      v-if="(isTop && isLarge) || (!isLarge && top < -100)"
      class="fixed bottom-[3%] right-[5%] z-50 flex cursor-pointer items-center justify-center text-6xl text-white"
      @click="scrollToTop"
    >
      <ArrowUpIcon class="z-50 size-6 stroke-white stroke-[3] drop-shadow" />
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

.slide-down-enter-active {
  transition: all 1s ease-out;
}

.slide-down-leave-active {
  transition: all 0.2s ease-in;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-200%);
}
</style>

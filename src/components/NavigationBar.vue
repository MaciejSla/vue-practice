<script setup>
import IconHeart from '@/components/icons/IconHeart.vue'
import MenuItem from '@/components/MenuItem.vue'
import { onMounted, onBeforeUnmount, ref } from 'vue';
import { useDebounceFn } from '@vueuse/core';
import { computed } from 'vue';
import { scrollToTop } from '@/lib/utils';


import logo from '@/assets/images/logo/01-b.png'

const navEl = ref()
const navYTop = ref(1)

const isTop = computed(() => {
  return navYTop.value === 0
})

const onScroll = (el) => {
  console.log(navEl.value.getBoundingClientRect().top)
  navYTop.value = navEl.value.getBoundingClientRect().top
}

const debouncedOnScroll = useDebounceFn(onScroll, 30)

onMounted(() => {
  window.addEventListener('scroll', debouncedOnScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', debouncedOnScroll)
})

</script>

<template>
  <div :class="`sticky top-0 z-10 bg-black transition-all duration-300 ${isTop ? 'p-4' : ''}`" ref="navEl">
    <Transition name="nav" mode="out-in">
        <div class="flex justify-center" v-if="!isTop">
          <MenuItem to="/">Home</MenuItem>
          <MenuItem to="/about">About</MenuItem>
          <MenuItem>Causes</MenuItem>
          <MenuItem>Gallery</MenuItem>
          <MenuItem>Sermons</MenuItem>
          <MenuItem>Blog</MenuItem>
          <MenuItem>Shop</MenuItem>
          <MenuItem :arrow="false">Contact Us</MenuItem>
          <div
            class="ml-4 flex -skew-x-[20deg] cursor-pointer items-center gap-1 bg-yellow-500 px-8 py-4 text-white transition-colors hover:bg-[#da5455]"
          >
            <b class="scale-y-110">DONATE NOW</b>
            <IconHeart height="16" class="scale-y-110 fill-white" />
          </div>
        </div>
        <div class="flex justify-center" v-else>
          <RouterLink to="/" @click="scrollToTop">
            <img :src="logo"  class="mr-32" />
          </RouterLink>
          <MenuItem to="/">Home</MenuItem>
          <MenuItem to="/about">About</MenuItem>
          <MenuItem>Causes</MenuItem>
          <MenuItem>Gallery</MenuItem>
          <MenuItem>Sermons</MenuItem>
          <MenuItem>Blog</MenuItem>
          <MenuItem>Shop</MenuItem>
          <MenuItem :arrow="false">Contact Us</MenuItem>
        </div>
    </Transition>
  </div>
</template>


<style scoped>
.nav-enter-active,
.nav-leave-active 
{
  transition: all 0.3s ease-out;
}

.nav-leave-to,
.nav-enter-from {
  opacity: 0;
}

</style>
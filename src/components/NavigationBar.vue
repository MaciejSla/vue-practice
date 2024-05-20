<script setup>
import IconHeart from '@/components/icons/IconHeart.vue'
import MenuItem from '@/components/MenuItem.vue'
</script>

<template>
  <div class="flex justify-center bg-black">
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
</template>

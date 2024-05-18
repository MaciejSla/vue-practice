<script setup>
import { RouterLink, RouterView } from 'vue-router'
import IconPhone from '@/components/icons/IconPhone.vue'
import IconEnvelope from '@/components/icons/IconEnvelope.vue'
import IconFacebook from '@/components/icons/IconFacebook.vue'
import IconXTwitter from '@/components/icons/IconXTwitter.vue'
import IconTwitter from '@/components/icons/IconTwitter.vue'
import IconLinkedin from '@/components/icons/IconLinkedin.vue'
import IconPinterest from '@/components/icons/IconPinterest.vue'
import IconHeart from '@/components/icons/IconHeart.vue'
import IconSearch from '@/components/icons/IconSearch.vue'
import IconShopping from '@/components/icons/IconShopping.vue'
import IconCalendar from '@/components/icons/IconCalendar.vue'
import IconMenuArrow from '@/components/icons/IconMenuArrow.vue'
import MenuItem from '@/components/MenuItem.vue'
</script>

<template>
  <IconPhone height="32" />
  <IconEnvelope height="32" />
  <span class="flex gap-2">
    <IconFacebook height="32" class="brand-icon" />
    <IconXTwitter height="32" class="brand-icon" />
    <IconTwitter height="32" class="brand-icon" />
    <IconLinkedin height="32" class="brand-icon" />
    <IconPinterest height="32" class="brand-icon" />
  </span>
  <IconHeart height="32" />
  <IconSearch height="32" />
  <IconShopping height="32" />
  <IconCalendar height="32" />
  <div class="flex justify-center gap-8 bg-black">
    <MenuItem>
      <RouterLink to="/"> Home </RouterLink>
    </MenuItem>
    <MenuItem>
      <RouterLink to="/about"> Events </RouterLink>
    </MenuItem>
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

  <RouterView />
</template>

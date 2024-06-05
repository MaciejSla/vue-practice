<script setup>
import {
  IconPhone,
  IconEnvelope,
  IconFacebook,
  IconXTwitter,
  IconLinkedin,
  IconPinterest,
  IconSearch,
  IconShopping
} from '@/components/icons'
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="flex flex-col items-center justify-around gap-4 p-8 sm:flex-row">
    <div class="text-md flex flex-col gap-4 fill-gray-500 text-gray-500">
      <div class="flex items-center gap-4">
        <IconPhone height="13" />
        +8812 345 678 912
      </div>
      <div class="flex items-center gap-4">
        <IconEnvelope height="13" />
        info@yourmail.com
      </div>
    </div>
    <RouterLink to="/" class="hidden md:inline">
      <img src="@/assets/images/logo/01.png" alt="logo full" />
    </RouterLink>
    <div class="w-full border-b border-black/5 sm:hidden"></div>
    <div class="flex gap-6 fill-gray-500">
      <span class="flex gap-2">
        <RouterLink to="/">
          <IconFacebook height="18" class="brand-icon" />
        </RouterLink>
        <RouterLink to="/">
          <IconXTwitter height="18" class="brand-icon" />
        </RouterLink>
        <RouterLink to="/">
          <IconLinkedin height="18" class="brand-icon" />
        </RouterLink>
        <RouterLink to="/">
          <IconPinterest height="18" class="brand-icon" />
        </RouterLink>
      </span>
      <div class="border-l"></div>
      <!-- TODO add search and shopping functionality -->
      <IconSearch height="18" />
      <IconShopping height="18" />
    </div>
  </header>
</template>

<script setup lang="ts">
import { PhoneIcon, MailIcon, SearchIcon } from 'lucide-vue-next'
import { FacebookIcon, XIcon, LinkedInIcon, PinterestIcon } from 'vue3-simple-icons'
import AppLink from '@/components/navigation/AppLink.vue'
import CartSlider from '@/components/navigation/CartSlider.vue'
</script>

<template>
  <header
    class="flex flex-col items-center justify-around gap-4 p-8 xs:flex-row 2xl:justify-center 2xl:gap-96"
  >
    <div class="text-md flex flex-col gap-4 fill-gray-500 text-gray-500">
      <div class="flex items-center gap-4">
        <div class="rounded-full border p-2">
          <PhoneIcon class="size-4 stroke-gray-500 stroke-[3]" />
        </div>
        +8812 345 678 912
      </div>
      <div class="flex items-center gap-4">
        <div class="rounded-full border p-2">
          <MailIcon class="size-4 stroke-gray-500 stroke-[3]" />
        </div>
        info@yourmail.com
      </div>
    </div>
    <AppLink to="/" class="hidden md:inline">
      <img src="@/assets/images/logo/01.png" alt="logo full" />
    </AppLink>
    <div class="w-full border-b border-black/5 sm:hidden" />
    <div class="flex items-center gap-6 fill-gray-500">
      <span class="flex gap-2">
        <AppLink to="/">
          <FacebookIcon class="brand-icon size-4" />
        </AppLink>
        <AppLink to="/">
          <XIcon class="brand-icon size-4" />
        </AppLink>
        <AppLink to="/">
          <LinkedInIcon class="brand-icon size-4" />
        </AppLink>
        <AppLink to="/">
          <PinterestIcon class="brand-icon size-4" />
        </AppLink>
      </span>
      <div class="h-6 border-l" />
      <!-- TODO add search and shopping functionality -->
      <SearchIcon class="size-4 flex-shrink-0 stroke-gray-500 stroke-[3]" />
      <CartSlider />
    </div>
  </header>
</template>

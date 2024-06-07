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
  <header
    class="flex flex-col items-center justify-around gap-4 p-8 xs:flex-row 2xl:justify-center 2xl:gap-96"
  >
    <div class="text-md flex flex-col gap-4 fill-gray-500 text-gray-500">
      <div class="flex items-center gap-4">
        <div class="rounded-full border p-2">
          <IconPhone class="size-3" />
        </div>
        +8812 345 678 912
      </div>
      <div class="flex items-center gap-4">
        <div class="rounded-full border p-2">
          <IconEnvelope class="size-3" />
        </div>
        info@yourmail.com
      </div>
    </div>
    <RouterLink to="/" class="hidden md:inline">
      <img src="@/assets/images/logo/01.png" alt="logo full" />
    </RouterLink>
    <div class="w-full border-b border-black/5 sm:hidden"></div>
    <div class="flex items-center gap-6 fill-gray-500">
      <span class="flex gap-2">
        <RouterLink to="/">
          <IconFacebook class="brand-icon size-4" />
        </RouterLink>
        <RouterLink to="/">
          <IconXTwitter class="brand-icon size-4" />
        </RouterLink>
        <RouterLink to="/">
          <IconLinkedin class="brand-icon size-4" />
        </RouterLink>
        <RouterLink to="/">
          <IconPinterest class="brand-icon size-4" />
        </RouterLink>
      </span>
      <div class="h-6 border-l"></div>
      <!-- TODO add search and shopping functionality -->
      <IconSearch class="size-4 flex-shrink-0" />

      <!-- DaisyUI Drawer -->
      <label for="my-drawer" class="drawer-button cursor-pointer rounded-full border p-2">
        <IconShopping class="size-4" />
      </label>
      <div class="drawer drawer-end z-50">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-side">
          <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
          <div>test</div>
          <div class="min-h-full w-80 bg-white p-4">
            <label class="btn btn-primary" for="my-drawer">X</label>
            <li><a>Sidebar Item 1</a></li>
            <li><a>Sidebar Item 2</a></li>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

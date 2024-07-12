<script setup lang="ts">
import logo from '@/assets/images/logo/01.png'
import AppLink from '@/components/navigation/AppLink.vue'
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-8 p-14">
    <img :src="logo" />
    <p class="text-center text-sm text-gray-500">
      Copyright © 2024 prayerzon | Designed by LabArtisan | Rewritten in Vue by
      <AppLink to="https://github.com/MaciejSla" class="transition-all hover:scale-150">
        MaciejSla
      </AppLink>
    </p>
  </div>
</template>

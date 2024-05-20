<script setup>
import { RouterView } from 'vue-router'
import TopHeader from '@/components/TopHeader.vue'
import NavigationBar from '@/components/NavigationBar.vue'
</script>

<template>
  <TopHeader />
  <NavigationBar />
  <RouterView />
</template>

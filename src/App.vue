<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import NavigationBar from '@/components/navigation/NavigationBar.vue'
import { onMounted, ref } from 'vue'
import LoadingScreen from '@/components/LoadingScreen.vue'
import Toaster from '@/components/ui/toast/Toaster.vue'
import PageFooter from '@/components/navigation/footer/PageFooter.vue'
import AppLink from '@/components/navigation/AppLink.vue'

const isLoading = ref(true)

const route = useRoute()

// maybe useful later?
onMounted(() => {
  // isLoading.value = false
  setTimeout(() => {
    isLoading.value = false
  }, 1000)
})
</script>

<template>
  <LoadingScreen :is-loading="isLoading">
    <div class="absolute w-full">
      <NavigationBar />
      <div class="flex items-center justify-between p-8" v-if="route.name != 'home'">
        <h1 class="font-serif text-4xl capitalize">{{ route.name }}</h1>
        <div class="flex items-center gap-2">
          <AppLink to="/" class="transition-colors duration-300 hover:text-main">Home</AppLink>
          /
          <div class="capitalize">{{ route.name }}</div>
        </div>
      </div>
      <RouterView />
      <PageFooter />
    </div>
  </LoadingScreen>
  <Toaster />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavigationBar from '@/components/navigation/NavigationBar.vue'
import { onMounted, ref } from 'vue'
import LoadingScreen from '@/components/LoadingScreen.vue'
import Toaster from '@/components/ui/toast/Toaster.vue'
import PageFooter from '@/components/navigation/footer/PageFooter.vue'

const isLoading = ref(true)

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
      <RouterView />
      <PageFooter />
    </div>
  </LoadingScreen>
  <Toaster />
</template>

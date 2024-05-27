<script setup>
import { RouterView } from 'vue-router'
import TopHeader from '@/components/TopHeader.vue'
import NavigationBar from '@/components/NavigationBar.vue'
import { onMounted, ref } from 'vue'

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
  <Transition name="fade">
    <div
      class="absolute z-50 flex h-screen w-full flex-col items-center justify-center bg-yellow-500"
      v-if="isLoading"
    >
      <div class="absolute w-min animate-ping rounded-full bg-gray-50 p-4 opacity-50"></div>
      <div class="absolute w-min animate-ping rounded-full bg-white p-2"></div>
    </div>
    <div v-else class="absolute w-full">
      <TopHeader />
      <NavigationBar />
      <RouterView />
    </div>
  </Transition>
</template>

<style scoped>
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}

.fade-leave-to {
  opacity: 0;
}
</style>

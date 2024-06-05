<script setup>
import { RouterView } from 'vue-router'
import NavigationBar from '@/components/navigation/NavigationBar.vue'
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
      class="absolute z-50 flex h-screen w-full flex-col items-center justify-center bg-amber-300"
      v-if="isLoading"
    >
      <div class="absolute w-min animate-ping rounded-full bg-gray-50 p-4 opacity-50"></div>
      <div class="absolute w-min animate-ping rounded-full bg-white p-2"></div>
    </div>
    <div v-else class="absolute w-full">
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

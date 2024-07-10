<script setup lang="ts">
const isLoading = useState('isLoading', () => true)

// maybe useful later?
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 1000)
})
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtLoadingIndicator />
  <LoadingScreen :is-loading="isLoading" />
  <NavigationBar />
  <NuxtPage />
</template>

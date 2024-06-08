<script setup>
const { isLoading } = defineProps({
  isLoading: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <Transition name="fade">
    <div
      class="absolute z-50 flex h-screen w-full flex-col items-center justify-center bg-main"
      v-if="isLoading"
    >
      <div class="absolute w-min animate-ping rounded-full bg-gray-50 p-4 opacity-50"></div>
      <div class="absolute w-min animate-ping rounded-full bg-white p-2"></div>
    </div>
    <slot v-else />
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

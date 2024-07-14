<script setup lang="ts">
const props = withDefaults(defineProps<{ isLoading: boolean }>(), {
  isLoading: false
})
</script>

<template>
  <Transition name="fade">
    <div
      class="fixed z-50 flex h-screen w-full flex-col items-center justify-center bg-main"
      v-if="props.isLoading"
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

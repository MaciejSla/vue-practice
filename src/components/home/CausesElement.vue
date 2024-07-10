<script setup lang="ts">
const props = withDefaults(defineProps<{ top: string | number; bottom: string }>(), {
  top: '',
  bottom: ''
})
</script>

<template>
  <div
    class="flex size-48 flex-col items-center justify-center gap-4 rounded-full border-2 border-main bg-white/20"
  >
    <h1 class="text-4xl text-main">{{ props.top }}</h1>
    <p class="text-2xl">{{ props.bottom }}</p>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{ count: number; unit: string }>(), {
  count: 0,
  unit: ''
})
</script>

<template>
  <div class="size-32 rounded-full bg-stone-800 p-1">
    <div class="size-full rounded-full bg-stone-950 p-2">
      <div class="flex size-full flex-col items-center justify-center rounded-full bg-stone-800">
        <h3 class="text-2xl font-bold text-main">{{ props.count }}</h3>
        <p class="font-serif text-lg font-semibold capitalize text-white">{{ props.unit }}</p>
      </div>
    </div>
  </div>
</template>

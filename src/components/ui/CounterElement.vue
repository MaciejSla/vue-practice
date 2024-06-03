<script setup>
const props = defineProps({
  count: {
    type: Number,
    default: 0
  },
  unit: {
    type: String
  }
})
</script>

<template>
  <div class="size-32 rounded-full bg-stone-800 p-1">
    <div class="size-full rounded-full bg-stone-950 p-2">
      <div class="flex size-full flex-col items-center justify-center rounded-full bg-stone-800">
        <h3 class="text-2xl font-bold text-amber-300">{{ props.count }}</h3>
        <p class="font-serif text-lg font-semibold capitalize text-white">{{ props.unit }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const { reverse } = defineProps({
  reverse: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="flex gap-3">
    <div
      :class="`h-[0.2rem] w-3 transition-width duration-300 ease-in-out group-hover/anim:w-28 ${reverse ? 'bg-gray-200' : 'bg-main'}`"
    ></div>
    <div
      :class="`h-[0.2rem] w-28 transition-width duration-300 ease-in-out group-hover/anim:w-3 ${reverse ? 'bg-main' : 'bg-gray-200'}`"
    ></div>
  </div>
</template>

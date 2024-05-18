<script setup>
import IconMenuArrow from '@/components/icons/IconMenuArrow.vue'

const props = defineProps({
  height: {
    type: String,
    default: '18'
  },
  arrow: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <div
    class="group flex w-fit cursor-pointer items-center gap-2 fill-white text-center text-white hover:fill-yellow-500 hover:text-yellow-500"
  >
    <b><slot /></b>
    <IconMenuArrow
      :height="props.height"
      class="rotate-180 transition-transform duration-[250ms] group-hover:rotate-90"
      v-if="props.arrow"
    />
  </div>
</template>

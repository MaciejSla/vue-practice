<script setup>
import IconMenuArrow from '@/components/icons/IconMenuArrow.vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  height: {
    type: String,
    default: '18'
  },
  arrow: {
    type: Boolean,
    default: true
  },
  to: {
    type: String,
    default: '/'
  }
})
</script>

<template>
  <!-- TODO figure out if this should be a dropdown or just a link -->
  <RouterLink
    class="group flex w-fit items-center gap-2 fill-white px-4 text-center text-white transition-colors hover:fill-yellow-500 hover:text-yellow-500"
    active-class="fill-yellow-500 text-yellow-500"
    :to="to"
  >
    <b><slot /></b>
    <IconMenuArrow
      :height="props.height"
      class="rotate-180 transition-transform duration-[250ms] group-hover:rotate-90"
      v-if="props.arrow"
    />
  </RouterLink>
</template>

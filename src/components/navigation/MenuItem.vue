<script setup lang="ts">
import { ChevronDownIcon } from 'lucide-vue-next'
import AppLink from '@/components/navigation/AppLink.vue'
const props = withDefaults(defineProps<{ height?: string; arrow?: boolean; to?: string }>(), {
  height: '18',
  arrow: false,
  to: '/'
})
</script>

<template>
  <AppLink
    class="group flex w-fit items-center fill-white text-center text-white transition-colors hover:fill-main hover:text-main"
    active-class="!fill-main !text-main"
    :to="to"
  >
    <b><slot /></b>
    <ChevronDownIcon
      v-if="props.arrow"
      :height="props.height"
      class="size-6 transition-transform duration-200 group-hover:-rotate-90"
    />
  </AppLink>
</template>

<script setup>
import { computed } from 'vue'
import { ScrollAreaScrollbar, ScrollAreaThumb } from 'radix-vue'
import { cn } from '@/lib/utils'

const props = defineProps({
  orientation: { type: String, required: false, default: 'vertical' },
  forceMount: { type: Boolean, required: false },
  asChild: { type: Boolean, required: false },
  as: { type: null, required: false },
  class: { type: null, required: false }
})

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <ScrollAreaScrollbar
    v-bind="delegatedProps"
    :class="
      cn(
        'flex touch-none select-none rounded-full bg-gray-200 transition-colors',
        orientation === 'vertical' && 'h-full w-2 border-l border-l-transparent',
        orientation === 'horizontal' && 'h-2 flex-col border-t border-t-transparent',
        props.class
      )
    "
  >
    <ScrollAreaThumb class="relative flex-1 rounded-full bg-main" />
  </ScrollAreaScrollbar>
</template>

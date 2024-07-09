<script setup>
import { IconStar } from '@/components/icons'
import { cn } from '@/lib/utils'
const props = defineProps({
  rating: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    default: 5
  },
  class: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="flex gap-1">
    <IconStar
      v-for="index in props.max"
      :key="index"
      :class="
        cn('size-2', index - 0.5 <= props.rating ? 'fill-main' : 'fill-gray-400', props.class)
      "
      :type="index <= props.rating ? 'full' : index - 0.5 <= props.rating ? 'half' : 'empty'"
    />
  </div>
</template>

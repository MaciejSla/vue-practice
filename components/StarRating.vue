<script setup lang="ts">
import { IconStar } from '~/components/icon'
import { cn } from '@/lib/utils'

const props = withDefaults(defineProps<{ rating: number; max?: number; class?: string }>(), {
  rating: 0,
  max: 5,
  class: ''
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

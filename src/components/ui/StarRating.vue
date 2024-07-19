<script setup lang="ts">
import IconStar from '@/components/icons/IconStar.vue'
import { cn } from '@/lib/utils'

const emit = defineEmits(['update:rating'])

const props = withDefaults(
  defineProps<{ rating: number; max?: number; class?: string; interactive?: boolean }>(),
  {
    rating: 0,
    max: 5,
    class: '',
    interactive: false
  }
)

const changeRating = (score: number) => {
  emit('update:rating', score)
}
</script>

<template>
  <div class="flex gap-1" v-if="!props.interactive">
    <IconStar
      v-for="index in props.max"
      :key="index"
      :class="
        cn('size-2', index - 0.5 <= props.rating ? 'fill-main' : 'fill-gray-400', props.class)
      "
      :type="index <= props.rating ? 'full' : index - 0.5 <= props.rating ? 'half' : 'empty'"
    />
  </div>
  <div class="flex" v-else>
    <div @click="changeRating(0)" class="w-2"></div>
    <IconStar
      v-for="index in props.max"
      :key="index"
      :class="
        cn('mr-1 size-2', index - 0.5 <= props.rating ? 'fill-main' : 'fill-gray-400', props.class)
      "
      :type="index <= props.rating ? 'full' : index - 0.5 <= props.rating ? 'half' : 'empty'"
      @click="changeRating(index)"
    />
  </div>
</template>

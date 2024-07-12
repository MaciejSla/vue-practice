<script setup lang="ts">
import { type RouteLocationAsPathGeneric, type RouteLocationAsRelativeGeneric } from 'vue-router'
import AppLink from '@/components/navigation/AppLink.vue'
import { cn } from '@/lib/utils'
const props = withDefaults(
  defineProps<{
    borderClass?: string
    iconClass?: string
    textClass?: string
    text?: string
    to: string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric
  }>(),
  {
    borderClass: 'group-hover:border-main',
    iconClass: 'group-hover:fill-main',
    textClass: 'group-hover:text-main',
    text: '',
    to: '#'
  }
)
</script>

<template>
  <AppLink :to="props.to" class="group flex items-center gap-2">
    <div
      :class="
        cn(
          'flex items-center justify-center rounded-full border-2 border-gray-200/80 p-3 transition-colors duration-300',
          props.borderClass
        )
      "
    >
      <div :class="cn('fill-gray-500 transition-colors duration-1000', props.iconClass)">
        <slot />
      </div>
    </div>
    <span :class="cn('text-gray-500 transition-colors duration-300', props.textClass)">
      {{ props.text }}
    </span>
  </AppLink>
</template>

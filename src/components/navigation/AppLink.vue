<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, type RouterLinkProps } from 'vue-router'
import type { AllowedComponentProps, ComponentCustomProps } from 'vue'
import { ExternalLinkIcon } from 'lucide-vue-next'
import { cn } from '@/lib/utils'

defineOptions({
  inheritAttrs: false
})

const props = withDefaults(
  defineProps<
    AllowedComponentProps &
      ComponentCustomProps &
      RouterLinkProps & { showIcon?: boolean; class?: string }
  >(),
  {
    showIcon: false
  }
)

const isExternalLink = computed(() => {
  return typeof props.to === 'string' && props.to.startsWith('http')
})
</script>

<template>
  <a
    v-if="isExternalLink"
    :class="cn('inline-block', props.class)"
    :href="props.to.toString()"
    target="_blank"
    rel="noopener"
  >
    <div class="flex items-center gap-1">
      <slot />
      <ExternalLinkIcon v-if="props.showIcon" class="size-3 stroke-gray-500" />
    </div>
  </a>
  <RouterLink v-else :class="props.class" :to="props.to">
    <slot />
  </RouterLink>
</template>

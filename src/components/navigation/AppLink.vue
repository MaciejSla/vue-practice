<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, type RouterLinkProps } from 'vue-router'
import type { AllowedComponentProps, ComponentCustomProps, VNodeProps } from 'vue'

defineOptions({
  inheritAttrs: false
})

const props = defineProps<
  AllowedComponentProps & ComponentCustomProps & VNodeProps & RouterLinkProps
>()

const isExternalLink = computed(() => {
  return typeof props.to === 'string' && props.to.startsWith('http')
})
</script>

<template>
  <a
    v-if="isExternalLink"
    v-bind="$attrs"
    :class="props.class"
    :href="props.to.toString()"
    target="_blank"
  >
    <slot />
  </a>
  <router-link v-else v-bind="$props">
    <slot />
  </router-link>
</template>

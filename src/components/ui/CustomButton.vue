<script setup lang="ts">
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: string
}>()
</script>

<template>
  <button
    :class="
      cn(
        'group relative w-fit overflow-hidden rounded-full bg-main px-6 py-4 font-bold text-white transition-all duration-300 ease-in-out',
        props.class
      )
    "
  >
    <div class="relative z-10 flex h-full w-full items-center justify-center">
      <slot />
    </div>
    <div
      ref="el"
      :class="`absolute left-0 top-0 z-0 h-full w-full origin-bottom scale-y-0 bg-[#da5455] transition-all duration-300 ease-in-out group-hover:scale-y-100`"
    ></div>
  </button>
</template>

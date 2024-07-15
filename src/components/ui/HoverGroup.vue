<script setup lang="ts">
import type { Component } from 'vue'

const props = withDefaults(defineProps<{ title: string; subtext: string; icon: Component }>(), {
  title: '',
  subtext: ''
})
</script>

<template>
  <div class="group flex flex-col items-start gap-8 xs:flex-row xs:items-center xs:p-4">
    <div
      class="rounded-full p-[1.4rem] ring-2 ring-gray-200 transition-all duration-300 group-hover:bg-main group-hover:ring-2 group-hover:ring-main group-hover:ring-offset-[6px]"
    >
      <component
        :is="props.icon"
        class="size-8 stroke-gray-500 transition-all duration-300 group-hover:stroke-white"
      />
    </div>
    <div class="flex max-w-[37rem] flex-col items-start gap-2">
      <h2 class="font-serif text-3xl transition-all duration-300 group-hover:text-main">
        {{ props.title }}
      </h2>
      <p class="text-gray-500">
        {{ props.subtext }}
      </p>
    </div>
  </div>
</template>

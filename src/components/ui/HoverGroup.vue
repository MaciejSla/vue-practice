<script setup lang="ts">
const { title, subtext } = withDefaults(defineProps<{ title: string; subtext: string }>(), {
  title: '',
  subtext: ''
})
</script>

<template>
  <div class="group flex items-center gap-8 xs:p-4">
    <div
      class="rounded-full p-[1.4rem] ring-2 ring-gray-200 transition-all duration-300 group-hover:bg-main group-hover:ring-2 group-hover:ring-main group-hover:ring-offset-[6px]"
    >
      <div class="size-8 fill-gray-500 transition-all duration-300 group-hover:fill-white">
        <slot />
      </div>
    </div>
    <div class="flex max-w-[37rem] flex-col items-start gap-2">
      <h2 class="font-serif text-3xl transition-all duration-300 group-hover:text-main">
        {{ title }}
      </h2>
      <p class="text-gray-500">
        {{ subtext }}
      </p>
    </div>
  </div>
</template>

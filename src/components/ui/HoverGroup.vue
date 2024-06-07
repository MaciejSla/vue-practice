<script setup>
const { title, subtext } = defineProps({
  title: {
    type: String,
    default: ''
  },
  subtext: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div :class="`group flex items-center gap-8 xs:p-4`">
    <div
      :class="`rounded-full border-none outline-amber-300 transition-all duration-300 group-hover:ring-2 group-hover:ring-amber-300 group-hover:ring-offset-[6px]`"
    >
      <div :class="`rounded-full border p-6 transition-all duration-300 group-hover:bg-amber-300`">
        <div :class="`size-8 fill-gray-500 transition-all duration-300 group-hover:fill-white`">
          <slot></slot>
        </div>
      </div>
    </div>
    <div class="flex max-w-[37rem] flex-col items-start gap-2">
      <h2 :class="`font-serif text-3xl transition-all duration-300 group-hover:text-amber-300`">
        {{ title }}
      </h2>
      <p class="text-gray-500">
        {{ subtext }}
      </p>
    </div>
  </div>
</template>

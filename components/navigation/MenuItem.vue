<script setup lang="ts">
const props = withDefaults(defineProps<{ height?: string; arrow?: boolean; to?: string }>(), {
  height: '18',
  arrow: true,
  to: '/'
})
</script>

<template>
  <!-- TODO figure out if this should be a dropdown or just a link -->
  <NuxtLink
    class="group flex w-fit items-center gap-2 fill-white px-4 text-center text-white transition-colors hover:fill-main hover:text-main"
    active-class="!fill-main !text-main"
    :to="to"
  >
    <b><slot /></b>
    <IconMenuArrow
      v-if="props.arrow"
      :height="props.height"
      class="rotate-180 transition-transform duration-200 group-hover:rotate-90"
    />
  </NuxtLink>
</template>

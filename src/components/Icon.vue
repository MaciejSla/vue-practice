<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
defineProps({
  icon: String
})
</script>

<template>
  <i class="fas">
    <FontAwesomeIcon :icon="icon" />
  </i>
</template>

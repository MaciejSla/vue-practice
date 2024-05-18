<script setup>
import { RouterLink, RouterView } from 'vue-router'
import IconPhone from './components/icons/IconPhone.vue'
import IconEnvelope from './components/icons/IconEnvelope.vue'
import IconFacebook from './components/icons/IconFacebook.vue'
import IconXTwitter from './components/icons/IconXTwitter.vue'
import IconTwitter from './components/icons/IconTwitter.vue'
import IconLinkedin from './components/icons/IconLinkedin.vue'
import IconPinterest from './components/icons/IconPinterest.vue'
import IconHeart from './components/icons/IconHeart.vue'
import IconSearch from './components/icons/IconSearch.vue'
import IconShopping from './components/icons/IconShopping.vue'
import IconCalendar from './components/icons/IconCalendar.vue'
import IconMenuArrow from './components/icons/IconMenuArrow.vue'
</script>

<template>
  <IconPhone width="32" />
  <IconEnvelope width="32" />
  <span class="flex gap-2">
    <IconFacebook width="32" class="brand-icon" />
    <IconXTwitter width="32" class="brand-icon" />
    <IconTwitter width="32" class="brand-icon" />
    <IconLinkedin width="32" class="brand-icon" />
    <IconPinterest width="32" class="brand-icon" />
  </span>
  <IconHeart width="32" />
  <IconSearch width="32" />
  <IconShopping width="32" />
  <IconCalendar width="32" />
  <IconMenuArrow width="32" class="rotate-180 transition-transform hover:rotate-90" />

  <RouterView />
</template>

<script setup>
import IconPhone from '@/components/icons/IconPhone.vue'
import IconEnvelope from '@/components/icons/IconEnvelope.vue'
import IconFacebook from '@/components/icons/IconFacebook.vue'
import IconXTwitter from '@/components/icons/IconXTwitter.vue'
import IconLinkedin from '@/components/icons/IconLinkedin.vue'
import IconPinterest from '@/components/icons/IconPinterest.vue'
import IconSearch from '@/components/icons/IconSearch.vue'
import IconShopping from '@/components/icons/IconShopping.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="grid grid-cols-3 items-center justify-items-center gap-4 p-8">
    <div class="text-md flex flex-col gap-4 fill-gray-500 text-gray-500">
      <div class="flex items-center gap-4">
        <IconPhone height="13" />
        +8812 345 678 912
      </div>
      <div class="flex items-center gap-4">
        <IconEnvelope height="13" />
        info@yourmail.com
      </div>
    </div>
    <RouterLink to="/">
      <img src="@/assets/images/logo/01.png" alt="logo full" />
    </RouterLink>
    <div class="flex gap-8 fill-gray-500">
      <span class="flex gap-2">
        <RouterLink to="/">
          <IconFacebook height="18" class="brand-icon" />
        </RouterLink>
        <RouterLink to="/">
          <IconXTwitter height="18" class="brand-icon" />
        </RouterLink>
        <RouterLink to="/">
          <IconLinkedin height="18" class="brand-icon" />
        </RouterLink>
        <RouterLink to="/">
          <IconPinterest height="18" class="brand-icon" />
        </RouterLink>
      </span>
      <IconSearch height="18" />
      <IconShopping height="18" />
    </div>
  </header>
</template>

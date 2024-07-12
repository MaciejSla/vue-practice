<script setup lang="ts">
import { IconFacebook, IconXTwitter, IconLinkedin, IconInstagram } from '../icons'
import BrandIcon from './BrandIcon.vue'
</script>

<template>
  <div class="flex flex-col">
    <div class="flex flex-wrap items-center justify-center gap-4 p-4 py-10 sm:gap-10">
      <BrandIcon
        text="Facebook"
        border-class="group-hover:border-[#3b5998]"
        icon-class="group-hover:fill-[#3b5998]"
        text-class="group-hover:text-[#3b5998]"
      >
        <IconFacebook class="size-4" />
      </BrandIcon>
      <BrandIcon
        text="X (Twitter)"
        border-class="group-hover:border-[#000000]"
        icon-class="group-hover:fill-[#000000]"
        text-class="group-hover:text-[#000000]"
      >
        <IconXTwitter class="size-3" />
      </BrandIcon>
      <BrandIcon
        text="Linkedin"
        border-class="group-hover:border-[#007bb5]"
        icon-class="group-hover:fill-[#007bb5]"
        text-class="group-hover:text-[#007bb5]"
      >
        <IconLinkedin class="size-4" />
      </BrandIcon>
      <BrandIcon
        text="Instagram"
        border-class="group-hover:border-[#e4405f]"
        icon-class="group-hover:fill-[#e4405f]"
        text-class="group-hover:text-[#e4405f]"
      >
        <IconInstagram class="size-4" />
      </BrandIcon>
    </div>
  </div>
</template>

<script setup>
import {
  IconFacebook,
  IconXTwitter,
  IconLinkedin,
  IconBriefcase,
  IconBinoculars,
  IconRocket
} from '@/components/icons'
import AnimatedAccent from '@/components/ui/AnimatedAccent.vue'
import HoverGroup from '@/components/ui/HoverGroup.vue'
</script>

<template>
  <div class="flex flex-col justify-center gap-10 px-10 py-24 lg:flex-row">
    <div class="flex flex-col items-center justify-center gap-3">
      <img src="@/assets/images/about/01.jpg" alt="about" class="rounded-full" />
      <div class="flex flex-col items-center gap-1">
        <h1 class="font-serif text-2xl xs:text-3xl">Deniyel Murchi</h1>
        <h3 class="text-gray-500">Church Pastor</h3>
      </div>
      <p class="max-w-[40rem] text-center text-gray-500 lg:max-w-[20rem]">
        Objectively streamline low-risk high-yield results whereas client-centric products.
        Objectively enable unique.
      </p>
      <div class="flex gap-2">
        <IconFacebook class="brand-icon size-4" />
        <IconXTwitter class="brand-icon size-4" />
        <IconLinkedin class="brand-icon size-4" />
      </div>
    </div>
    <div class="flex flex-col items-start gap-10 xs:px-10 lg:border-l">
      <div class="group/anim flex flex-col items-start gap-5">
        <h1 class="font-serif text-[3.5rem] leading-none">What We Do?</h1>
        <AnimatedAccent />
        <p class="max-w-[42rem] text-gray-500">
          Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Lorem ipsum dolor
          sit amet,consectetur adipiscing elit. Curabitur aliquet quam id dui posuere blandit.
        </p>
      </div>
      <div class="flex flex-col items-start gap-4">
        <HoverGroup
          title="Glorify God"
          subtext="Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a."
        >
          <IconBriefcase />
        </HoverGroup>
        <HoverGroup
          title="Love Community"
          subtext="Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a."
        >
          <IconBinoculars />
        </HoverGroup>
        <HoverGroup
          title="Believe Biblically"
          subtext="Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a."
        >
          <IconRocket />
        </HoverGroup>
      </div>
    </div>
  </div>
</template>

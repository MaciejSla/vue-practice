<script setup lang="ts">
import AnimatedAccent from '@/components/ui/AnimatedAccent.vue'
import location1 from '@/assets/images/location/01.jpg'
import { IconLocation, IconClock } from '@/components/icons'
</script>

<template>
  <div class="grid grid-cols-1 p-3 lg:grid-cols-2 lg:p-0">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10165.311226084814!2d18.30465138307265!3d50.43499449542566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47111a2db9e96373%3A0x51e5b7a7a76f0c8c!2s47-143%20Zimna%20W%C3%B3dka%2C%20Poland!5e0!3m2!1sen!2sbd!4v1720724463815!5m2!1sen!2sbd"
      style="border: 0"
      allowfullscreen
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      class="h-[25rem] w-full lg:h-full"
    ></iframe>
    <div class="flex flex-col items-start justify-center gap-9 bg-stone-950 p-10 py-20">
      <div class="group/anim flex flex-col items-start justify-center gap-5">
        <h1 class="font-serif text-3xl text-white">Contact Person</h1>
        <AnimatedAccent />
      </div>
      <div class="flex flex-wrap items-center gap-4">
        <img :src="location1" alt="location" class="shrink-0 rounded-full" />
        <div class="flex flex-col gap-4">
          <div class="flex flex-col items-start justify-center">
            <h1 class="font-serif text-xl text-white">Deniyel Murchi</h1>
            <h3 class="text-sm text-gray-500">Church Pastor</h3>
          </div>
          <div class="flex flex-col items-start justify-center text-sm text-gray-500">
            <div>
              <span class="font-bold">Tel:</span>
              +002145698
            </div>
            <div>
              <span class="font-bold">Email:</span>
              info@yourmail.com
            </div>
          </div>
        </div>
      </div>
      <div class="group/anim flex flex-col items-start justify-center gap-5">
        <h1 class="font-serif text-3xl text-white">Contact Info</h1>
        <AnimatedAccent />
      </div>
      <div class="flex flex-col gap-6">
        <div class="flex items-center gap-2">
          <IconLocation class="size-4 fill-main" />
          <span class="text-sm text-gray-500"> 47-143 Zimna Wódka, Poland </span>
        </div>
        <div class="flex items-start gap-2">
          <IconClock class="size-4 fill-main" />
          <div class="flex flex-col items-start justify-start text-sm text-gray-500">
            <span>
              <b>Monday-Thursday:</b>
              06:00 am - 09:00 pm
            </span>
            <span>
              <b>Friday:</b>
              10:30 am - 05:30 pm
            </span>
            <span>
              <b>Saturday:</b>
              10:30 am - 05:30 pm
            </span>
            <span>
              <b>Sunday:</b>
              Closed
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

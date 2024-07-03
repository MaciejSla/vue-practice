<script setup>
import AnimatedAccent from '@/components/ui/AnimatedAccent.vue'
import ScheduleCounter from '@/components/home/ScheduleCounter.vue'
import { IconSunrise, IconSunset } from '@/components/icons'
import { getSunrise, getSunset } from 'sunrise-sunset-js'
import { useDateFormat } from '@vueuse/core'

const getTime = (date) => useDateFormat(date, 'h.mm A').value

const sunset = getTime(getSunset(50.434288, 18.316142))
const sunrise = getTime(getSunrise(50.434288, 18.316142))

const events = [
  {
    title: 'Christmas',
    date: '2024-12-25 18:30'
  },
  {
    title: 'Holy Cross Day',
    date: '2024-09-14 18:30'
  },
  {
    title: "St. Patrick's Day",
    date: '2025-03-17 18:30'
  },
  {
    title: 'Candlemas',
    date: '2025-02-25 18:30'
  },
  {
    title: 'Christmas Eve',
    date: '2024-12-24 18:30'
  },
  {
    title: 'Ascension Day',
    date: '2025-05-29 18:30'
  }
]
</script>

<template>
  <div
    class="bg-[url(@/assets/images/bg-img/01.jpg)] bg-cover bg-center bg-no-repeat p-6 pt-20 text-white bg-blend-overlay"
  >
    <div class="flex flex-wrap items-center justify-center gap-10 lg:items-start">
      <div class="group/anim flex flex-col justify-center gap-5 xl:max-w-96">
        <h1 class="text-adaptive-xl font-serif xl:text-4xl">Festival Schedule</h1>
        <AnimatedAccent reverse />
        <p class="max-w-[42rem]">
          Dramatically strategize economically sound action items for e-business niches. Quickly
          re-engineer 24/365 potentialities before.
        </p>
        <p class="max-w-[42rem]">
          Holisticly extend sticky partnerships and cross functional markets. Monotonectally.
        </p>
      </div>
      <div class="flex flex-col gap-8 max-xs:w-full">
        <div
          class="grid w-full grid-cols-1 place-content-center items-center justify-center gap-6 rounded border-2 border-main bg-white/10 p-3 xs:grid-cols-2 sm:w-auto"
        >
          <ScheduleCounter v-for="event in events" :key="event.title" :event="event" />
        </div>
        <div class="grid grid-cols-1 gap-8 xs:grid-cols-2">
          <div class="flex items-center justify-around gap-4 rounded border-2 border-main p-4">
            <IconSunrise class="size-16 flex-shrink-0 stroke-[#ffcb08]" />
            <div class="flex flex-col">
              <h2 class="text-adaptive-xl font-serif text-main transition-transform xl:text-4xl">
                Sunrise
              </h2>
              <p class="text-[#ffcb08]">{{ sunrise }}</p>
            </div>
          </div>
          <div class="flex items-center justify-around gap-4 rounded border-2 border-main p-4">
            <IconSunset class="size-16 flex-shrink-0 stroke-[#f57002]" />
            <div class="flex flex-col">
              <h2 class="text-adaptive-xl font-serif text-main xl:text-4xl">Sunset</h2>
              <p class="text-[#f57002]">{{ sunset }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

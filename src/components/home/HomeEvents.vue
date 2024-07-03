<script setup>
import AnimatedAccent from '../ui/AnimatedAccent.vue'
import event1 from '@/assets/images/event/01.jpg'
import event2 from '@/assets/images/event/02.jpg'
import event3 from '@/assets/images/event/03.jpg'

import { useDateFormat } from '@vueuse/core'
import { IconClock, IconLocation, IconComments, IconShare } from '../icons'

const getDay = (date) => useDateFormat(date, 'DD').value
const getMonth = (date) => useDateFormat(date, 'MMM').value
const getHour = (date) => useDateFormat(date, 'hha').value

const events = [
  {
    title: 'Open Rededication',
    start: '2024-11-09 10:00:00',
    end: '2024-11-09 12:00:00',
    location: 'PO Box 16122, Collins Street',
    image: event1,
    comments: 10,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore consectetur adipisicing elit'
  },
  {
    title: 'Big Event This Year',
    start: '2024-11-09 12:00:00',
    end: '2024-11-09 13:00:00',
    location: 'PO Box 16122, Collins Street',
    image: event2,
    comments: 8,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore consectetur adipisicing elit'
  },
  {
    title: 'Church Event',
    start: '2024-11-09 16:00:00',
    end: '2024-11-09 18:00:00',
    location: 'PO Box 16122, Collins Street',
    image: event3,
    comments: 5,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore consectetur adipisicing elit'
  }
]
</script>

<template>
  <div class="my-16 flex flex-col items-center gap-16 p-4">
    <div class="group/anim flex flex-col items-center justify-center gap-5 text-center">
      <h1 class="font-serif text-5xl">Recent Events</h1>
      <AnimatedAccent reverse />
      <p class="max-w-[42rem] text-gray-500">
        Enthusiastically underwhelm quality benefits rather than professional outside the box
        thinking. Distinctively network highly efficient leadership skills
      </p>
    </div>
    <div class="flex flex-wrap justify-center gap-6">
      <div
        v-for="(event, index) in events"
        :key="index"
        class="group flex w-full flex-col items-start justify-center gap-3 sm:w-[18rem] md:w-[22rem]"
      >
        <div class="relative w-full overflow-hidden">
          <img
            :src="event.image"
            :alt="event.title"
            class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.2]"
          />
          <div
            class="absolute left-2 top-2 flex size-14 flex-col items-center justify-center rounded-sm bg-black/65 outline outline-2 outline-main"
          >
            <span class="font-serif text-xl text-main">
              {{ getDay(event.start) }}
            </span>
            <span class="text-sm font-normal text-white">
              {{ getMonth(event.start) }}
            </span>
          </div>
        </div>
        <h3 class="font-serif text-2xl transition-colors group-hover:text-main">
          {{ event.title }}
        </h3>
        <div class="flex w-full justify-between divide-x divide-gray-200">
          <div class="flex flex-col items-start justify-center gap-3">
            <div class="flex items-center gap-2">
              <IconClock class="size-4 fill-gray-500" />
              <span class="text-sm font-normal text-gray-500">
                {{ getHour(event.start) }} - {{ getHour(event.end) }}
              </span>
            </div>
            <div class="flex items-center gap-2">
              <IconLocation class="size-4 fill-gray-500" />
              <span class="text-sm font-normal text-gray-500">
                {{ event.location }}
              </span>
            </div>
          </div>
          <div class="relative flex flex-col items-center justify-center gap-3 px-5 py-2">
            <IconComments class="size-4 fill-gray-500" />
            <IconShare class="size-4 fill-gray-500" />
            <div
              class="absolute right-0 top-0 flex size-5 items-center justify-center rounded-full bg-black text-[0.6rem] text-white transition-colors group-hover:bg-main"
            >
              {{ event.comments }}
            </div>
          </div>
        </div>
        <p class="break-words text-sm text-gray-500">
          {{ event.description }}
        </p>
      </div>
    </div>
  </div>
</template>

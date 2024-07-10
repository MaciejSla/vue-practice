<script setup lang="ts">
import { useDateFormat } from '@/lib/utils'

const getDate = (date: string) => useDateFormat(date, 'DD MMM YYYY').value

const sermons = [
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
    image: '/images/sermon/01.jpg',
    date: '2024-7-25 18:30',
    user: 'Admin'
  },
  {
    title: 'Seamlessly embrace distributed portals whereas maintainable platforms.',
    image: '/images/sermon/02.jpg',
    date: '2024-12-25 18:30',
    user: 'Admin'
  },
  {
    title: 'Embrace Seamlessly distributed portals whereas maintainable.',
    image: '/images/sermon/03.jpg',
    date: '2024-12-25 18:30',
    user: 'Admin'
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur Atque, soluta.',
    image: '/images/sermon/04.jpg',
    date: '2024-12-25 18:30',
    user: 'Admin'
  }
]
</script>

<template>
  <div class="my-16 flex flex-col items-center justify-center gap-10">
    <div class="group/anim flex flex-col items-center justify-center gap-5 text-center">
      <h1 class="font-serif text-5xl">Latest Sermons</h1>
      <AnimatedAccent reverse />
      <p class="max-w-[42rem] text-gray-500">
        Proin Eget Tortor Risus. Cras ultricies ligula sed magna dictum porta. Vivamus suscipit
        tortor eget felis porttitor volutpat.
      </p>
    </div>
    <div class="grid grid-cols-1 gap-8 p-10 lg:grid-cols-2">
      <div
        v-for="sermon in sermons"
        :key="sermon.title"
        class="group flex flex-col items-center gap-6 rounded border p-6 xs:flex-row lg:w-[35rem]"
      >
        <div class="size-40 shrink-0 overflow-hidden rounded-full">
          <NuxtImg
            :src="sermon.image"
            :alt="sermon.title"
            class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-125"
          />
        </div>
        <div class="flex flex-col items-center gap-4 text-center xs:items-start xs:text-start">
          <h2
            class="line-clamp-2 max-w-[30rem] font-serif text-[1.3rem] transition-colors duration-300 group-hover:text-main"
          >
            {{ sermon.title }}
          </h2>
          <div class="flex items-center gap-4">
            <p class="flex items-center gap-2 text-gray-500">
              <IconCalendar class="size-4 fill-gray-500" />
              {{ getDate(sermon.date) }}
            </p>
            <p class="flex items-center gap-2 text-gray-500">
              <IconUser class="size-4 fill-gray-500" />
              {{ sermon.user }}
            </p>
          </div>
          <div class="flex items-center gap-2">
            <IconVideo class="brand-icon size-4" />
            <IconHeadphones class="brand-icon size-4" />
            <IconFile class="brand-icon size-4" />
            <IconImage class="brand-icon size-4" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

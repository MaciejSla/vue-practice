<script setup lang="ts">
import sermon1 from '@/assets/images/sermon/01.jpg'
import sermon2 from '@/assets/images/sermon/02.jpg'
import sermon3 from '@/assets/images/sermon/03.jpg'
import sermon4 from '@/assets/images/sermon/04.jpg'
import {
  IconCalendar,
  IconUser,
  IconVideo,
  IconHeadphones,
  IconFile,
  IconImage
} from '@/components/icons'
import { useDateFormat } from '@/lib/utils'

const getDate = (date: string) => useDateFormat(date, 'DD MMM YYYY').value

const sermons = [
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
    image: sermon1,
    date: '2024-7-25 18:30',
    user: 'Admin'
  },
  {
    title: 'Seamlessly embrace distributed portals whereas maintainable platforms.',
    image: sermon2,
    date: '2024-12-25 18:30',
    user: 'Admin'
  },
  {
    title: 'Embrace Seamlessly distributed portals whereas maintainable.',
    image: sermon3,
    date: '2024-12-25 18:30',
    user: 'Admin'
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur Atque, soluta.',
    image: sermon4,
    date: '2024-12-25 18:30',
    user: 'Admin'
  }
]
</script>

<template>
  <div class="grid grid-cols-1 gap-8 p-3 xs:p-10 lg:grid-cols-2">
    <div
      v-for="sermon in sermons"
      :key="sermon.title"
      class="group flex flex-col items-center gap-6 rounded border p-6 sm:flex-row lg:w-[28rem] xl:w-[36rem]"
    >
      <div class="size-40 shrink-0 overflow-hidden rounded-full">
        <img
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
</template>

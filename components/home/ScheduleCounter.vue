<script setup lang="ts">
import { useDateFormat } from '@/lib/utils'

const { event } = defineProps<{ event: { title: string; date: string } }>()

const getDate = (date: string) => useDateFormat(date, 'D MMMM').value
const getTime = (date: string) => useDateFormat(date, 'h:mm a').value

const date = new Date(event.date)

const timeLeft = useState('timeLeft', () => date.getTime() - new Date().getTime())
const days = computed(() => Math.floor(timeLeft.value / (1000 * 60 * 60 * 24)))
const hours = computed(() =>
  Math.floor((timeLeft.value % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
)

watch(
  timeLeft,
  (diff) => {
    if (diff < 0) {
      timeLeft.value = 0
      return
    }
    setTimeout(
      () => {
        timeLeft.value = date.getTime() - new Date().getTime()
      },
      1000 * 60 * 10
    )
  },
  { immediate: true }
)
</script>

<template>
  <div
    class="flex h-full flex-wrap items-center justify-around gap-6 rounded border border-gray-500 p-4"
  >
    <div class="flex flex-col gap-2">
      <h3 class="font-serif text-xl">{{ event.title }}</h3>
      <p class="text-sm">{{ getDate(event.date) }} at {{ getTime(event.date) }}</p>
    </div>
    <div class="flex gap-2">
      <div class="flex size-[4.5rem] flex-col items-center justify-center rounded-full border-2">
        <h3 class="font-bold text-main">{{ days }}</h3>
        <p class="font-serif text-sm capitalize text-white">Days</p>
      </div>
      <div class="flex size-[4.5rem] flex-col items-center justify-center rounded-full border-2">
        <h3 class="font-bold text-main">{{ hours }}</h3>
        <p class="font-serif text-sm capitalize text-white">Hours</p>
      </div>
    </div>
  </div>
</template>

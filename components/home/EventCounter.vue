<script setup lang="ts">
const props = defineProps<{ date: Date }>()

const timeLeft = useState('timeLeft', () => props.date.getTime() - new Date().getTime())
const days = computed(() => Math.floor(timeLeft.value / (1000 * 60 * 60 * 24)))
const hours = computed(() =>
  Math.floor((timeLeft.value % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
)
const minutes = computed(() => Math.floor((timeLeft.value % (1000 * 60 * 60)) / (1000 * 60)))
const seconds = computed(() => Math.floor((timeLeft.value % (1000 * 60)) / 1000))

watch(
  timeLeft,
  (diff) => {
    if (diff < 0) {
      timeLeft.value = 0
      return
    }
    setTimeout(() => {
      timeLeft.value = props.date.getTime() - new Date().getTime()
    }, 1000)
  },
  { immediate: true }
)
</script>

<template>
  <div class="flex flex-wrap justify-center gap-4">
    <CounterElement :count="days" unit="days" />
    <CounterElement :count="hours" unit="hours" />
    <CounterElement :count="minutes" unit="minutes" />
    <CounterElement :count="seconds" unit="seconds" />
  </div>
</template>

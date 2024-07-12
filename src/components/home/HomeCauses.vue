<script setup lang="ts">
import AnimatedAccent from '@/components/ui/AnimatedAccent.vue'
import CustomButton from '@/components/ui/CustomButton.vue'
import { IconHeart } from '@/components/icons'
import { Progress } from '@/components/ui/progress'
import { scrollToTop } from '@/lib/utils'
import CausesElement from '@/components/home/CausesElement.vue'
import { computed } from 'vue'

const cause = {
  goal: 2000,
  donated: 1650,
  donors: 10,
  endDate: '2024-09-30'
}
// TODO add back toFixed(1) at the end if this doesn't work
const percent = computed(() => (cause.donated / cause.goal) * 100)
const left = computed(() => cause.goal - cause.donated)
const days = computed(() =>
  Math.floor((new Date(cause.endDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))
)
</script>

<template>
  <div
    class="flex flex-col items-center justify-center gap-10 bg-black/40 bg-[url(@/assets/images/bg-img/02.jpg)] bg-cover bg-center bg-no-repeat p-8 py-24 font-serif text-white bg-blend-overlay"
  >
    <div class="group/anim flex flex-col items-center justify-center gap-5 text-center">
      <h1 class="text-5xl">Urgent Causes</h1>
      <AnimatedAccent reverse />
    </div>
    <div class="flex flex-wrap items-center justify-center gap-10">
      <CausesElement :top="`${percent}%`" bottom="Funded" />
      <CausesElement :top="`$ ${cause.donated}`" bottom="Donated" />
      <CausesElement :top="`$ ${cause.goal}`" bottom="Goal" />
      <CausesElement :top="cause.donors" bottom="Donors" />
      <CausesElement :top="days" bottom="Days to go" />
    </div>
    <div class="flex w-full flex-col items-center justify-center gap-8">
      <h1 class="text-center text-[calc(1.3125rem+0.75vw)] lg:text-3xl">
        <span class="text-main">{{ percent }}% Donated</span>
        <span> / ${{ left }} To Go</span>
      </h1>
      <Progress :model-value="percent" class="h-5 max-w-[43rem]" />
      <CustomButton @click="scrollToTop">
        <span class="flex items-center justify-center gap-2 font-sans">
          DONATE <IconHeart class="size-4 fill-white" />
        </span>
      </CustomButton>
    </div>
  </div>
</template>

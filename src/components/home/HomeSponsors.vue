<script setup lang="ts">
import sponsor1 from '@/assets/images/sponsor/01.png'
import sponsor2 from '@/assets/images/sponsor/02.png'
import sponsor3 from '@/assets/images/sponsor/03.png'
import sponsor4 from '@/assets/images/sponsor/04.png'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

const sponsors = [
  { src: sponsor1, alt: 'Sponsor 1' },
  { src: sponsor2, alt: 'Sponsor 2' },
  { src: sponsor3, alt: 'Sponsor 3' },
  { src: sponsor4, alt: 'Sponsor 4' }
]

const dupedSponsors = [...sponsors, ...sponsors]
</script>

<template>
  <div class="flex select-none items-center justify-center p-10">
    <Carousel
      :opts="{ loop: true, align: 'start' }"
      :plugins="[Autoplay({ delay: 10000 })]"
      class="max-w-[70rem]"
    >
      <CarouselContent>
        <CarouselItem
          class="flex items-center justify-center xs:basis-1/2 sm:basis-1/4"
          v-for="sponsor in dupedSponsors"
          :key="sponsor.alt"
        >
          <img
            :src="sponsor.src"
            :alt="sponsor.alt"
            class="opacity-50 grayscale transition-all duration-300 ease-in-out hover:opacity-100 hover:grayscale-0"
          />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  </div>
</template>

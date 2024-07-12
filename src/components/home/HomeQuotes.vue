<script setup lang="ts">
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { IconQuoteLeft } from '@/components/icons'
import Autoplay from 'embla-carousel-autoplay'

const exampleQuote = {
  from: 'Prophat',
  text: 'Hazrat Mohammod (s) Said "It is Better For Any Of You To Carry A Load Of Firewood On His Own Back Than To Beg From Someone Else"',
  subtitle: 'Riyadh-Us-Saleheen, Chapter 59, hadith 540'
}

const quotes = [exampleQuote, exampleQuote]
</script>

<template>
  <div
    class="flex select-none flex-col items-center justify-center overflow-hidden bg-black/30 bg-[url(@/assets/images/bg-img/03.jpg)] bg-cover bg-center bg-no-repeat px-5 py-20 bg-blend-overlay xs:p-20"
  >
    <Carousel :opts="{ loop: true }" :plugins="[Autoplay({ delay: 10000 })]" class="max-w-[70rem]">
      <CarouselContent>
        <CarouselItem class="w-full" v-for="quote in quotes" :key="quote.subtitle">
          <div class="flex flex-col items-center justify-center gap-6 xs:flex-row">
            <div
              class="relative flex size-48 shrink-0 items-center justify-center rounded-full bg-main"
            >
              <h3
                class="line-clamp-1 flex flex-col gap-2 p-2 text-center font-serif text-3xl text-white"
              >
                Quote from
                <span class="line-clamp-1 font-sans">{{ quote.from }}</span>
              </h3>
              <div
                class="absolute right-2 top-4 flex size-8 items-center justify-center rounded-full bg-black text-main"
              >
                <IconQuoteLeft class="size-5 fill-main" />
              </div>
            </div>
            <div class="flex flex-col gap-4 overflow-hidden px-6">
              <p
                class="break-all text-2xl capitalize text-white transition-all duration-300 ease-in-out"
              >
                {{ quote.text }}
              </p>
              <p
                class="break-all font-serif text-xl font-normal text-white transition-all duration-300 ease-in-out"
              >
                {{ quote.subtitle }}
              </p>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  </div>
</template>

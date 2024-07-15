<script setup lang="ts">
import AnimatedAccent from '@/components/ui/AnimatedAccent.vue'
import footer from '@/assets/images/footer/about/01.jpg'
import post1 from '@/assets/images/footer/post/01.jpg'
import post2 from '@/assets/images/footer/post/02.jpg'
import post3 from '@/assets/images/footer/post/03.jpg'
import AppLink from '@/components/navigation/AppLink.vue'
import { CalendarIcon } from 'lucide-vue-next'
import { useDateFormat } from '@/lib/utils'

const getDate = (date: string) => useDateFormat(date, 'DD MMMM, YYYY').value

const tags = [
  { name: 'Christian' },
  { name: 'Hindu' },
  { name: 'Magazine' },
  { name: 'Muslims' },
  { name: 'News' },
  { name: 'SEO' },
  { name: 'Themes' },
  { name: 'WordPress' },
  { name: 'Web Development' },
  { name: 'Design' },
  { name: 'Photography' },
  { name: 'Media' }
]

const posts = [
  {
    title: 'Collaboratively Coordinate.',
    image: post1,
    date: '2024-06-09'
  },
  {
    title: 'Quickly Develop Exceptional',
    image: post2,
    date: '2023-12-10'
  },
  {
    title: 'Why You Need Prayerzon WordPress Theme?',
    image: post3,
    date: '2023-11-09'
  }
]

const links = [
  {
    text: 'Log in',
    url: '#'
  },
  {
    text: 'Entries RSS',
    url: '#'
  },
  {
    text: 'Comments RSS',
    url: '#'
  },
  {
    text: 'WordPress.org',
    url: 'https://wordpress.org'
  },
  {
    text: 'Google',
    url: 'https://google.com'
  },
  {
    text: 'Template',
    url: '#'
  }
]
</script>

<template>
  <div class="flex items-center justify-center bg-stone-950 p-4 py-16">
    <div
      class="grid grid-cols-1 items-start gap-6 xs:max-w-[30rem] xs:grid-cols-2 sm:max-w-[37rem] md:max-w-[45rem] lg:max-w-[61rem] xl:max-w-[75rem] xl:grid-cols-4"
    >
      <div class="flex flex-col items-start justify-center gap-8">
        <div class="group/anim flex flex-col items-start justify-center gap-4 text-center">
          <h1 class="font-serif text-3xl text-white">About prayerzon</h1>
          <AnimatedAccent />
        </div>
        <div class="flex flex-col gap-3">
          <img :src="footer" alt="footer" class="h-full w-full object-cover" />
          <p class="text-sm text-white/40">
            Dramatically strategize economically sound action items for e-business niches. Quickly
            re-engineer 24/365 potentialities before.
          </p>
        </div>
      </div>
      <div class="flex flex-col items-start justify-center gap-8">
        <div class="group/anim flex flex-col items-start justify-center gap-4 text-center">
          <h1 class="font-serif text-3xl text-white">Post Tag</h1>
          <AnimatedAccent />
        </div>
        <div class="flex flex-wrap gap-3">
          <AppLink
            v-for="tag in tags"
            :key="tag.name"
            class="flex items-center justify-center rounded bg-white px-2 py-1 text-sm transition-colors duration-300 hover:bg-main"
            to="#"
          >
            {{ tag.name }}
          </AppLink>
        </div>
      </div>
      <div class="flex flex-col items-start justify-center gap-8">
        <div class="group/anim flex flex-col items-start justify-center gap-4 text-center">
          <h1 class="font-serif text-3xl text-white">Recent Post</h1>
          <AnimatedAccent />
        </div>
        <div class="flex flex-col gap-3">
          <AppLink
            v-for="post in posts"
            :key="post.title"
            class="group flex items-start justify-start gap-3"
            to="#"
          >
            <div class="relative size-20 shrink-0 overflow-hidden">
              <img
                :src="post.image"
                alt="post"
                class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-125"
              />
            </div>
            <div class="flex flex-col items-start justify-center gap-1">
              <h3
                class="line-clamp-1 font-serif text-white/80 transition-colors duration-300 group-hover:text-main"
              >
                {{ post.title }}
              </h3>
              <p class="flex items-center gap-1 text-sm text-white/40">
                <CalendarIcon class="size-4 stroke-[#6d6c6b]" />
                {{ getDate(post.date) }}
              </p>
            </div>
          </AppLink>
        </div>
      </div>
      <div class="flex flex-col items-start justify-center gap-8">
        <div class="group/anim flex flex-col items-start justify-center gap-4 text-center">
          <h1 class="font-serif text-3xl text-white">Useful Links</h1>
          <AnimatedAccent />
        </div>
        <div class="flex flex-col gap-3">
          <AppLink
            v-for="link in links"
            :key="link.text"
            class="text-white/40 transition-colors duration-300 hover:text-main"
            :to="link.url"
          >
            {{ link.text }}
          </AppLink>
        </div>
      </div>
    </div>
  </div>
</template>

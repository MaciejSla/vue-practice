<script setup lang="ts">
import { Search } from 'lucide-vue-next'
import { Input } from '@/components/ui/input'
import CustomButton from '@/components/ui/CustomButton.vue'
import AppLink from '@/components/navigation/AppLink.vue'
import errorImg from '@/assets/images/404.png'
</script>

<template>
  <div class="flex w-full items-end justify-center bg-main p-6">
    <div class="relative flex w-full items-center justify-center pt-[16.6rem]">
      <div
        class="flex w-full max-w-[48rem] flex-col items-center justify-center gap-4 bg-white p-10"
      >
        <h1
          class="font-serif text-[calc(2.125rem+10.5vw)] text-main xl:text-[11rem]"
          style="line-height: 1"
        >
          404
        </h1>
        <div class="flex flex-col items-center justify-center gap-2 p-2 text-center">
          <h3 class="text-[calc(1.3125rem+0.75vw)] font-bold text-muted-foreground lg:text-3xl">
            SOMETHING WENT WRONG
          </h3>
          <p class="text-sm">
            The page you are looking for was moved, removed, renamed or might have never existed.
          </p>
        </div>
        <div class="relative w-full max-w-sm items-center">
          <Input id="search" type="text" placeholder="Search..." class="pl-10" />
          <span class="absolute inset-y-0 start-0 flex items-center justify-center px-2">
            <Search class="size-6 text-muted-foreground" />
          </span>
        </div>
        <AppLink to="/">
          <CustomButton>BACK TO HOME</CustomButton>
        </AppLink>
      </div>
      <div class="absolute top-0">
        <img :src="errorImg" alt="Error guy" />
      </div>
    </div>
  </div>
</template>

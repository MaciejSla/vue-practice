<script setup lang="ts">
import { RouterView, useRoute, useRouter } from 'vue-router'
import NavigationBar from '@/components/navigation/NavigationBar.vue'
import { onMounted, ref, watch } from 'vue'
import LoadingScreen from '@/components/LoadingScreen.vue'
import Toaster from '@/components/ui/toast/Toaster.vue'
import PageFooter from '@/components/navigation/footer/PageFooter.vue'
import AppLink from '@/components/navigation/AppLink.vue'

const isLoading = ref(true)

const route = useRoute()
const router = useRouter()

console.log(router.options.routes)

watch(route, () => {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
  }, 500)
})

// maybe useful later?
onMounted(() => {
  // isLoading.value = false
  setTimeout(() => {
    isLoading.value = false
  }, 1000)
})
</script>

<template>
  <LoadingScreen :is-loading="isLoading">
    <div class="absolute w-full">
      <NavigationBar />
      <div class="flex w-full items-center justify-center">
        <div
          class="flex w-full max-w-[74rem] items-center justify-between p-3 py-6 xs:p-8"
          v-if="route.name != 'home'"
        >
          <h1 class="font-serif text-[calc(1.35rem+1.2vw)] capitalize xl:text-[2.25rem]">
            {{ route.name }}
          </h1>
          <div class="flex items-center gap-2">
            <AppLink to="/" class="transition-colors duration-300 hover:text-main">Home</AppLink>
            /
            <div class="capitalize">{{ route.name }}</div>
          </div>
        </div>
      </div>
      <RouterView />
      <PageFooter />
    </div>
  </LoadingScreen>
  <Toaster />
</template>

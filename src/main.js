import './assets/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import PrayerZone from '@/presets/PrayerZone'
import Image from 'primevue/image'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  unstyled: true,
  pt: PrayerZone
})
app.component('GalleryImage', Image)

app.mount('#app')

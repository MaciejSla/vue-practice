<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useFetch } from '@vueuse/core'
import { computed } from 'vue'
import { ref } from 'vue'
import { watchOnce } from '@vueuse/core'
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import {
  NumberField,
  NumberFieldContent,
  NumberFieldDecrement,
  NumberFieldIncrement,
  NumberFieldInput
} from '@/components/ui/number-field'
import { Input } from '@/components/ui/input'
import { getDiscountedPrice, useCartStore } from '@/stores/cart'
import StarRating from '@/components/ui/StarRating.vue'
import CustomButton from '@/components/ui/CustomButton.vue'

const emblaMainApi = ref<CarouselApi>()
const emblaThumbnailApi = ref<CarouselApi>()
const selectedIndex = ref(0)

function onSelect() {
  if (!emblaMainApi.value || !emblaThumbnailApi.value) return
  selectedIndex.value = emblaMainApi.value.selectedScrollSnap()
  emblaThumbnailApi.value.scrollTo(emblaMainApi.value.selectedScrollSnap())
}

function onThumbClick(index: number) {
  if (!emblaMainApi.value || !emblaThumbnailApi.value) return
  emblaMainApi.value.scrollTo(index)
}

function thumbNext() {
  if (!emblaMainApi.value) return
  emblaMainApi.value.scrollNext()
}

function thumbPrev() {
  if (!emblaMainApi.value) return
  emblaMainApi.value.scrollPrev()
}

watchOnce(emblaMainApi, (emblaMainApi) => {
  if (!emblaMainApi) return

  onSelect()
  emblaMainApi.on('select', onSelect)
  emblaMainApi.on('reInit', onSelect)
})

type ProductReview = {
  rating: number
  comment: string
  date: Date
  reviewerName: string
  reviewerEmail: string
  image?: string
}

type StoreProduct = {
  id: number
  title: string
  description: string
  images: string[]
  price: number
  discountPercentage: number
  rating: number
  reviews: ProductReview[]
  thumbnail: string
}

const route = useRoute()
const { data } = useFetch(
  `https://dummyjson.com/products/${route.params.id}?select=title,description,images,price,discountPercentage,rating,reviews,thumbnail`
)
  .get()
  .json<StoreProduct>()

const formattedReviews = computed(() =>
  data.value?.reviews.map((review: ProductReview) => ({
    rating: review.rating,
    comment: review.comment,
    date: review.date,
    reviewerName: review.reviewerName,
    reviewerEmail: review.reviewerEmail,
    image: `https://dummyjson.com/icon/${review.reviewerEmail}/150`
  }))
)

const images = computed(() => {
  if (!data.value) return []
  if (data.value.images.length > 3) return data.value.images
  let images = data.value.images
  while (images.length <= 3) {
    images = images.concat(data.value.images)
  }
  return images
})

const sizes = ['S', 'M', 'L', 'XL', 'XXL']
const colors = ['Red', 'Green', 'Blue', 'Yellow', 'Black']

const amount = ref(1)
const cartStore = useCartStore()

const addToCart = () => {
  cartStore.addProduct(
    {
      id: data?.value?.id!,
      title: data?.value?.title!,
      price: data?.value?.price!,
      discountPercentage: data?.value?.discountPercentage!,
      thumbnail: data?.value?.thumbnail!,
      description: data?.value?.description!
    },
    amount.value
  )
  amount.value = 1
}
</script>

<template>
  <div class="flex justify-center">
    <div
      class="flex w-full max-w-[40rem] flex-col items-center justify-between gap-10 xs:p-4 md:max-w-[74rem]"
    >
      <div class="flex flex-col gap-4 border p-4 md:flex-row">
        <div class="flex w-full flex-col items-center sm:w-auto">
          <Carousel
            class="relative w-full max-w-[22rem]"
            @init-api="(val) => (emblaMainApi = val)"
            :opts="{ loop: true }"
          >
            <CarouselContent>
              <CarouselItem v-for="(image, index) in images" :key="index">
                <div class="p-1">
                  <div class="flex aspect-square items-center justify-center">
                    <img :src="image" :alt="data?.title" class="h-full w-full object-contain" />
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
          <Carousel
            class="relative w-full max-w-[15rem]"
            @init-api="(val) => (emblaThumbnailApi = val)"
            :opts="{ loop: true }"
          >
            <CarouselContent class="ml-0 flex">
              <CarouselItem
                v-for="(image, index) in images"
                :key="index"
                class="basis-1/2 cursor-pointer pl-0 xs:basis-1/3"
                @click="onThumbClick(index)"
              >
                <div class="p-1" :class="index === selectedIndex ? '' : 'opacity-50'">
                  <div class="flex aspect-square items-center justify-center">
                    <img :src="image" :alt="data?.title" class="h-full w-full object-contain" />
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious @click="thumbPrev" />
            <CarouselNext @click="thumbNext" />
          </Carousel>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="font-serif text-[calc(1.3125rem+0.75vw)] xl:text-3xl">{{ data?.title }}</h3>
          <div class="flex items-center gap-1">
            <StarRating :rating="data?.rating" class="size-5" />
            <span class="text-sm text-gray-500"> ({{ formattedReviews?.length }} reviews) </span>
          </div>
          <div class="font-serif text-[calc(1.3125rem+0.75vw)] xl:text-3xl">
            $ {{ getDiscountedPrice(data?.price!, data?.discountPercentage!) }}
          </div>
          <h4 class="font-serif text-lg">Product Description</h4>
          <p class="max-w-[20rem] text-sm text-gray-500">
            {{ data?.description }}
          </p>
          <div class="grid grid-cols-2 gap-4">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Size" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem v-for="size in sizes" :key="size" :value="size">
                    {{ size }}
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Color" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem v-for="color in colors" :key="color" :value="color">
                    {{ color }}
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <NumberField
              :min="1"
              :default-value="amount"
              :model-value="amount"
              @update:model-value="
                (v) => {
                  if (v) {
                    amount = v
                  } else {
                    amount = 1
                  }
                }
              "
              class="max-w-32"
            >
              <NumberFieldContent>
                <NumberFieldDecrement />
                <NumberFieldInput />
                <NumberFieldIncrement />
              </NumberFieldContent>
            </NumberField>
            <Input placeholder="Enter Discount Code" />
          </div>
          <CustomButton class="rounded-md" @click="addToCart"> ADD TO CART </CustomButton>
        </div>
      </div>
      <div v-for="review in formattedReviews" :key="review.date.toString()">
        <img :src="review.image" :alt="review.reviewerName" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// UI
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import StarRating from '@/components/ui/StarRating.vue'
import CustomButton from '@/components/ui/CustomButton.vue'
import { ProductCarousel, ProductReviewForm } from '@/components/products'

// Functional
import { useRoute } from 'vue-router'
import { useFetch } from '@vueuse/core'
import { computed, ref } from 'vue'
import { getDiscountedPrice, useCartStore } from '@/stores/cart'
import { useDateFormat } from '@/lib/utils'

const getFormattedDate = (date: string | Date) => useDateFormat(date, 'MMMM DD, YYYY').value
const getFormattedTime = (date: string | Date) => useDateFormat(date, 'h:mm a').value

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
      class="flex w-full max-w-[40rem] flex-col items-center justify-between gap-10 xs:p-4 md:max-w-[60rem]"
    >
      <div class="flex w-full flex-col items-center gap-10 rounded-md border p-4 md:flex-row">
        <ProductCarousel :images="images" :title="data?.title" />
        <div class="flex flex-col gap-2">
          <h3 class="font-serif text-[calc(1.3125rem+0.75vw)] xl:text-3xl">{{ data?.title }}</h3>
          <div class="flex items-center gap-1">
            <StarRating :rating="data?.rating" class="size-5" />
            <span class="text-sm text-gray-500"> ({{ formattedReviews?.length }} reviews) </span>
          </div>
          <div class="flex items-center gap-3">
            <div class="font-serif text-[calc(1.3125rem+0.75vw)] xl:text-3xl">
              $ {{ getDiscountedPrice(data?.price!, data?.discountPercentage!) }}
            </div>
            <div
              class="font-serif text-[calc(1.3125rem+0.75vw)] text-black/60 line-through xl:text-3xl"
            >
              $ {{ data?.price }}
            </div>
          </div>
          <h4 class="font-serif text-lg">Product Description</h4>
          <p class="text-sm text-gray-500">
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
      <Tabs default-value="reviews" class="w-full rounded-md border">
        <TabsList class="h-14 p-0">
          <TabsTrigger
            value="description"
            class="h-14 bg-white px-8 text-lg text-black data-[state=active]:bg-main data-[state=active]:text-white"
          >
            Description
          </TabsTrigger>
          <TabsTrigger
            value="reviews"
            class="h-14 bg-white px-8 text-lg text-black data-[state=active]:bg-main data-[state=active]:text-white"
          >
            Reviews {{ formattedReviews?.length }}
          </TabsTrigger>
        </TabsList>
        <TabsContent value="description">
          <div class="flex flex-col gap-10 p-6 text-black/70">
            <p>{{ data?.description }}</p>
            <div class="flex flex-col-reverse items-center gap-4 md:flex-row">
              <ul class="flex list-outside list-disc flex-col gap-4 self-start pl-6 md:self-auto">
                <li
                  v-for="(line, index) in data?.description.split('.').filter((line) => line)"
                  :key="index"
                  class="marker:text-main"
                >
                  {{ line }}.
                </li>
              </ul>
              <img
                :src="data?.images[0]"
                :alt="data?.title"
                class="aspect-square max-w-[25rem] object-contain"
              />
            </div>
            <p>{{ data?.description }}</p>
          </div>
        </TabsContent>
        <TabsContent value="reviews">
          <div class="flex flex-col gap-10 p-6">
            <div
              v-for="review in formattedReviews"
              :key="review.date.toString()"
              class="flex flex-col items-start gap-4 md:flex-row"
            >
              <div class="aspect-square size-20 shrink-0 overflow-hidden rounded-full border">
                <img
                  :src="review.image"
                  :alt="review.reviewerName"
                  class="h-full w-full object-fill"
                />
              </div>
              <div class="flex w-full flex-col gap-2">
                <div class="flex w-full items-center justify-between gap-4">
                  <div class="flex flex-col items-baseline gap-0 md:flex-row md:gap-4">
                    <h4 class="text-lg font-semibold">{{ review.reviewerName }}</h4>
                    <span class="text-sm text-gray-500"
                      >Posted on {{ getFormattedDate(review.date) }} at
                      {{ getFormattedTime(review.date) }}</span
                    >
                  </div>
                  <StarRating :rating="review.rating" class="size-5" />
                </div>
                <p class="text-black/70">{{ review.comment }}</p>
              </div>
            </div>
            <ProductReviewForm />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  </div>
</template>

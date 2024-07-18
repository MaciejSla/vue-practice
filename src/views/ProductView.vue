<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useFetch } from '@vueuse/core'
import { computed } from 'vue'

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
}

const route = useRoute()
const { data } = useFetch(
  `https://dummyjson.com/products/${route.params.id}?select=title,description,images,price,discountPercentage,rating,reviews`
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

console.log(data)
</script>

<template>
  <div>
    <div v-for="review in formattedReviews" :key="review.date.toString()">
      <img :src="review.image" :alt="review.reviewerName" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import StarRating from '@/components/ui/StarRating.vue'
import AnimatedAccent from '@/components/ui/AnimatedAccent.vue'
import CustomButton from '@/components/ui/CustomButton.vue'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { reviewSchema } from '@/components/products'
import { useToast } from '@/components/ui/toast'
import { h } from 'vue'

const { toast } = useToast()

const formSchema = toTypedSchema(reviewSchema)

const form = useForm({
  validationSchema: formSchema
})

const onSubmit = form.handleSubmit((values) => {
  toast({
    title: 'Form Submitted',
    description: h(
      'pre',
      { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4 overflow-y-auto' },
      h('code', { class: 'text-white' }, JSON.stringify(values, null, 2))
    )
  })
})
</script>

<template>
  <form class="flex flex-col gap-10" @submit="onSubmit">
    <div class="group/anim flex flex-col items-start justify-center gap-4 text-center">
      <h1 class="font-serif text-3xl">Add a Review</h1>
      <AnimatedAccent />
    </div>
    <div class="grid grid-cols-1 place-items-start gap-4 md:grid-cols-3">
      <FormField v-slot="{ componentField }" name="name">
        <FormItem class="w-full">
          <FormControl>
            <Input
              type="text"
              placeholder="Enter your name"
              v-bind="componentField"
              class="w-full"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField v-slot="{ componentField }" name="email">
        <FormItem class="w-full">
          <FormControl>
            <Input type="text" placeholder="Enter your email" v-bind="componentField" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField v-slot="{ value, setValue }" name="score">
        <FormItem class="w-full self-center">
          <FormControl>
            <div class="flex gap-2">
              Your Rating:
              <StarRating
                class="size-5"
                interactive
                :rating="value"
                @update:rating="(v) => setValue(v)"
              />
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
    </div>
    <FormField v-slot="{ componentField }" name="message">
      <FormItem>
        <FormControl>
          <Textarea placeholder="Enter your message" v-bind="componentField" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <CustomButton class="rounded-md uppercase" type="submit">Submit</CustomButton>
  </form>
</template>

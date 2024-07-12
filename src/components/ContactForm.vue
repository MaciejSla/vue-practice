<script setup lang="ts">
import { h } from 'vue'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { useToast } from '@/components/ui/toast'
import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import CustomButton from '@/components/ui/CustomButton.vue'
import AnimatedAccent from './ui/AnimatedAccent.vue'

const { toast } = useToast()

const formSchema = toTypedSchema(
  z.object({
    name: z.string().min(2),
    email: z.string().email(),
    subject: z.string().min(2),
    message: z.string().min(10)
  })
)

const form = useForm({
  validationSchema: formSchema
})

const onSubmit = form.handleSubmit((values) => {
  console.log(values)

  toast({
    title: 'Form Submitted',
    description: h(
      'pre',
      { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' },
      h('code', { class: 'text-white' }, JSON.stringify(values, null, 2))
    )
  })
})
</script>

<template>
  <div class="my-20 flex flex-col items-center justify-center gap-16">
    <div class="group/anim flex flex-col items-center justify-center gap-5 text-center">
      <h1 class="font-serif text-5xl">Contact Us</h1>
      <AnimatedAccent reverse />
      <p class="max-w-[42rem] text-gray-500">
        Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
        auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
      </p>
    </div>
    <form
      class="flex w-2/3 max-w-[71rem] flex-col items-center justify-center gap-6"
      @submit="onSubmit"
    >
      <div class="grid w-full grid-cols-1 gap-8 xs:grid-cols-2">
        <FormField v-slot="{ componentField }" name="name">
          <FormItem>
            <FormControl>
              <Input type="text" placeholder="Your Name" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="email">
          <FormItem>
            <FormControl>
              <Input type="email" placeholder="Your Email" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="subject">
          <FormItem class="xs:col-span-2">
            <FormControl>
              <Input type="text" placeholder="Subject" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="message">
          <FormItem class="xs:col-span-2">
            <FormControl>
              <Textarea placeholder="Your Message" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
      </div>
      <CustomButton type="submit" class="uppercase">SEND NOW</CustomButton>
    </form>
  </div>
</template>

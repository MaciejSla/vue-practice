<script setup lang="ts">
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { ScrollArea } from '@/components/ui/scroll-area'
import CustomButton from '@/components/ui/CustomButton.vue'

import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { checkoutSchema } from '@/components/shop'
import { useToast } from '@/components/ui/toast'
import { h } from 'vue'
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()

const { toast } = useToast()

const formSchema = toTypedSchema(checkoutSchema)

const form = useForm({
  validationSchema: formSchema,
  initialValues: {
    items: cartStore.cart.map((item) => ({
      id: item.id,
      amount: item.amount
    }))
  }
})

const onSubmit = form.handleSubmit((values) => {
  console.log(values)

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
  <div class="flex justify-center">
    <form
      @submit="onSubmit"
      class="grid w-full max-w-[50rem] grid-cols-1 gap-6 xs:p-4 lg:max-w-[74rem] lg:grid-cols-[58%_auto]"
    >
      <div class="flex flex-col gap-10">
        <div class="flex flex-col gap-4">
          <div class="bg-main p-4 font-serif text-3xl">Billing Details</div>
          <div class="flex flex-col gap-6 px-4">
            <div class="grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
              <FormField v-slot="{ componentField }" name="firstName">
                <FormItem>
                  <FormLabel>First Name *</FormLabel>
                  <FormControl>
                    <Input type="text" v-bind="componentField" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </FormField>
              <FormField v-slot="{ componentField }" name="lastName">
                <FormItem>
                  <FormLabel>Last Name *</FormLabel>
                  <FormControl>
                    <Input type="text" v-bind="componentField" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </FormField>
            </div>
            <FormField v-slot="{ componentField }" name="company">
              <FormItem>
                <FormLabel>Company Name</FormLabel>
                <FormControl>
                  <Input type="text" v-bind="componentField" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
            <FormField v-slot="{ componentField }" name="country">
              <FormItem>
                <FormLabel>Country / Region *</FormLabel>
                <FormControl>
                  <Input type="text" v-bind="componentField" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
            <FormField v-slot="{ componentField }" name="address">
              <FormItem>
                <FormLabel>Street Address *</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="House number and street name"
                    v-bind="componentField"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
            <FormField v-slot="{ componentField }" name="address2">
              <FormItem>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Apartment, suite, unit etc."
                    v-bind="componentField"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
            <div class="grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
              <FormField v-slot="{ componentField }" name="city">
                <FormItem>
                  <FormLabel>Town / City *</FormLabel>
                  <FormControl>
                    <Input type="text" v-bind="componentField" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </FormField>
              <FormField v-slot="{ componentField }" name="state">
                <FormItem>
                  <FormLabel>State / County *</FormLabel>
                  <FormControl>
                    <Input type="text" v-bind="componentField" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </FormField>
            </div>
            <div class="grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
              <FormField v-slot="{ componentField }" name="zip">
                <FormItem>
                  <FormLabel>Postcode / ZIP *</FormLabel>
                  <FormControl>
                    <Input type="text" v-bind="componentField" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </FormField>
              <FormField v-slot="{ componentField }" name="phone">
                <FormItem>
                  <FormLabel>Phone *</FormLabel>
                  <FormControl>
                    <Input type="text" v-bind="componentField" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </FormField>
            </div>
            <FormField v-slot="{ componentField }" name="email">
              <FormItem>
                <FormLabel>Email address *</FormLabel>
                <FormControl>
                  <Input type="text" v-bind="componentField" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
            <div class="flex flex-col gap-2">
              <FormField v-slot="{ value, handleChange }" type="checkbox" name="createAccount">
                <FormItem>
                  <div class="flex items-center gap-2">
                    <FormControl>
                      <Checkbox :checked="value" @update:checked="handleChange" />
                    </FormControl>
                    <FormLabel>Create an account?</FormLabel>
                  </div>
                  <FormMessage />
                </FormItem>
              </FormField>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-4">
          <div class="bg-main p-4 font-serif text-3xl">Additional Information</div>
          <div class="flex flex-col gap-6 p-4">
            <FormField v-slot="{ componentField }" type="radio" name="shippingType">
              <FormItem class="space-y-3">
                <FormControl>
                  <RadioGroup class="flex flex-col space-y-1" v-bind="componentField">
                    <FormItem class="flex items-center gap-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="Free" />
                      </FormControl>
                      <FormLabel class="font-normal"> Free Shipping </FormLabel>
                    </FormItem>
                    <FormItem class="flex items-center gap-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="Standard" />
                      </FormControl>
                      <FormLabel class="font-normal"> Standard </FormLabel>
                    </FormItem>
                    <FormItem class="flex items-center gap-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="Express" />
                      </FormControl>
                      <FormLabel class="font-normal"> Express </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
            <FormField v-slot="{ componentField }" name="shippingNotes">
              <FormItem>
                <FormLabel>Order Notes</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Notes about your order, e.g. special instructions for delivery"
                    v-bind="componentField"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-10">
        <div class="flex flex-col gap-4">
          <div class="bg-main p-4 font-serif text-3xl">Order Review</div>
          <div class="flex flex-col gap-6 px-4">
            <ScrollArea class="h-[14rem] p-2" type="always">
              <div
                v-for="item in cartStore.cart"
                :key="item.id"
                class="flex items-start gap-2 border-b py-2"
              >
                <div class="size-24 shrink-0">
                  <img :src="item.thumbnail" class="h-full w-full object-cover" :alt="item.title" />
                </div>
                <div class="flex w-full flex-col gap-4">
                  <div class="flex w-full items-start justify-between gap-4 pr-2">
                    <h3 class="font-bold">{{ item.title }}</h3>
                    <span class="font-semibold">${{ item.discountedPrice.toFixed(2) }}</span>
                  </div>
                  <span class="font-semibold">Quantity: {{ item.amount }}</span>
                </div>
              </div>
            </ScrollArea>
            <div class="flex w-full flex-col gap-4">
              <div class="flex h-12 items-center justify-between rounded-md border px-4">
                <span>Cart Subtotal</span>
                <span>$ {{ cartStore.discountedTotal.toFixed(2) }}</span>
              </div>
              <div class="flex h-12 items-center justify-between rounded-md border px-4">
                <span>Shipping and Handling</span>
                <span>{{
                  cartStore.shipping > 0 ? '$ ' + cartStore.shipping.toFixed(2) : 'Free Shipping'
                }}</span>
              </div>
              <div class="flex h-12 items-center justify-between rounded-md border px-4">
                <span>Order Total</span>
                <span>$ {{ (cartStore.discountedTotal + cartStore.shipping).toFixed(2) }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-4">
          <div class="bg-main p-4 font-serif text-3xl">Payment Methods</div>
          <div class="flex flex-col gap-6 p-4">
            <FormField v-slot="{ componentField }" type="radio" name="paymentMethod">
              <FormItem class="space-y-3">
                <FormControl>
                  <RadioGroup class="flex flex-col space-y-1" v-bind="componentField">
                    <FormItem class="flex items-center gap-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="card" class="shrink-0" />
                      </FormControl>
                      <FormLabel class="font-normal">
                        Debit/credit card or Mobile wallet (Rocket, Upay, iPay, SureCash, OK wallet)
                      </FormLabel>
                    </FormItem>
                    <FormItem class="flex items-center gap-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="bKash" />
                      </FormControl>
                      <FormLabel class="font-normal"> bKash </FormLabel>
                    </FormItem>
                    <FormItem class="flex items-center gap-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="cash" />
                      </FormControl>
                      <FormLabel class="font-normal"> Cash on delivery </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
            <div class="w-full border-b"></div>
            <p>
              Your personal data will used to process your order, support your experience throughout
              this website, and for other purposes described in our privacy policy.
            </p>
            <CustomButton>PLACE ORDER</CustomButton>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

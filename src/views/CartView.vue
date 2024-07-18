<script setup lang="ts">
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import {
  NumberField,
  NumberFieldContent,
  NumberFieldDecrement,
  NumberFieldIncrement,
  NumberFieldInput
} from '@/components/ui/number-field'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Trash2Icon } from 'lucide-vue-next'
import CustomButton from '@/components/ui/CustomButton.vue'
import { Input } from '@/components/ui/input'
import AppLink from '@/components/navigation/AppLink.vue'

import { useCartStore } from '@/stores/cart'
import { useWindowSize } from '@vueuse/core'
import { computed } from 'vue'

const { width } = useWindowSize()
const smallScreen = computed(() => width.value < 768)

const cartStore = useCartStore()
</script>

<template>
  <div class="flex justify-center">
    <div
      class="flex w-full max-w-[40rem] flex-col items-center justify-between gap-10 xs:p-4 md:max-w-[74rem]"
    >
      <Table>
        <TableHeader class="bg-main">
          <TableRow>
            <TableHead class="text-white">PRODUCT</TableHead>
            <TableHead class="text-white" v-if="!smallScreen">PRICE</TableHead>
            <TableHead class="text-white">QUANTITY</TableHead>
            <TableHead class="text-white">TOTAL</TableHead>
            <TableHead class="text-right text-white"> EDIT </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TransitionGroup name="cart-item" asChild>
            <TableRow v-for="item in cartStore.cart" :key="item.id">
              <TableCell>
                <div class="group flex items-center gap-2">
                  <AppLink :to="`/products/${item.id}`" class="size-24 shrink-0 bg-white">
                    <img
                      :src="item.thumbnail"
                      :alt="item.title"
                      class="h-full w-full object-cover"
                    />
                  </AppLink>
                  <AppLink
                    :to="`/products/${item.id}`"
                    class="font-bold transition-colors duration-300 hover:text-main"
                    v-if="!smallScreen"
                  >
                    {{ item.title }}
                  </AppLink>
                </div>
              </TableCell>
              <TableCell v-if="!smallScreen" class="font-semibold"
                >${{ item.discountedPrice.toFixed(2) }}</TableCell
              >
              <TableCell>
                <NumberField
                  :min="1"
                  :default-value="item.amount"
                  @update:model-value="
                    (v) => {
                      if (v) {
                        cartStore.updateProductAmount(item.id, v)
                      } else {
                        cartStore.updateProductAmount(item.id, 1)
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
              </TableCell>
              <TableCell class="p-1 font-semibold">
                <div>${{ cartStore.getItemTotal(item.id) }}</div>
              </TableCell>
              <TableCell class="text-right">
                <button @click="cartStore.removeProduct(item.id)">
                  <Trash2Icon class="size-6 stroke-red-600" />
                </button>
              </TableCell>
            </TableRow>
          </TransitionGroup>
        </TableBody>
      </Table>
      <div class="flex w-full flex-col items-start justify-between gap-4 border p-6 lg:flex-row">
        <div class="flex items-center gap-2">
          <Input placeholder="Coupon Code..." />
          <CustomButton class="py-3"> APPLY </CustomButton>
        </div>
        <div class="flex w-full items-center justify-between gap-2 text-sm xs:text-base lg:w-auto">
          <CustomButton @click="cartStore.clearCart"> CLEAR CART </CustomButton>
          <AppLink to="/checkout">
            <CustomButton> PROCEED TO CHECKOUT</CustomButton>
          </AppLink>
        </div>
      </div>
      <!-- TODO add basic shipping funcionality  -->
      <div
        class="grid w-full grid-cols-1 items-start justify-between gap-8 border p-6 md:grid-cols-2"
      >
        <div class="flex flex-col gap-5">
          <h3 class="font-serif text-adaptive-xl lg:text-4xl">Calculate Shipping</h3>
          <div class="flex w-full flex-col gap-4">
            <Select>
              <SelectTrigger class="h-14">
                <SelectValue placeholder="Country" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="uk"> United Kingdom (UK) </SelectItem>
                  <SelectItem value="bg"> Bangladesh </SelectItem>
                  <SelectItem value="pk"> Pakistan </SelectItem>
                  <SelectItem value="id"> India </SelectItem>
                  <SelectItem value="np"> Nepal </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <div class="flex w-full flex-col gap-4 md:flex-row">
              <Select>
                <SelectTrigger class="h-14">
                  <SelectValue placeholder="State/Province" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="dhaka"> Dhaka </SelectItem>
                    <SelectItem value="benkok"> Benkok </SelectItem>
                    <SelectItem value="kolkata"> Kolkata </SelectItem>
                    <SelectItem value="kapasia"> Kapasia </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Input type="text" placeholder="Postcode/ZIP" class="h-14" />
            </div>
            <CustomButton class="rounded-md"> CALCULATE TOTAL </CustomButton>
          </div>
        </div>
        <div class="flex flex-col gap-5">
          <h3 class="font-serif text-adaptive-xl lg:text-4xl">Cart Total</h3>
          <div class="flex w-full flex-col gap-4">
            <div class="flex h-14 items-center justify-between rounded-md border px-4">
              <span>Cart Subtotal</span>
              <span class="text-main">$ {{ cartStore.discountedTotal.toFixed(2) }}</span>
            </div>
            <div class="flex h-14 items-center justify-between rounded-md border px-4">
              <span>Shipping and Handling</span>
              <span class="text-main">{{
                cartStore.shipping > 0 ? '$ ' + cartStore.shipping.toFixed(2) : 'Free Shipping'
              }}</span>
            </div>
            <div class="flex h-14 items-center justify-between rounded-md border px-4">
              <span>Order Total</span>
              <span class="text-main"
                >$ {{ (cartStore.discountedTotal + cartStore.shipping).toFixed(2) }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

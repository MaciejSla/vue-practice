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
import { Trash2Icon } from 'lucide-vue-next'
import CustomButton from '@/components/ui/CustomButton.vue'
import { Input } from '@/components/ui/input'
import AppLink from '@/components/navigation/AppLink.vue'

import { useCartStore } from '@/stores/cart'
import { useWindowSize } from '@vueuse/core'
import { computed } from 'vue'

const { width } = useWindowSize()
const smallScreen = computed(() => width.value < 720)

const cartStore = useCartStore()
</script>

<template>
  <div class="flex justify-center">
    <div class="flex w-full max-w-[74rem] flex-col items-center justify-between sm:p-6">
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
                <AppLink :to="`/product/${item.id}`" class="group flex items-center gap-2">
                  <div class="size-24 shrink-0 bg-white">
                    <img
                      :src="item.thumbnail"
                      :alt="item.title"
                      class="h-full w-full object-cover"
                    />
                  </div>
                  <h3
                    class="font-bold transition-colors duration-300 hover:text-main"
                    v-if="!smallScreen"
                  >
                    {{ item.title }}
                  </h3>
                </AppLink>
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
              <TableCell class="font-semibold">
                <div class="">${{ cartStore.getItemTotal(item.id) }}</div>
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
    </div>
  </div>
</template>

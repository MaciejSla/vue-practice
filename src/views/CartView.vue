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
              <TableCell class="flex items-center gap-2">
                <div class="shrink-0">
                  <img :src="item.thumbnail" :alt="item.title" class="size-24 shrink-0 bg-white" />
                </div>
                <h3 class="font-bold" v-if="!smallScreen">
                  {{ item.title }}
                </h3>
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
              <TableCell class="font-semibold">${{ cartStore.getItemTotal(item.id) }}</TableCell>
              <TableCell class="text-right">
                <button @click="cartStore.removeProduct(item.id)">
                  <Trash2Icon class="size-6 stroke-red-600" />
                </button>
              </TableCell>
            </TableRow>
          </TransitionGroup>
        </TableBody>
      </Table>
      <div class="flex w-full flex-wrap items-center justify-center border p-2">
        <div>
          <Input placeholder="Coupon Code..." />
        </div>
        <CustomButton @click="cartStore.clearCart"> CLEAR CART </CustomButton>
      </div>
    </div>
  </div>
</template>

<template>
  <teleport to="body">
    <section class="cart_box">
      <div class="cart_head">
        <p>Cart</p>
      </div>

      <div
        class="cart_body"
        v-for="item in cartStore.cartItems"
        :key="item.id"
      >
        <img :src=item.image />
        <div class="cart_item">
          <p class="item_name">{{ item.title.slice(0, 20) }}</p>
          <p class="item_amount">
            {{ item.price }}
            <span class="quantity">
              <img class="vol" src="../assets/icons/icon-minus.svg"/>
              {{ quantity }}
              <img class="vol" src="../assets/icons/icon-plus.svg"/>
            </span>
            <span class="item_total">{{ item.price * quantity }}</span>
          </p>
        </div>
        <div class="cart_remove">
          <img src="../assets/icons/icon-close.svg" />
        </div>
      </div>

      <p class="empty_cart">
        <!-- <em>Your Cart is Empty</em> -->
      </p>

      <div class="check">
        <div class="checkout_button">
          <p>Checkout</p>
        </div>
      </div>
    </section>
  </teleport>
</template>

<script setup>
import { ref } from "vue"
import { useCartStore } from "@/Store/cart";
//import { useProductStore } from "@/Store/store";

//const productStore = useProductStore();
const cartStore = useCartStore();

const quantity = ref(0)
</script>

<style></style>

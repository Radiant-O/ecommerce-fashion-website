<template>
  <teleport to="body">
    <section class="cart_box">
      <div class="cart_head">
        <p>Cart</p>
      </div>

      <div v-if="cartStore.cartItems.length > 0">
        <div
          class="cart_body"
          v-for="item in cartStore.cartItems"
          :key="item.id"
        >
          <img class="cart_img" :src="item.image" />
          <div class="cart_item">
            <p class="item_name">{{ item.title.slice(0, 20) }}</p>
            <p class="item_amount">
              {{ item.price }}
              <span class="quantity">
                <img
                  src="../assets/icons/minus.svg"
                  @click="cartStore.decreaseQ(item)"
                  class="vol"
                />
                <p>{{ item.quantity }}</p>
                <img
                  src="../assets/icons/plus.svg"
                  class="vol"
                  @click="cartStore.increaseQ(item)"
                />
              </span>
              <span class="item_total">{{ item.price * item.quantity }}</span>
            </p>
          </div>
          <div class="cart_remove">
            <img src="../assets/icons/icon-close.svg" @click="cartStore.removeFromCart(item)" />
          </div>
        </div>
        <div class="total_cart">
          <span>Total:</span>
          <span
            >${{
              cartStore.cartItems.reduce(
                (acc, item) => (acc += item.price * item.quantity),
                0
              )
            }}</span
          >
        </div>
        <div class="check">
          <div class="checkout_button">
            <p>Checkout</p>
          </div>
        </div>
      </div>

      <div class="empty_cart" v-else>
        <em>Your Cart is Empty</em>
      </div>
    </section>
  </teleport>
</template>

<script setup>
import { ref } from "vue";
import { useCartStore } from "@/Store/cart";
//import { useProductStore } from "@/Store/store";

//const productStore = useProductStore();
const cartStore = useCartStore();
</script>

<style></style>

<template>
  <section class="prod_container">
    <div
      class="real_prod"
      v-for="product in productStore.products.slice(0,8)"
      :key="product.id"
    >
      <img class="prod_img" :src="product.image" />
      <div class="abt_prod">
        <p class="name">{{ product.title }}</p>
        <p class="amount">${{ product.price }}</p>
        <div class="prod_btn">
          <p>
            <router-link :to="{ name: 'details', params: { id: product.id } }">
              <img src="../assets/icons/icons8-eyes-64.png" /><span
                >View Details</span
              ></router-link
            >
          </p>
          <p @click="cartStore.addToCart(productStore.singleProduct)">
            <img src="../assets/icons/icons8-shopping-cart-50.png" /> Add To
            Cart
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import { useProductStore } from "@/Store/store";
import { useCartStore } from "@/Store/cart";

const productStore = useProductStore();
const cartStore = useCartStore();

onMounted(async () => {
  await productStore.getProducts();
});
</script>

<style></style>

<template>
  <section class="prod_container">
    <div class="real_prod" v-for="data in datas">
      <img class="prod_img" :src="data.image" />
      <div class="abt_prod">
        <p class="name">{{ data.title }}</p>
        <p class="amount">${{ data.price }}</p>
        <div class="prod_btn">
          <p>
            <router-link :to="{ name: 'details', params: { id: product.id } }">
              <img src="../assets/icons/icons8-eyes-64.png" /><span
                >View Details</span
              ></router-link
            >
          </p>
          <p @click="cartStore.addToCart(data)">
            <img src="../assets/icons/icons8-shopping-cart-50.png" /> Add To
            Cart
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
//import { useProductStore } from "@/Store/store";
import { useCartStore } from "@/Store/cart";

//const productStore = useProductStore();
const cartStore = useCartStore();

let datas = ref([]);

onMounted(async () => {
  await axios
    .get("https://fakestoreapi.com/products?limit=8")
    .then((response) => {
      datas.value = response.data;
      console.log(datas);
    })
    .catch((error) => console.log(error));
});
</script>

<style></style>

<template>
  <section class="home">
    <Swiper 
    navigation
    :modules="[Navigation, Pagination]"
    parallax
    autoplay
    :pagination="{clickable: true}"
    class="banner parallax-slider">
    <SwiperSlide
     class="banner_img">
        <img src="../assets/img/carousel-1.jpg" />
      <div class="banner_text">
        <p class="head">10% OFF YOUR FIRST ORDER</p>
        <p class="txt">Fashionable Dress</p>
        <p class="ban_btn">Shop Now</p>
      </div>
      </SwiperSlide>
    <SwiperSlide
     class="banner_img">
        <img src="../assets/img/carousel-1.jpg" />
      <!-- <div class="banner_text">
        <p class="head">10% OFF YOUR FIRST ORDER</p>
        <p class="txt">Fashionable Dress</p>
        <p class="ban_btn">Shop Now</p>
      </div> -->
      </SwiperSlide>
    <SwiperSlide
     class="banner_img">
        <img src="../assets/img/carousel-2.jpg" />
      <!-- <div class="banner_text">
        <p class="head">10% OFF YOUR FIRST ORDER</p>
        <p class="txt">Fashionable Dress</p>
        <p class="ban_btn">Shop Now</p>
      </div> -->
      </SwiperSlide>
    </Swiper>
    <div class="cta">
      <p class="cta_text">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-9 h-9"
        >
          <path
            fill-rule="evenodd"
            d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
            clip-rule="evenodd"
          />
        </svg>
        Quality Product
      </p>
      <p class="cta_text">
        <img src="../assets/icons/delivery-truck-icon.png" alt="" />
        Free Shipping
      </p>
      <p class="cta_text">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-9 h-9"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
          />
        </svg>
        14-Day Return
      </p>
      <p class="cta_text">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-9 h-9"
        >
          <path
            fill-rule="evenodd"
            d="M19.5 9.75a.75.75 0 01-.75.75h-4.5a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v2.69l4.72-4.72a.75.75 0 111.06 1.06L16.06 9h2.69a.75.75 0 01.75.75z"
            clip-rule="evenodd"
          />
          <path
            fill-rule="evenodd"
            d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
            clip-rule="evenodd"
          />
        </svg>
        24/7 Support
      </p>
    </div>
  </section>
  <Shopproduct />
  <ProductAds />
  <section class="trending">
    <h3 class="top_text">Trending Products</h3>
    <Trend />
  </section>
  <!-- <section>
    <h3 class="top_text">New Arrrival</h3>
    <Trend />
  </section> -->
</template>

<script setup>
import axios from "axios";
import { onMounted } from "vue";

import Shopproduct from "@/components/Shopproduct.vue";
import ProductAds from "@/components/ProductAds.vue";
import Trend from "@/components/Trend.vue";

// import Swiper core and required modules
import { Navigation, Pagination} from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


onMounted(async () => {
  let res = await axios.get('https://fakestoreapi.com/products');
  
})

</script>

<style></style>

<template>
  <section class="home">
    <div class="banner">
      <div class="control"></div>
      <div class="banner_img">
        <img src="../assets/img/carousel-1.jpg" />
      </div>
        <div class="banner_text">
            <p class="head">10% OFF YOUR FIRST ORDER</p>
            <p class="txt">Fashionable Dress</p>
            <p class="ban_btn">Shop Now</p>
        </div>
    </div>
    <div class="cta">
        <p class="cta_text">Quality Product</p>
        <p class="cta_text">Free Shipping</p>
        <p class="cta_text">14-Day Return</p>
        <p class="cta_text">24/7 Support</p>
    </div>
  </section>
  <Shopproduct/>
  <ProductAds/>
  <section class="trending">
    <h3 class="top_text">Trending Products</h3>
    <Trend/>
  </section>
  <section>
    <h3>New Arrrival</h3>
    <Trend/>
  </section>
</template>

<script setup>
import Shopproduct from '@/components/Shopproduct.vue';
import ProductAds from "@/components/ProductAds.vue"
import Trend from "@/components/Trend.vue"
</script>

<style></style>

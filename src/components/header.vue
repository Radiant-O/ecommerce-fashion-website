<!-- eslint-disable prettier/prettier -->
<template>
  <header class="header">
    <div class="logo">LAZ STORE</div>

    <nav class="navbar lg_screen">
      <router-link
        class="link"
        v-for="route in routes"
        :key="route.id"
        :to="route.to"
      >
        {{ route.name }}
      </router-link>
    </nav>
    <div class="xra">
      <div class="search">
        <div class="flex justify-start items-center py-3 relative">
          <input
            class="text-sm leading-none text-left text-gray-600 px-4 py-3 w-full border rounded border-gray-300 outline-none"
            type="text"
            placeholder="Search for Product"
          />
          <svg
            class="absolute right-3 z-10 cursor-pointer"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z"
              stroke="#4B5563"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21 21L15 15"
              stroke="#4B5563"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>

      <div class="auth">
        <p>SIGN IN</p>
      </div>

      <div class="cart" @click="toggleCart">
        <span class="cart_no">{{ cartStore.cartItems.length }}</span>
        <img src="../assets/icons/icons8-shopping-cart-50.png" alt="" />
      </div>

      <div class="menu" @click="toggleDir">
        <img src="../assets/icons/icon-menu.svg" />
      </div>
    </div>
  </header>

  <nav class="sm_nav" v-if="toggle">
    <div>
      <img
        src="../assets/icons/icon-close.svg"
        class="close_nav"
        @click="toggleDir"
      />
    </div>
    <router-link
    @click="toggle=false"
      class="sm_link"
      v-for="route in routes"
      :key="route.id"
      :to="route.to"
    >
      {{ route.name }}
    </router-link>

    <div class="mob_auth">
      <p>SIGN IN</p>
    </div>
  </nav>

  <Cart v-if="cart" />
</template>

<script setup>
import Cart from "@/components/cart.vue";
import { ref } from "vue";
import { useCartStore } from "@/Store/cart"

const cartStore = useCartStore();

const routes = [
  {
    id: 1,
    name: "HOME",
    to: "/",
  },
  {
    id: 2,
    name: "STORE",
    to: "/store",
  },
  {
    id: 3,
    name: "CONTACTS",
    to: "/contacts",
  },
];
const toggle = ref(false);
const cart = ref(false);

const toggleDir = () => {
  toggle.value = !toggle.value;
};

const toggleCart = () => {
  cart.value = !cart.value;
};
</script>

<style></style>

<template>
  <main class="store">
    <aside>
      <div class="aside_boxes">
        <h5 class="filter_top">Categories</h5>
        <div class="filter_cat">
          <div v-for="category in productStore.categories" :key="category.id">
            <label for="">
              <input
                type="checkbox"
                :id="category"
                :value="category"
                v-model="productStore.checked"
              />
              {{ category }}
            </label>
          </div>
        </div>
      </div>
    </aside>
    <section class="store_items">
      <div class="items_top">
        <div class="item_search">
          <div class="flex justify-start items-center py-3 relative">
            <input
              class="text-sm leading-none text-left text-gray-600 px-4 py-3 w-full border rounded border-gray-300 outline-none"
              type="text"
              placeholder="Search for Product"
              v-model="productStore.query"
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
      </div>
      <div class="items_store">
        <div
          class="real_prod"
          v-for="product in productStore.filterProducts"
          :key="product.id"
        >
          <img class="prod_img" :src="product.image" />
          <div class="abt_prod">
            <p class="name">{{ product.title }}</p>
            <p class="amount">${{ product.price }}</p>
            <div class="prod_btn">
              <p>
                <router-link
                  :to="{ name: 'details', params: { id: product.id } }"
                >
                  <img src="../../assets/icons/icons8-eyes-64.png" /><span
                    >View Details</span
                  ></router-link
                >
              </p>
              <p @click="cartStore.addToCart(product)">
                <img src="../../assets/icons/icons8-shopping-cart-50.png" />
                <span>Add to Cart</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="pages">
        <p><ChevronLeftIcon></ChevronLeftIcon>Prev</p>
        <p><ChevronRightIcon></ChevronRightIcon>Next</p>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/20/solid";
import { onMounted } from "vue";
import { useProductStore } from "@/Store/store";
import { useCartStore } from "@/Store/cart";


const productStore = useProductStore();
const cartStore = useCartStore();


onMounted(async () => {
  await productStore.getProducts();
  await productStore.getCategory(); 
});

// watchEffect(()=>{
//   productStore.getProducts(productStore.query)
// })
</script>

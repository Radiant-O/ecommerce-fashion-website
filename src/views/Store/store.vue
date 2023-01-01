<template>
  <main class="store">
    <aside>
      <div class="aside_boxes">
        <h5 class="filter_top">Categories</h5>
        <div class="filter_cat">
          <div v-for="category in categories" :key="category.id">
            <label for="">
              <input type="checkbox" :id="category" :value="category" v-model="checked" />
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
              v-model="searchProduct"
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

        <div class="item_sort">
          <Menu as="div" class="relative inline-block text-left">
            <div>
              <MenuButton
                class="inline-flex justify-center outline-none w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
              >
                Sort by
                <ChevronDownIcon
                  class="-mr-1 ml-2 h-5 w-5"
                  aria-hidden="true"
                />
              </MenuButton>
            </div>

            <transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <MenuItems
                class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <div class="py-1">
                  <MenuItem v-slot="{ active }">
                    <p
                      :class="[
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-2 py-2 text-sm',
                      ]"
                    >
                      Latest
                    </p>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <p
                      :class="[
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-2 py-2 text-sm',
                      ]"
                    >
                      Popular
                    </p>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <p
                      :class="[
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-2 py-2 text-sm',
                      ]"
                    >
                      Trending
                    </p>
                  </MenuItem>
                </div>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
      <div class="items_store">
        <div class="real_prod" v-for="data in computedItems">
          <img class="prod_img" :src=data.image />
          <div class="abt_prod">
            <p class="name">{{data.title}}</p>
            <p class="amount">${{ data.price }}</p>
            <div class="prod_btn">
              <p>
                <router-link to="/store/details"
                  ><img src="../../assets/icons/icons8-eyes-64.png" /><span
                    >View Details</span
                  ></router-link
                >
              </p>
              <p>
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
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/vue/20/solid";
import axios from "axios";
import { ref, onMounted, computed } from "vue";

let datas = ref([]);
let categories = ref([]);

onMounted(async () => {
  await axios.get("https://fakestoreapi.com/products")
  .then((response) => {
    datas.value = response.data;
    console.log(datas);
  })
 .catch(() => {
  console.log("Fail to load Api")
 })

  let res = await axios.get("https://fakestoreapi.com/products/categories")
  console.log(res.data)
  categories.value = res.data
});

let checked = ref([]);


const computedItems = computed(()=>{
      if (checked.value.length === 0) {
        return datas.value;
      } else if(checked.value.length > 0){
        return datas.value.filter(data =>
          checked.value.indexOf(data.category) !== -1 
        );  
      } 
  });

  const searchProduct = ref("");
function filteredList() {
  return datas.value.filter((data) =>
    data.title.toLowerCase().includes(searchProduct.value.toLowerCase())
  );
}



// const searchedProducts = computed(() => {
//       return datas.value.filter((data) => {
//         return (
//           data.title
//             .toLowerCase()
//             .indexOf(searchProduct.value.toLowerCase()) != -1
//         );
//       });
// });



// const sortCategory = async() => {
//   let res = await axios.get("https://fakestoreapi.com/products/categories")
//   categories.value = res
//   console.log(res)
// }
</script>

<style></style>

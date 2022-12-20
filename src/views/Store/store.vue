<template>
  <main class="store">
    <aside>
      <div class="aside_boxes">
        <h5 class="filter_top">Categories</h5>
        <div class="filter_cat">
          <div>
            <label for="">
            <input type="checkbox" />
             All Products </label> <span>1000</span>
          </div>
          <div>
            <label for="">
            <input type="checkbox" />
             Men Wear</label>
            <span>150</span>
          </div>
          <div>
            <label for="">
            <input type="checkbox" />
             Women Wear</label>
            <span>150</span>
          </div>
          <div>
            <label for="">
            <input type="checkbox" />
             Children </label>
            <span>150</span>
          </div>
          <div>
            <label for="">
            <input type="checkbox" />
             Jump Suit</label>
            <span>150</span>
          </div>
          <div>
            <label for="">
            <input type="checkbox" />
             Sport Wear</label>
            <span>150</span>
          </div>
          <div>
            <label for="">
            <input type="checkbox" />
             Developers Wear</label>
          </div>
        </div>
      </div>
      <div class="aside_boxes">
        <h5 class="filter_top">Filter by Price</h5>
        <div class="filter_cat">
          <div>
            <label for="">
            <input type="checkbox" />
             All Price </label> <span>1000</span>
          </div>
          <div>
            <label for="">
            <input type="checkbox" />
             $0.99 - $100 </label>
            <span>150</span>
          </div>
          <div>
            <label for="">
            <input type="checkbox" />
             $101 -$200 </label>
            <span>150</span>
          </div>
          <div>
            <label for="">
            <input type="checkbox" />
             $201 - $300</label>
            <span>150</span>
          </div>
          <div>
            <label for="">
            <input type="checkbox" />
             $301 - $400 </label>
            <span>150</span>
          </div>
          <div>
            <label for="">
            <input type="checkbox" />
             $401 - $500 </label>
            <span>150</span>
          </div>
          <div>
            <label for="">
            <input type="checkbox" />
             $501 and above</label>
          </div>
        </div>
      </div>
      <div class="aside_boxes">
        <h5 class="filter_top">Filter by Price</h5>
        <div class="filter_cat">
          <div>
            <label for="">
            <input type="checkbox" />
             All Color</label>
            <span>1000</span>
          </div>
          <div>
            <label for="">
            <input type="checkbox" />
             Black</label>
            <span>1000</span>
          </div>
          <div>
            <label for="">
            <input type="checkbox" />
             White</label>
            <span>1000</span>
          </div>
          <div>
            <label for="">
            <input type="checkbox" />
             Red</label>
            <span>1000</span>
          </div>
          <div>
            <label for="">
            <input type="checkbox" />
             Blue</label>
            <span>1000</span>
          </div>
          <div>
            <label for="">
            <input type="checkbox" />
             Green</label>
            <span>1000</span>
          </div>
          <div>
            <label for="">
            <input type="checkbox" />
             Trending Color</label>
          </div>
        </div>
      </div>
      <div class="aside_boxes">
        <h5 class="filter_top">Filter by Size</h5>
        <div class="filter_cat">
          <div>
            <label for="">
            <input type="checkbox" />
             All Size</label>
            <span>1000</span>
          </div>
          <div>
            <label for="">
            <input type="checkbox" />
             XL</label>
            <span>1000</span>
          </div>
          <div>
            <label for="">
            <input type="checkbox" />
             L</label>
            <span>1000</span>
          </div>
          <div>
            <label for="">
            <input type="checkbox" />
             M</label>
            <span>1000</span>
          </div>
          <div>
            <label for="">
            <input type="checkbox" />
             S</label>
            <span>1000</span>
          </div>
          <div>
            <label for="">
            <input type="checkbox" />
             XS</label>
            <span>1000</span>
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
              class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
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
                  <MenuItem v-slot="{ active }" >
                    <p
                      class="[
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm',
                      ]"
                      >
                    SEERER
                    </p>
                  </MenuItem>
                 
                  
                  
                </div>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
      <div class="items_store">
        <div class="real_prod">
        <img src="../../assets/img/product-1.jpg">
        <div class="abt_prod">
            <p class="name">Colorful Stylish Shirt</p>
            <p class="amount">$50</p>
            <div class="prod_btn">
                <p>View Details</p>
                <p>Add To Cart</p>
            </div>
        </div>
    </div>
    <div class="real_prod">
        <img src="../../assets/img/product-1.jpg">
        <div class="abt_prod">
            <p>Colorful Stylish Shirt</p>
            <p>$50</p>
            <div class="prod_btn">
                <p>View Details</p>
                <p>Add To Cart</p>
            </div>
        </div>
    </div>
    <div class="real_prod">
        <img src="../../assets/img/product-1.jpg">
        <div class="abt_prod">
            <p>Colorful Stylish Shirt</p>
            <p>$50</p>
            <div class="prod_btn">
                <p>View Details</p>
                <p>Add To Cart</p>
            </div>
        </div>
    </div>
    <div class="real_prod">
        <img src="../../assets/img/product-1.jpg">
        <div class="abt_prod">
            <p>Colorful Stylish Shirt</p>
            <p>$50</p>
            <div class="prod_btn">
                <p>View Details</p>
                <p>Add To Cart</p>
            </div>
        </div>
    </div>
    <div class="real_prod">
        <img src="../../assets/img/product-1.jpg">
        <div class="abt_prod">
            <p>Colorful Stylish Shirt</p>
            <p>$50</p>
            <div class="prod_btn">
                <p>View Details</p>
                <p>Add To Cart</p>
            </div>
        </div>
    </div>
    <div class="real_prod">
        <img src="../../assets/img/product-1.jpg">
        <div class="abt_prod">
            <p>Colorful Stylish Shirt</p>
            <p>$50</p>
            <div class="prod_btn">
                <p>View Details</p>
                <p>Add To Cart</p>
            </div>
        </div>
    </div>
    <div class="real_prod">
        <img src="../../assets/img/product-1.jpg">
        <div class="abt_prod">
            <p>Colorful Stylish Shirt</p>
            <p>$50</p>
            <div class="prod_btn">
                <p>View Details</p>
                <p>Add To Cart</p>
            </div>
        </div>
    </div>
    <div class="real_prod">
        <img src="../../assets/img/product-1.jpg">
        <div class="abt_prod">
            <p>Colorful Stylish Shirt</p>
            <p>$50</p>
            <div class="prod_btn">
                <p>View Details</p>
                <p>Add To Cart</p>
            </div>
        </div>
    </div>
    <div class="real_prod">
        <img src="../../assets/img/product-1.jpg">
        <div class="abt_prod">
            <p>Colorful Stylish Shirt</p>
            <p>$50</p>
            <div class="prod_btn">
                <p>View Details</p>
                <p>Add To Cart</p>
            </div>
        </div>
    </div>
    <div class="real_prod">
        <img src="../../assets/img/product-1.jpg">
        <div class="abt_prod">
            <p>Colorful Stylish Shirt</p>
            <p>$50</p>
            <div class="prod_btn">
                <p>View Details</p>
                <p>Add To Cart</p>
            </div>
        </div>
    </div>
    <div class="real_prod">
        <img src="../../assets/img/product-1.jpg">
        <div class="abt_prod">
            <p>Colorful Stylish Shirt</p>
            <p>$50</p>
            <div class="prod_btn">
                <p>View Details</p>
                <p>Add To Cart</p>
            </div>
        </div>
    </div>
    <div class="real_prod">
        <img src="../../assets/img/product-1.jpg">
        <div class="abt_prod">
            <p>Colorful Stylish Shirt</p>
            <p>$50</p>
            <div class="prod_btn">
                <p>View Details</p>
                <p>Add To Cart</p>
            </div>
        </div>
    </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
</script>

<style></style>

<template>
  <section class="productdetails">
    <div class="back_btn" @click="$router.back()">
      <ChevronLeftIcon></ChevronLeftIcon>
    </div>
    <h3>Product Details</h3>
    <div class="product_details">
      <img class="item_img" :src="productStore.singleProduct.image" />
      <div class="item_detail">
        <p class="item_name">{{ productStore.singleProduct.title }}</p>
        <span class="item_rating">
          <img src="../../assets/icons/icons8-star-filled-60.png" alt="" />
          <img src="../../assets/icons/icons8-star-filled-60.png" alt="" />
          <img src="../../assets/icons/icons8-star-filled-60.png" alt="" />
          <img src="../../assets/icons/icons8-star-half-empty-96.png" alt="" />
          <!-- <small class="review_no">({{ productStore.singleProduct.rating }})</small> -->
        </span>
        <p class="item_amount">${{ productStore.singleProduct.price }}</p>
        <p class="item_text">
          {{ productStore.singleProduct.description }}
        </p>
        <div class="add_cart">
          <div class="cart_in">
            <p class="cart_vol" @click="quantity--">
              <img src="../../assets/icons/icon-minus.svg" />
            </p>
            <input type="text" v-model="quantity" />
            <p class="cart_vol" @click="quantity++">
              <img src="../../assets/icons/icon-plus.svg" />
            </p>
          </div>
          <div class="addtocart">
            <img src="../../assets/icons/icons8-shopping-cart-50.png" />
            <span>Add to Cart</span>
          </div>
        </div>
      </div>
    </div>
    <section class="review">
      <h3>Reviews</h3>
      <div class="review_details">
        <div class="review_text">
          <p class="top">Reviews for "Colorful Stylish Shirt"</p>
          <div class="client_details">
            <div class="cli">
              <img src="../../assets/img/user.jpg" alt="" />
              <div>
                <p class="client_name">
                  John Doe - <span class="date">01 Feb 2023</span>
                </p>
                <p class="client_star">
                  <img
                    src="../../assets/icons/icons8-star-filled-60.png"
                    alt=""
                  />
                  <img
                    src="../../assets/icons/icons8-star-filled-60.png"
                    alt=""
                  />
                  <img
                    src="../../assets/icons/icons8-star-filled-60.png"
                    alt=""
                  />
                </p>
                <p class="client_review">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
                  laudantium itaque ipsum sint maxime eligendi!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="review_form">
          <p class="top">Leave a Review</p>
          <p class="info">
            Your email address will not be published. Required fields are marked
            *
          </p>
          <form action="">
            <div>
              <p>Your Review*</p>
              <textarea cols="70" rows="7"></textarea>
            </div>
            <div>
              <p>Your Name*</p>
              <input type="text" />
            </div>
            <div>
              <p>Your Email*</p>
              <input type="text" />
            </div>
            <button class="form_btn">Leave Your Review</button>
          </form>
        </div>
      </div>
    </section>
    <!-- <div class="may_like">
      <h3>You May Like</h3>
      <div class="like">
        <div class="real_prod">
          <img src="../../assets/img/cat-1.jpg" />
          <div class="abt_prod">
            <p class="name">Colorful Stylish Shirt</p>
            <p class="amount">$50</p>
            <div class="prod_btn">
              <p><router-link to="/store/details">View Details</router-link></p>
              <p>Add To Cart</p>
            </div>
          </div>
        </div>
        <div class="real_prod">
          <img src="../../assets/img/cat-1.jpg" />
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
          <img src="../../assets/img/cat-1.jpg" />
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
    </div> -->
  </section>
</template>

<script setup>
import { ChevronLeftIcon } from "@heroicons/vue/20/solid";
import { ref, onMounted } from "vue";
import { useProductStore } from "@/Store/store";

const productStore = useProductStore();

const quantity = ref(0);

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

onMounted(async () => {
  productStore.getSingleProduct(props.id);
  // await axios
  //   .get(`https://fakestoreapi.com/products/${parseInt(props.id)}`)
  //   .then((response) => {
  //     datas.value = response.data;
  //     console.log(datas)
  //   })
  //   .catch(() => {
  //     console.log("Fail to load Api");
  //   });
});
</script>

<style></style>

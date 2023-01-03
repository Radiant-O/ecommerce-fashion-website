<template>
  <section class="productdetails">
    <h3>Product Details</h3>
    <div class="product_details">
      <div class="item_img">
        <img src="../../assets/img/product-2.jpg" alt="">
      </div>
      <div class="item_detail">
        <p class="item_name">{{ props.title }}</p>
        <span class="item_rating">
          <img src="../../assets/icons/icons8-star-filled-60.png" alt="">
          <img src="../../assets/icons/icons8-star-filled-60.png" alt="">
          <img src="../../assets/icons/icons8-star-filled-60.png" alt="">
          <img src="../../assets/icons/icons8-star-filled-60.png" alt="">
          <img src="../../assets/icons/icons8-star-half-empty-96.png" alt="">
          <small class="review_no">(50 Reviews)</small>
        </span>
        <p class="item_amount">$200.00</p>
        <p class="item_text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum magni ea eligendi eveniet ipsam, ex voluptatibus commodi excepturi dicta eius, sit quia laudantium facilis mollitia.</p>
        <p class="sizes">
          Size: <label for="">
            <input type="radio"> XL
          </label>
           <label for="">
            <input type="radio"> L
          </label>
           <label for="">
            <input type="radio"> M
          </label>
           <label for="">
            <input type="radio"> S
          </label>
           <label for="">
            <input type="radio"> XS
          </label>
        </p>
        <p class="color">
          Colors: 
          <label for="">
            <input type="radio"> Black
          </label>
          <label for="">
            <input type="radio"> White
          </label>
          <label for="">
            <input type="radio"> Red
          </label>
          <label for="">
            <input type="radio"> Blue
          </label>
          <label for="">
            <input type="radio"> Green
          </label>
        </p>
        <div class="add_cart">
          <div class="cart_in">
            <p class="cart_vol">+</p>
            <input type="text" value="1">
            <p class="cart_vol">-</p>
          </div>
          <div class="addtocart">
            <img src="../../assets/icons/icons8-shopping-cart-50.png"/>
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
              <img src="../../assets/icons/icons8-star-filled-60.png" alt="" />
              <img src="../../assets/icons/icons8-star-filled-60.png" alt="" />
              <img src="../../assets/icons/icons8-star-filled-60.png" alt="" />
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
          Your email address will not be published. Required fields are marked *
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
    <div class="may_like">
      <h3>You May Like</h3>
      <div class="like">
    <div class="real_prod">
        <img src="../../assets/img/product-1.jpg">
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
  </div>
  </section>
</template>

<script setup>
const props = defineProps(['id'])
</script>

<style>

</style>
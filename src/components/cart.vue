<template>
  <teleport to="body">
    <section class="cart_box">
      <div class="cart_head">
        <p>Cart</p>
      </div>

      <div class="cart_body">
        <img src="../assets/img/product-3.jpg" />
        <div class="cart_item">
          <p class="item_name">Colorful Stylish Shirt</p>
          <p class="item_amount">
            $120 x 2
            <span class="item_total">$240</span>
          </p>
        </div>
        <div class="cart_remove">
          <p>X</p>
        </div>
      </div>
      <div class="cart_body">
        <img src="../assets/img/product-3.jpg" />
        <div class="cart_item">
          <p class="item_name">Colorful Stylish Shirt</p>
          <p class="item_amount">
            $120 x 2
            <span class="item_total">$240</span>
          </p>
        </div>
        <div class="cart_remove">
          <p>X</p>
        </div>
      </div>
      <div class="cart_body">
        <img src="../assets/img/product-3.jpg" />
        <div class="cart_item">
          <p class="item_name">Colorful Stylish Shirt</p>
          <p class="item_amount">
            $120 x 2
            <span class="item_total">$240</span>
          </p>
        </div>
        <div class="cart_remove">
          <p>X</p>
        </div>
      </div>

      <p class="empty_cart">
        <!-- <em>Your Cart is Empty</em> -->
      </p>

      <div class="check">
        <div class="checkout_button">
          <p>Checkout</p>
        </div> 
      </div>
    </section>
  </teleport>
</template>

<script>
export default {};
</script>

<style></style>

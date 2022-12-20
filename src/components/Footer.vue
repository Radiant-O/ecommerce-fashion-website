<template>
  <footer>
    <div class="footer">
    <div class="abt_comp_foot">
      <div class="logo">LAZ STORE</div>
      <p class="comp_text">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint odio
        consequuntur quae repellendus autem harum quos vitae.
      </p>
      <p>121, Street Australia</p>
      <p>info@lasser.com</p>
      <p>+0123 546 7890</p>
    </div>
    <div class="footer_links">
      <ul>
        <p class="top">Quick Links</p>
        <li>Home</li>
        <li>Our Shop</li>
        <li>Shop Details</li>
        <li>Shopping Cart</li>
        <li>CheckOut</li>
        <li>Contact Us</li>
      </ul>
      <ul>
        <p class="top">Services</p>
        <li>Export</li>
        <li>Import</li>
        <li>Trending</li>
        <li>New Arrivals</li>
        <li>CheckOut</li>
        <li>Contact Us</li>
      </ul>
    </div>
    <div class="footer_newletter">
      <form @submit.prevent="" class="form">
        <h4>Newsletter</h4>
        <div class="news_input">
          <input type="text" placeholder="Your Name" />
        </div>
        <div>
          <input type="text" placeholder="Your Email" />
        </div>
        <button class="form_btn">Subscribe Now</button>
      </form>
    </div>
</div>
<div class="site_bottom">
    <p>&copy Laz Fashion Store, All Rights Reserved. Design by <em>RADIANTCODES</em></p>
    <p><img src="../assets/img/payments.png" alt=""></p>
</div>
  </footer>
</template>

<script>
export default {};
</script>

<style></style>

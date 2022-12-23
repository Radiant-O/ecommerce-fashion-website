<!-- eslint-disable vue/valid-template-root -->
<!-- eslint-disable prettier/prettier -->
<template>
  <section class="contacts">
    <h3>Contact Us</h3>
    <div class="contact_box">
    <div class="contact_form">
      <form action="" @submit.prevent="">
        <div class="inputs">
          <input type="text" placeholder="Your Name" required />
        </div>
        <div class="inputs">
          <input type="email" placeholder="Your Email" required />
        </div>
        <div class="inputs">
          <input type="text" placeholder="Your Subject" />
        </div>
        <div class="inputs">
          <textarea cols="20" rows="8" required></textarea>
        </div>
        <button class="form_btn">SEND MESSAGE</button>
      </form>
    </div>
    <div class="contact_info">
      <div class="about">
        <h5>Get In Touch</h5>
        <p>
          Bla bla bum blabla... God Bless PDAPCC... Bla blummm blumm bu blabla,
          Bla bla bum blabla... God Bless PDAPCC... Bla blummm blumm bu blabla,
          Bla bla bum blabla... God Bless PDAPCC... Bla blummm blumm bu blabla,
          Bla bla bum blabla... God Bless PDAPCC... Bla blummm blumm bu blabla.
        </p>
      </div>
      <div class="stores">
        <h4>Store 1</h4>
        <div class="p">
        <p>
          <img src="../assets/icons/icons8-place-marker-100.png" /> 121, Street
          Australia
        </p>
        <p>
          <img src="../assets/icons/icons8-envelope-60.png" /> info@lasser.com
        </p>
        <p><img src="../assets/icons/icons8-call-48.png" /> +0123 546 7890</p>
    </div>
<div class="p">
        <h4>Store 2</h4>
        <p>
          <img src="../assets/icons/icons8-place-marker-100.png" /> 121, Street
          Australia
        </p>
        <p>
          <img src="../assets/icons/icons8-envelope-60.png" /> info@lasser.com
        </p>
        <p><img src="../assets/icons/icons8-call-48.png" /> +0123 546 7890</p>
    </div>
      </div>
    </div>
</div>
    <!-- <div class="socials">
      <img src="../assets/icons/icons8-facebook-96.png" />
      <img src="../assets/icons/icons8-instagram-128.png" />
      <img src="../assets/icons/icons8-linkedin-96.png" />
      <img src="../assets/icons/icons8-twitter-96.png" />
      <img src="../assets/icons/icons8-youtube-96.png" />
    </div> -->
  </section>
</template>

<script>
export default {};
</script>

<style></style>

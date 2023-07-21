<script>
import Header from './HeaderView.vue'
import Footer from './FooterView.vue'

export default {
  name: 'HomeView',
  components: {
    Header,
    Footer
  }
}
</script>


<template>
  <Header></Header>

  <div>
    <div id="hero-image-container">
      <img id="hero-image" src="../assets/images/hero-image.jpg">
      <div class="promotion">-10%/first purchase</div>
    </div>

    <div class="bestselling">Discover our Bestselling Products</div>
    <div class="bestselling-products">
      <div class="bestselling-detail">
        <img class="bestselling-shampoo" src="../assets/images/shampoo1.jpg">
        <div class="bestselling-text">Product name</div>
        <div class="bestselling-text">Price</div>
      </div>
      <div class="bestselling-detail">
        <img class="bestselling-shampoo" src="../assets/images/shampoo2.jpg">
        <div class="bestselling-text">Product name</div>
        <div class="bestselling-text">Price</div>
      </div>
      <div class="bestselling-detail">
        <img class="bestselling-shampoo" src="../assets/images/shampoo3.jpg">
        <div class="bestselling-text">Product name</div>
        <div class="bestselling-text">Price</div>
      </div>
      <div class="bestselling-detail">
        <img class="bestselling-shampoo" src="../assets/images/shampoo4.jpg">
        <div class="bestselling-text">Product name</div>
        <div class="bestselling-text">Price</div>
      </div>
      <div class="bestselling-detail">
        <img class="bestselling-shampoo" src="../assets/images/shampoo5.jpg">
        <div class="bestselling-text">Product name</div>
        <div class="bestselling-text">Price</div>
      </div>
      <div class="bestselling-detail">
        <img class="bestselling-shampoo" src="../assets/images/shampoo1.jpg">
        <div class="bestselling-text">Product name</div>
        <div class="bestselling-text">Price</div>
      </div>
      <div class="bestselling-detail">
        <img class="bestselling-shampoo" src="../assets/images/shampoo2.jpg">
        <div class="bestselling-text">Product name</div>
        <div class="bestselling-text">Price</div>
      </div>
      <div class="bestselling-detail">
        <img class="bestselling-shampoo" src="../assets/images/shampoo3.jpg">
        <div class="bestselling-text">Product name</div>
        <div class="bestselling-text">Price</div>
      </div>
      <div class="bestselling-detail">
        <img class="bestselling-shampoo" src="../assets/images/shampoo4.jpg">
        <div class="bestselling-text">Product name</div>
        <div class="bestselling-text">Price</div>
      </div>
      <div class="bestselling-detail">
        <img class="bestselling-shampoo" src="../assets/images/shampoo5.jpg">
        <div class="bestselling-text">Product name</div>
        <div class="bestselling-text">Price</div>
      </div>
    </div>
  </div>

  <Footer></Footer>
</template>



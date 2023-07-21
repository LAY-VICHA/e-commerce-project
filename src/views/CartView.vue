<script>
import axios from 'axios';
import Header from './HeaderView.vue'
import Footer from './FooterView.vue'

export default {
  name: 'CartView',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      jsonData: null,
    };
  },
  mounted() {
    axios
      .get('http://localhost:3000/api/data')
      .then(response => {
        this.jsonData = response.data;
      })
      .catch(error => {
        console.error(error);
      });
  },
};
</script>

<template>
  <Header></Header>

  <!-- content -->
  <div class="cart-content">
    <div class="cart">
      <h3> Your Cart </h3>
      <hr>
      <div class="cart-header">
        <p> Item </p>
        <p> Price </p>
        <p> Quantity </p>
      </div>
      <div class="cart-items">
        <div class="cart-details">
          <div class="product-img">
            <img src="../assets/images/product-mainimage.png" class="cart-product">
            <div class="product-desc">
              <div class="cart-text">La mousse de rouge Framboise</div>
              <div class="cart-text"> Size: S </div>
              <div class="cart-text"> Scent: Coconut </div>
            </div>

          </div>
          <div class="price"> $20.00</div>
          <div class="quantity"> 1 </div>
        </div>

        <div class="cart-details">
          <div class="product-img">
            <img src="../assets/images/product-page-image1.png" class="cart-product">
            <div class="product-desc">
              <div class="cart-text">La mousse de rouge Framboise</div>
              <div class="cart-text"> Size: S </div>
              <div class="cart-text"> Scent: Coconut </div>
            </div>

          </div>
          <div class="price"> $20.00</div>
          <div class="quantity"> 1 </div>
        </div>

        <div class="cart-details">
          <div class="product-img">
            <img src="../assets/images/product-page-image2.png" class="cart-product">
            <div class="product-desc">
              <div class="cart-text">La mousse de rouge Framboise</div>
              <div class="cart-text"> Size: S </div>
              <div class="cart-text"> Scent: Coconut </div>
            </div>

          </div>
          <div class="price"> $20.00</div>
          <div class="quantity"> 1 </div>
        </div>

        <div class="cart-details">
          <div class="product-img">
            <img src="../assets/images/product-page-image3.png" class="cart-product">
            <div class="product-desc">
              <div class="cart-text">La mousse de rouge Framboise</div>
              <div class="cart-text"> Size: S </div>
              <div class="cart-text"> Scent: Coconut </div>
            </div>

          </div>
          <div class="price"> $20.00</div>
          <div class="quantity"> 1 </div>
        </div>
      </div>


      <hr>
      <div class=subtotal>
        <div class="cart-text"> Subtotal: </div>
        <div class="cart-text"> $20.00 </div>
      </div>
      <hr>
    </div>
    <div class="summary">
      <h3> Summary </h3>
      <hr>
      <div class=" summary-details">
        <p> Subtotal </p>
        <p> $20.00 </p>
      </div>
      <div class=" summary-details">
        <p> Shipping </p>
        <p> - </p>
      </div>
      <div class=" summary-details">
        <p>Taxes </p>
        <p> - </p>
      </div>
      <hr>
      <div class="summary-details">
        <p> Total </p>
        <p> $20.00 </p>
      </div>
      <div class="cart-page-checkout-btn-container">
        <router-link to="/checkout">
        <button id="cart-page-checkout-btn"> Checkout </button>
      </router-link>
      </div>
      
    </div>
  </div>

  <Footer></Footer>
</template>

<style scoped>
  @import '../assets/css/cart.css';
</style>
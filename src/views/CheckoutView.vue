<script>
import axios from 'axios';
import Header from './HeaderView.vue'
import Footer from './FooterView.vue'

export default {
  name: 'CheckoutView',
  components: {
    Header,
    Footer,
  },
};

</script>

<template>
  <div>
    <Header></Header>

    <div class="path"> Cart > <span class="current-path">Customer Information </span> > Shipping Information > Payment
      method </div>
    <!-- content -->
    <div class="checkout-page-content">
      <div class="checkout">
        <form>
          <h3> Customer Information </h3>
          <input type="email" name="email" class="input-line " placeholder="Email">
          <hr>
          <h3> Shipping Information </h3>
          <div class="customer-name">
            <input type="text" name="firstname" class="input-line" placeholder="Firstname">
            <input type="text" name="lastname" class="input-line" placeholder="Lastname">
          </div>
          <div class="customer-name">
            <input type="text" name="phonenumber" class="input-line" placeholder="Phone number">
          </div>
          <div class="customer-name">
            <input type="text" name="address" class="input-line" placeholder="Address">
            <input type="text" name="apt" class="input-line" placeholder="Apt.Optional">
          </div>

          <div class="customer-name">
            <select class="input-line" name="country" placeholder="Country">
              <option value="" disabled selected>Select Country</option>
              <option value="Cambodia"> Cambodia </option>
              <option value="France"> France </option>
              <option value="United Kingdom"> United Kingdom</option>
              <!-- Add more options for countries -->
            </select>
            <select class="input-line" name="state" placeholder="State">
              <option value="" disabled selected>Select State</option>
              <option value="Phnom Penh"> Phnom Penh </option>
              <option value="Paris"> Paris </option>
              <option value="London"> London </option>
              <!-- Add more options for states -->
            </select>
            <input type="text" name="zip" class="input-line" placeholder="Zip">
          </div>

          <hr>

          <div class="customer-footer">
            <router-link to="/cart" tag="div" class="return-cart">
              &lt; Return to Cart
            </router-link>
            <router-link to="/shipping" tag="div">
              <button class="shipping-btn"> continue to shipping method </button>
            </router-link>
          </div>
        </form>
      </div>

      <div class="checkout-summary">
        <h3> Summary </h3>
        <hr>
        <div class="checkout-summary-form">
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
          <!-- <div class="discount-details">
              <div>
                <p> Gift card or discount code </p>
              </div>
              <div class="discount">
                <input type="text" name="code" class="input-line">
                <button class="code-apply-btn"> Apply </button>
              </div>
            </div> -->
          <hr>
          <div class="summary-details">
            <p class="total"> Total </p>
            <p class="total"> $20.00 </p>
          </div>
          <!-- <router-link to="/checkout">
              <button class="btn"> Checkout </button>
          </router-link> -->
        </div>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>

<style scoped>
@import '../assets/css/checkout.css';
</style>
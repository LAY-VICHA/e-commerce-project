<script>
import axios from 'axios';
import Header from './headerView.vue'
import Footer from './FooterView.vue'

export default {
  name: 'CheckoutView',
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
  <div>
    <Header></Header>

    <!-- content -->
    <div class="checkout-page-content">
      <div class="cart">
        <p class="path"> Cart > <span class="customer-info"> Customer Information </span> > Shipping Information > Payment
          method </p>
        <hr>
        <h3> Customer Information </h3>


        <form>
          <input type="email" name="email" class="input-line" placeholder="Email">
          <hr>
          <h3> Shipping Information </h3>
          <div class="customer-name">
            <input type="name" name="email" class="input-line" placeholder="Firstname">
            <input type="name" name="email" class="input-line" placeholder="Lastname">
          </div>
          <div class="customer-name">
            <input type="name" name="email" class="input-line" placeholder="Company(Optional)">
          </div>
          <div class="customer-name">
            <input type="name" name="email" class="input-line" placeholder="Address">
            <input type="name" name="email" class="input-line" placeholder="Apt.Optional">
          </div>
          <!-- <div class="customer-name">
                <input type="name" name="email" class="input-line" placeholder="Country">
                <input type="name" name="email" class="input-line" placeholder="State">
                <input type="name" name="email" class="input-line" placeholder="Zip">
              </div> -->

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
            <input type="name" name="zip" class="input-line" placeholder="Zip">
          </div>

          <hr>

          <div class="customer-footer">
            <a class="path"> &lt; Return to Cart</a>
            <button class="shipping-btn"> continue to shipping method </button>
          </div>
        </form>



      </div>

      <div class="summary">
        <h3> Summary </h3>
        <hr>
        <form>
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
          <div class="discount-details">
            <div>
              <p> Gift card or discount code </p>
            </div>
            <div class="discount">
              <input type="text" name="discount-code" class="input-line">
              <button class="btn"> Apply </button>
            </div>
          </div>
        </form>
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
    <hr>

    <Footer></Footer>
  </div>
</template>

<style scoped>
  @import '../assets/css/checkout.css'
</style>
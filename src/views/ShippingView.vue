<script>
import Header from './HeaderView.vue'
import Footer from './FooterView.vue'

export default {
  name: 'ShippingView',
  components: {
    Header,
    Footer,
  },
};
</script>

<template>
  <Header></Header>

  <div class="path"> Cart > Customer Information > <span class="current-path"> Shipping Information </span> > Payment
    method </div>
  <!-- content -->
  <div class="shipping-page-content">
    <div class="shipping">
      <form>
        <div class="shipping-address-info">
          <div class="shipping-address bold">Shipping address </div>
          <div class="shipping-address">12 Waldo Point Road, Minshauken NY 11200</div>
        </div>

        <div class="shipping-method">Shipping Method</div>
        <input type="radio" id="ups-ground" name="shipping" value="ups-ground">
        <label for="ups-ground">UPS Ground</label><br>
        <input type="radio" id="ups-3day-select" name="shipping" value="ups-3day-select">
        <label for="ups-3day-select">UPS 3 Day Select</label><br>
        <input type="radio" id="ups-2nd-day" name="shipping" value="ups-2nd-day">
        <label for="ups-2nd-day">UPS 2nd Day Air</label><br>
        <input type="radio" id="ups-next-day" name="shipping" value="ups-next-day">
        <label for="ups-next-day">UPS Next Day Air</label><br>

        <hr>

        <div class="shipping-footer">
          <router-link to="/checkout" tag="div" class="return-cart">
            &lt; Return to Customer Information
          </router-link>
          <router-link to="/payment" tag="div">
            <button class="shipping-btn"> continue to payment method </button>
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
        <!-- <hr>
          <div class="discount-details">
          <div>
            <p> Gift card or discount code </p>
          </div>
          <div class="discount">
            <input type="text" name="discount-code" class="input-line">
            <button class="code-apply-btn"> Apply </button>
          </div>
        </div> -->
      </div>
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

  <Footer></Footer>
</template>


<style scoped>
@import '../assets/css/shipping.css';
</style>
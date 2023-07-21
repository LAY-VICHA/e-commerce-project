<script>
import Header from './HeaderView.vue'
import Footer from './FooterView.vue'

export default {
  name: 'PaymentView',
  components: {
    Header,
    Footer,
  },
};
</script>

<template>
  <Header></Header>

  <div class="path"> Cart > Customer Information > Shipping Information > <span class="current-path"> Payment
      method</span> </div>

  <div class="payment-page-content">
    <div class="payment">
      <div class="shipping-address-info">
        <div class="address-info">
          <div class="shipping-address bold">Shipping address </div>
          <div class="shipping-address">12 Waldo Point Road, Minshauken NY 11200</div>
        </div>
        <div class="shipping-address">Edit</div>
      </div>

      <div class="shipping-address-info">
        <div class="shipping-info">
          <div class="shipping-address bold">Shipping Method </div>
          <div class="shipping-address">UPS Ground, $2.20</div>
        </div>
        <div class="shipping-address">Edit</div>
      </div>

      <!--  -->
      <form>
        <div>
          <div class="payment-section-container">
            <div class="payment-method">
              <h3> Payment method</h3>
              <div class="payment-icon-container">
                <img class="payment-icon" src="../assets/images/visa-card.png">
                <img class="payment-icon" src="../assets/images/master-card.png">
                <img class="payment-icon" src="../assets/images/american-express.png">
              </div>
            </div>

            <div>
              <input type="text" name="cardNumber" class="input-line" placeholder="Card number">
            </div>
            <div class="payment-details">
              <input type="text" name="nameOfCard" class="input-line" placeholder="Name of card">
              <input type="date" name="date" class="input-line" placeholder="YYYY-MM-DD">
              <input type="text" name="cvv" class="input-line" placeholder="CVV">
            </div>
          </div>

          <hr>

          <div class="payment-section-container">
            <div class="payment-method">
              <h3> Billing Address </h3>
            </div>
            <div class="bill-input">
              <input type="radio" name="address" value="shipping-address" id="shipping-address" class="input-radio">
              <label for="shipping-address"> Same as shipping address </label>
            </div>
            <div class="bill-input">
              <input type="radio" name="address" value="billing-address" id="billing-address" class="input-radio">
              <label for="billing-address"> Use a different billing address </label>
            </div>
          </div>
        </div>

        <div class="payment-section-container">
          <div class="payment-method">
            <h3> Remember Me </h3>
          </div>
          <div class="bill-input">
            <input type="checkbox" name="remember" value="remember" id="remember" class="checkbox-radio">
            <label for="remember"> Same as shipping address </label>
          </div>
        </div>

        <hr>
        <div class="payment-footer">
          <router-link to="/shipping" tag="div" class="return-cart">
            &lt; Return to Shipping Information
          </router-link>
          <router-link to="/confirm" tag="div">
            <button class="shipping-btn"> Pay now </button>
          </router-link>
        </div>
      </form>
    </div>

    <div class="checkout-summary">
      <h3> Summary </h3>
      <hr>
      <form class="checkout-summary-form">
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
        <div class=" summary-details">
          <p>Discount </p>
          <p> 10% </p>
        </div>
        <hr>
        <div class="discount-details">
          <div>
            <p> Gift card or discount code </p>
          </div>
          <div class="discount">
            <input type="text" name="discount-code" class="input-line">
            <button class="code-apply-btn"> Apply </button>
          </div>
        </div>
      </form>
      <hr>
      <div class="summary-details">
        <p class="total"> Total </p>
        <p class="total"> $18.00 </p>
      </div>
    </div>
  </div>

  <Footer></Footer>
</template>

<style scoped>
@import '../assets/css/payment.css';
</style>
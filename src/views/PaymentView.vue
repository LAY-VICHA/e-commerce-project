<script>
import axios from 'axios';
import Header from './HeaderView.vue'
import Footer from './FooterView.vue'

export default {
  name: 'PaymentView',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      order: {},
      shi_id: '',
      shippingMethods: [],
      address: '',
      shippingType: {},
      newTotal: '',
      err: '',
      disocunt: {},
      amount: '',

      code: '',
      cardNumber: '',
      nameOfCard: '',
      date: '',
      cvv: '',
      address: '',
      remember: '',
    }
  },
  created() {
    this.getOrder();
  },
  methods: {
    getOrder() {
      const userId = JSON.parse(localStorage.getItem('user')).user.id;
      axios.get(`http://localhost:8000/api/orders/unpaid/${userId}`)
        .then(response => {
          if (response.data[0] == null) {
            alert("you haven't checkout yet ")
            this.$router.push(`/cart`);
          } else {
            this.order = response.data[0];
            this.shi_id = response.data[0].shi_id
            if (response.data[0].cus_id == null) {
              alert("you haven't fill the customer information yet")
              this.$router.push(`/checkout`);
            }
            if (response.data[0].shi_id == null) {
              alert("you haven't select the shipping method yet")
              this.$router.push(`/shipping`);
            }
            if (response.data[0].dis_id != null) {
              this.getDiscount(response.data[0].dis_id)
            }

            this.getAddress(response.data[0].cus_id);
            this.getShippingType(response.data[0].shi_id);
            this.newTotal = response.data[0].total
          }
        })
        .catch(error => {
          console.error(error);
        });
    },

    getAddress(cus_id) {
      axios.get(`http://localhost:8000/api/customerinformation/${cus_id}`)
        .then(response => {
          this.address = response.data.address
        })
        .catch(error => {
          console.error(error);
        });
    },

    getShippingType(shi_id) {
      axios.get(`http://localhost:8000/api/shippingmethods/${shi_id}`)
        .then(response => {
          this.shippingType = response.data
        })
        .catch(error => {
          console.error(error);
        });
    },

    getDiscount(dis_id) {
      axios.get(`http://localhost:8000/api/discounts/${dis_id}`)
        .then(response => {
          this.discount = response.data
          this.amount = response.data.amount
          this.newTotal = (parseFloat(this.order.total) * (100 - parseFloat(this.discount.amount)) / parseFloat(100)).toFixed(2)
        })
        .catch(error => {
          console.error(error);
        });
    },

    addDiscount() {
      axios.get(`http://localhost:8000/api/discounts/search/${this.code}`)
        .then(response => {
          console.log(response.data);
          if (Object.keys(response.data).length !== 0) {
            this.discount = response.data
            this.amount = response.data.amount
            this.err = '';
            this.updateOrderTable();
          } else {
            this.err = 'The code you provide is not exist'
          }
        })
        .catch(error => {
          console.error(error);
        });
    },

    updateOrderTable() {
      const updateData = {
        dis_id: this.discount.id,
      }

      axios.put(`http://localhost:8000/api/orders/${this.order.id}`, updateData)
        .then(response => {
          if (response.data != null) {
            console.log("update successfully: ", updateData);
            this.newTotal = (parseFloat(this.order.total) * (100 - parseFloat(this.discount.amount)) / parseFloat(100)).toFixed(2)
          }
        })
        .catch(error => {
          console.error(error);
        });
    },

    pay() {
        const updateData = {
          total: this.newTotal,
        }

        axios.put(`http://localhost:8000/api/orders/${this.order.id}`, updateData)
        .then(response => {
          if (response.data != null) {
            console.log("Order update Successfully!! ", updateData);
            this.payment();
          }
        })
        .catch(error => {
          console.error(error);
        });
    },
    
    payment() {
      const userId = JSON.parse(localStorage.getItem('user')).user.id;
      axios.post(`http://localhost:8000/api/carts/pay/${userId}`, )
        .then(response => {
          if (response.data != null) {
            console.log(response.data.message);
            this.$router.push(`/confirm/${this.order.id}`);
          }
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
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
          <div class="shipping-address">{{ this.address }}</div>
        </div>
        <!-- <div class="shipping-address">Edit</div> -->
      </div>

      <div class="shipping-address-info">
        <div class="shipping-info">
          <div class="shipping-address bold">Shipping Method </div>
          <div class="shipping-address">{{ this.shippingType.type }}, ${{ this.shippingType.price }}</div>
        </div>
        <!-- <div class="shipping-address">Edit</div> -->
      </div>

      <!--  -->
      <form @submit.prevent="pay">
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
              <input type="text" v-model="cardNumber" class="input-line" placeholder="Card number" required>
            </div>
            <div class="payment-details">
              <input type="text" v-model="nameOfCard" class="input-line" placeholder="Name of card" required>
              <input type="date" v-model="date" class="input-line" placeholder="YYYY-MM-DD" required>
              <input type="text" v-model="cvv" class="input-line" placeholder="CVV" required>
            </div>
          </div>

          <hr>

          <div class="payment-section-container">
            <div class="payment-method">
              <h3> Billing Address </h3>
            </div>
            <div class="bill-input">
              <input type="radio" v-model="address" value="shipping-address" id="shipping-address" class="input-radio">
              <label for="shipping-address"> Same as shipping address </label>
            </div>
            <div class="bill-input">
              <input type="radio" v-model="address" value="billing-address" id="billing-address" class="input-radio">
              <label for="billing-address"> Use a different billing address </label>
            </div>
          </div>
        </div>

        <div class="payment-section-container">
          <div class="payment-method">
            <h3> Remember Me </h3>
          </div>
          <div class="bill-input">
            <input type="checkbox" v-movel="remember" value="remember" id="remember" class="checkbox-radio">
            <label for="remember"> Same as shipping address </label>
          </div>
        </div>

        <hr>
        <div class="payment-footer">
          <router-link to="/shipping" tag="div" class="return-cart">
            &lt; Return to Shipping Information
          </router-link>
          <button class="shipping-btn" type="submit"> Pay now </button>
        </div>
      </form>
    </div>

    <div class="checkout-summary">
      <h3> Summary </h3>
      <hr>
      <div class="checkout-summary-form">
        <div class=" summary-details">
          <p> Subtotal </p>
          <p> ${{ this.order.subtotal }} </p>
        </div>
        <div class=" summary-details">
          <p> Shipping </p>
          <p> ${{ this.shippingType.price }} </p>
        </div>
        <div class=" summary-details">
          <p>Taxes </p>
          <p> ${{ this.order.tax }} </p>
        </div>
        <div class=" summary-details">
          <p>Discount </p>
          <p> %{{ this.amount }} </p>
        </div>
        <hr>
        <div class="discount-details">
          <div>
            <p> Gift card or discount code </p>
          </div>
          <form @submit.prevent="addDiscount">
            <div class="discount">
              <input type="text" v-model="code" class="input-line">
              <button class="code-apply-btn" type="submit"> Apply </button>
            </div>
            <p> {{ this.err }}</p>
          </form>

        </div>
      </div>
      <hr>
      <div class="summary-details">
        <p class="total"> Total </p>
        <p class="total"> ${{ this.newTotal }} </p>
      </div>
    </div>
  </div>

  <Footer></Footer>
</template>

<style scoped>
@import '../assets/css/payment.css';
</style>
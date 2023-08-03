<script>
import axios from 'axios';
import Header from './HeaderView.vue'
import Footer from './FooterView.vue'

export default {
  name: 'ShippingView',
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

      price: 0,
      newTotal: 0,
    }
  },
  created() {
    this.getOrder();
    this.fetchShippingMethod();
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
            this.getAddress(response.data[0].cus_id);
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

    fetchShippingMethod() {
      axios.get(`http://localhost:8000/api/shippingmethods`)
        .then(response => {
          this.shippingMethods = response.data
        })
        .catch(error => {
          console.error(error);
        });
    },

    addShippingMethod() {
      axios.get(`http://localhost:8000/api/shippingmethods/${this.shi_id}`)
        .then(response => {
          console.log(response.data.price);
          this.addToOrder(response.data.price);
        })
        .catch(error => {
          console.error(error);
        });
    },

    addToOrder(price) {
      // console.log(this.order.subtotal);
      // console.log(this.order.tax);
      // console.log(price);
      this.newTotal = parseFloat(this.order.subtotal) +  parseFloat(this.order.tax) +  parseFloat(price);
      // console.log(this.newTotal);
      const updateData = {
        shi_id: this.shi_id,
        total: this.newTotal,
      }

      axios.put(`http://localhost:8000/api/orders/${this.order.id}`, updateData)
        .then(response => {
          console.log('update order successfully:', updateData);
          this.$router.push(`/payment`);
        })
        .catch(error => {
          console.error(error);
        });
    },
  }
};
</script>

<template>
  <Header></Header>

  <div class="path"> Cart > Customer Information > <span class="current-path"> Shipping Information </span> > Payment
    method </div>
  <!-- content -->
  <div class="shipping-page-content">
    <div class="shipping">
      <form @submit.prevent="addShippingMethod">
        <div class="shipping-address-info">
          <div class="shipping-address bold">Shipping address </div>
          <div class="shipping-address">{{ this.address }}</div>
        </div>

        <div class="shipping-method">Shipping Method</div>
        <div v-for="shipping in shippingMethods" :key="shipping.id">
          <input type="radio" v-model="shi_id" :value="shipping.id" :check="this.shi_id === shipping.id">
          <label class="shipping-radio-btn">{{ shipping.type }}</label><br>
        </div>


        <hr>

        <div class="shipping-footer">
          <router-link to="/checkout" tag="div" class="return-cart">
            &lt; Return to Customer Information
          </router-link>
          <button class="shipping-btn" type="submit"> continue to payment method </button>
        </div>
      </form>
    </div>

    <div class="checkout-summary">
      <h3> Summary </h3>
      <hr>
      <div class="checkout-summary-form">
        <div class=" summary-details">
          <p> Subtotal </p>
          <p> ${{ order.subtotal }} </p>
        </div>
        <div class=" summary-details">
          <p> Shipping </p>
          <p> - </p>
        </div>
        <div class=" summary-details">
          <p>Taxes </p>
          <p> ${{ order.tax }} </p>
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
        <p class="total"> ${{ order.total }} </p>
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
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
  data() {
    return {
      order: {},
      cus_id: '',
      customerInformation: {},

      email: '',
      firstname: '',
      lastname: '',
      phonenumber: '',
      address: '',
      apt: '',
      country: '',
      state: '',
      zip: '',
    }
  },
  created() {
    // Call the API when the component is created
    this.getOrder();
    // Call the function for each product when the component is created
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
            this.cus_id = response.data[0].cus_id
            if (response.data[0].cus_id != null) {
              this.getCustomerInformation();
            }
          }
        })
        .catch(error => {
          console.error(error);
        });
    },

    getCustomerInformation() {
      axios.get(`http://localhost:8000/api/customerinformation/${this.cus_id}`)
        .then(response => {
          this.email = response.data.email
          this.firstname = response.data.firstname
          this.lastname = response.data.lastname
          this.phonenumber = response.data.phonenumber
          this.address = response.data.address
          this.apt = response.data.apt
          this.country = response.data.country
          this.state = response.data.state
          this.zip = response.data.zip
        })
        .catch(error => {
          console.error(error);
        });
    },

    addCustomerInformation() {
      const data = {
        email: this.email,
        firstname: this.firstname,
        lastname: this.lastname,
        phonenumber: this.phonenumber,
        address: this.address,
        apt: this.apt,
        country: this.country,
        state: this.state,
        zip: this.zip,
      }
      if (this.cus_id == null) {
        axios.post(`http://localhost:8000/api/customerinformation`, data)
          .then(response => {
            console.log('Create customer info successfully!!', data)
            this.cus_id = response.data.id;
            this.updateCusidInOrders();
          })
          .catch(error => {
            console.error(error);
          });
      } else {
        const updateData = {
          email: this.email,
          firstname: this.firstname,
          lastname: this.lastname,
          phonenumber: this.phonenumber,
          address: this.address,
          apt: this.apt,
          country: this.country,
          state: this.state,
          zip: this.zip,
        }
        axios.put(`http://localhost:8000/api/customerinformation/${this.cus_id}`, updateData)
          .then(response => {
            console.log('Update customer info successfully!!', data)
            this.$router.push('/shipping');
          })
          .catch(error => {
            console.error(error);
          });
      }
    },

    updateCusidInOrders() {
      const updateData = {
        cus_id: this.cus_id
      }
      axios.put(`http://localhost:8000/api/orders/${this.order.id}`, updateData)
        .then(response => {
          console.log('update cus_id successfully!!', response.data)
          this.$router.push('/shipping');
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
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
        <form @submit.prevent="addCustomerInformation">
          <h3> Customer Information </h3>
          <input type="email" v-model="email" class="input-line " placeholder="Email" required>
          <hr>
          <h3> Shipping Information </h3>
          <div class="customer-name">
            <input type="text" v-model="firstname" class="input-line" placeholder="Firstname" required>
            <input type="text" v-model="lastname" class="input-line" placeholder="Lastname" required>
          </div>
          <div class="customer-name">
            <input type="text" v-model="phonenumber" class="input-line" placeholder="Phone number" required>
          </div>
          <div class="customer-name">
            <input type="text" v-model="address" class="input-line" placeholder="Address" required>
            <input type="text" v-model="apt" class="input-line" placeholder="Apt.Optional">
          </div>

          <div class="customer-name">
            <select class="input-line" v-model="country" placeholder="Country" required>
              <option value="" disabled selected>Select Country</option>
              <option value="Cambodia"> Cambodia </option>
              <option value="France"> France </option>
              <!-- Add more options for countries -->
            </select>
            <select class="input-line" v-model="state" placeholder="State" required>
              <option value="" disabled selected>Select State</option>
              <option value="Phnom Penh"> Phnom Penh </option>
              <option value="Siem Reap"> Siem Reap </option>
              <option value="Battombong"> Battombong </option>
              <option value="Paris"> Paris </option>
              <!-- Add more options for states -->
            </select>
            <input type="text" v-model="zip" class="input-line" placeholder="Zip" required>
          </div>

          <hr>

          <div class="customer-footer">
            <router-link to="/cart" tag="div" class="return-cart">
              &lt; Return to Cart
            </router-link>
            <button class="shipping-btn" type="submit"> continue to shipping method </button>
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
            <p class="total"> ${{ order.total }} </p>
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
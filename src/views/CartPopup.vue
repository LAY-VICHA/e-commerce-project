<script>
import axios from 'axios'

export default {
  props: ['togglePopup'],

  data() {
    return {
      products: [],
    }
  },
  created() {
    // Call the API when the component is created
    this.fetchProducts();
    // Call the function for each product when the component is created
  },
  methods: {
    fetchProducts() {
      const userId = JSON.parse(localStorage.getItem('user')).user.id;
      axios.get(`http://localhost:8000/api/carts/incart/${userId}`) // Replace this with your actual Laravel API endpoint
        .then(response => {
          this.products = response.data;
          console.log(this.products);
        })
        .catch(error => {
          console.error(error);
        });
    },
    checkout() {
      const userId = JSON.parse(localStorage.getItem('user')).user.id;
      axios.get(`http://localhost:8000/api/orders/unpaid/${userId}`)
        .then(response => {
          console.log(response.data);
          if (response.data[0] != null) {
            axios.put(`http://localhost:8000/api/carts/checkout/${userId}`)
              .then(response => {
                console.log(response.data.message);
                this.$router.push(`/checkout`);
              })
              .catch(error => {
                console.error(error);
              });
          } else {
            axios.post(`http://localhost:8000/api/carts/checkout/${userId}`)
              .then(response => {
                console.log(response.data.message);
                this.$router.push(`/checkout`);
              })
              .catch(error => {
                console.error(error);
              });
          }
        })
        .catch(error => {
          console.error(error);
        });
    }
  },
}
</script>

<template>
  <div class="cart-popup">
    <div class="small-triangle"></div>
    <div class="cart-popup-container">
      <div class="cart-title">
        <div class="cart-text">Items added to cart</div>
        <i id="close-cart-btn" @click="togglePopup()" class="fa-solid fa-xmark"></i>
      </div>
      <div>
        <!-- <div class="cart-popup-product-name">MOUSSE DE ROUGE</div> -->
        <ul class="cart-popup-product-list" v-for="product in products" :key="product.id">
          <li class="cart-popup-product-name"> {{ product.product_name }} ( {{ product.product_scent_name }}, {{
            product.product_size_name }})</li>
          <li class="cart-popup-product-detail-container">
            <div class="cart-popup-product-detail">QT: {{ product.quantity }}</div>
            <div class="cart-popup-product-detail">| $ {{ product.subtotal }}</div>
          </li>
        </ul>
      </div>
      <div class="cart-popup-btn-container">
        <router-link to="/cart">
          <button id="cart-popup-view-cart-btn">View cart</button>
        </router-link>
        <button id="cart-popup-check-out-btn" @click="checkout">Check out</button>
      </div>
    </div>
  </div>
</template>
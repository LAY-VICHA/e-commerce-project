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
      products: [],
      subtotal: 0,
      sizestock: 0,
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
      axios.get(`http://localhost:8000/api/carts/incart/${userId}`)
        .then(response => {
          this.products = response.data;
          console.log(this.products);
          this.getPrice();
        })
        .catch(error => {
          console.error(error);
        });
    },
    getImage(imagePath) {
      return `http://localhost:8000/storage/${imagePath}`
    },
    getPrice() {
      this.products.forEach((product) => {
        this.subtotal += parseFloat(product.subtotal)
      })

      if (this.products.length == 0) {
        this.subtotal = 0;
      }

      return this.subtotal
    },
    deleteCart(cartId, sizeId, quantity) {
      //delete the cart
      axios.delete(`http://localhost:8000/api/carts/${cartId}`)
        .then(response => {
          console.log('delete successfully', response);
        })
        .catch(error => {
          console.error(error);
        });


      //get the current stock by size id
      var productStock = 0;
      axios.get(`http://localhost:8000/api/productsizes/${sizeId}`)
        .then(response => {
          console.log(response.data.stock)
          productStock = response.data.stock
          this.updateStock(quantity, productStock, sizeId)
        })
        .catch(error => {
          console.error(error);
        });
    },
    updateStock(quantity, stock, sizeId) {
      this.sizestock = Number(quantity + stock);

      const updateData = {
        stock: this.sizestock
      }

      axios.put(`http://localhost:8000/api/productsizes/${sizeId}`, updateData)
        .then(response => {
          console.log('update successfully:', updateData);
          this.fetchProducts();
        })
        .catch(error => {
          console.error(error);
        });
    },

    checkout() {
      const userId = JSON.parse(localStorage.getItem('user')).user.id;
      axios.post(`http://localhost:8000/api/carts/checkout/${userId}`)
        .then(response => {
          console.log(response.data.message);
          this.$router.push(`/checkout`);
        })
        .catch(error => {
          console.error(error);
        });
    }
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
        <p> Action </p>
      </div>
      <div class="cart-items">
        <div class="cart-details" v-for="product in products" :key="product.id">
          <div class="product-img">
            <img :src="getImage(product.product_image)" class="cart-product">
            <div class="product-desc">
              <div class="cart-text">{{ product.product_name }}</div>
              <div class="cart-text"> Size: {{ product.product_size_name }} </div>
              <div class="cart-text"> Scent: {{ product.product_scent_name }} </div>
            </div>

          </div>
          <div class="price"> $ {{ product.subtotal }}</div>
          <div class="quantity"> {{ product.quantity }} </div>
          <button id="delete-cart" @click="deleteCart(product.id, product.siz_id, product.quantity)">Delete</button>
        </div>
      </div>


      <hr>
      <div class=subtotal>
        <div class="cart-text"> Subtotal: </div>
        <div class="cart-text"> {{ this.subtotal }} </div>
      </div>
      <hr>
    </div>
    <div class="summary">
      <h3> Summary </h3>
      <hr>
      <div class=" summary-details">
        <p> Subtotal </p>
        <p> ${{ this.subtotal }} </p>
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
        <p> ${{ this.subtotal }} </p>
      </div>
      <div class="cart-page-checkout-btn-container">
        <button id="cart-page-checkout-btn" @click="checkout"> Checkout </button>
      </div>

    </div>
  </div>

  <Footer></Footer>
</template>

<style scoped>
@import '../assets/css/cart.css';
</style>
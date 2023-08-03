<script>
import axios from 'axios';
import Header from './HeaderView.vue'
import Footer from './FooterView.vue'

export default {
  name: 'HomeView',
  components: {
    Header,
    Footer
  },

  data() {
    return {
      products: [],
      image: null,
      pro: [],
    };
  },
  created() {
    this.fetchProduct();
  },
  methods: {
    // route to product page
    fetchProduct() {
      axios.get(`http://localhost:8000/api/products`) // Replace this with your actual backend API endpoint to fetch category details
        .then(response => {
          this.products = response.data.slice(0, 10)
        })
        .catch(error => {
          console.error(error);
        });
    },
    getImage(imagePath) {
      return `http://localhost:8000/storage/${imagePath}`
    },

    toProductPage(id) {
      this.$router.push(`/product/${id}`)
    }
  }
}
</script>


<template>
  <Header></Header>

  <div>
    <div id="hero-image-container">
      <img id="hero-image" src="../assets/images/hero-image.jpg">
      <div class="promotion">-10%/first purchase</div>
    </div>

    <div class="bestselling">Discover our Bestselling Products</div>
    <div class="bestselling-products">
      <div class="bestselling-detail" v-for="product in products" :key="product.id" @click="toProductPage(product.id)">
        <img class="bestselling-shampoo" :src="getImage(product.image)">
        <div class="bestselling-text">{{ product.name }}</div>
        <!-- <div class="bestselling-text">Price</div> -->
      </div>
    </div>
  </div>

  <Footer></Footer>
</template>



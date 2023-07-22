<template>
  <header class="header">
    <div class="header-component">
      <div>
        <i class="fa-solid fa-bars"></i>
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
      <div class="store-name">
        Shampoo Store
      </div>
      <div>
        <i class="fa-solid fa-user"></i>
        <i class="fa-solid fa-cart-shopping" @click="() => togglePopup('buttonTrigger')"></i>

        <Popup v-if="popupTrigger.buttonTrigger" :togglePopup="() => togglePopup('buttonTrigger')"></Popup>
      </div>
    </div>
    <div class="header-nav">
      <ul class="header-nav-list">
        <li class="nav-list">
          <router-link class="router-link bold" to="/home">
            Home
          </router-link>
        </li>

        <li class="nav-list" v-for="product_cat in product_cats" :key="product_cat.id">
          <a class="bold" @click="navigateToCategory(product_cat)">
            {{ product_cat.name }}
          </a>
        </li>

        <!-- <li class="nav-list">Conditioner</li> -->
        <li class="nav-list">About us</li>
      </ul>
    </div>
  </header>
</template>

<script>
import axios from 'axios'
import { ref } from 'vue'
import Popup from './cartPopup.vue'
//ref is a special attribute that is used to give a name to a child component or element so that it can be referenced in the parent component. It is used to access the properties and methods of the child component or element from the parent component.

export default {
  name: 'header',
  components: {
    Popup,
  },
  setup() {
    const popupTrigger = ref({
      buttonTrigger: false,
    })

    const togglePopup = (trigger) => {
      popupTrigger.value[trigger] = !popupTrigger.value[trigger]
    }

    return {
      popupTrigger,
      togglePopup,
    }
  },
  data() {
    return {
      product_cats: [],
    }
  },
  created() {
    // Call the API when the component is created
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      axios.get('http://localhost:8000/api/productcategories') // Replace this with your actual Laravel API endpoint
        .then(response => {
          this.product_cats = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
    navigateToCategory(category) {
      this.$router.push(`/categories/${category.id}`);
    },
  }
}
</script>
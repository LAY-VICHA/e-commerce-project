<script>
import axios from 'axios';
import Footer from './FooterView.vue'
// import home from './HomeView.vue'

export default {
    name: 'LandingView',
    components: {
        Footer,
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

<template>
    <header class="header-landing">
        <div class="header-component">
            <div>
                <i class="fa-solid fa-bars"></i>
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <div class="store-name">
                Shampoo Store
            </div>
            <div>
                <router-link class="router-link" to="/login">
                    <button id="login" type="submit">Login</button>
                </router-link>
                <router-link class="router-link" to="/signup">
                    <button id="signup" type="submit">Signup</button>
                </router-link>

            </div>
        </div>
        <div class="header-nav">
            <ul class="header-nav-list">
                <!-- <li class="nav-list">Home</li> -->
                <li class="nav-list" v-for="product_cat in product_cats" :key="product_cat.id">
                    <a class="bold" @click="navigateToCategory(product_cat)">
                        {{ product_cat.name }}
                    </a>
                </li>

                <li class="nav-list">About us</li>
            </ul>
        </div>
        <div class="extend"></div>
    </header>

    <!-- LANDING Page -->

    <div id="landing-page">
        <img id="landing-page-image" src="../assets/images/landingPage.png">
        <div class="landing-page-content">
            <div id="quote">Healthy Hair? <br> Starts here!</div>
            <div id="company-strength">
                Purchase your daily hair product here! with affordable
                <br>
                price, high quality product from around the world
                <br>
                with multi brand
            </div>
            <router-link class="router-link" to="/home">
                <button id="get-start">Get start!</button>
            </router-link>

        </div>
    </div>

    <Footer></Footer>
</template>

<style>
.header-landing {
    margin-top: -203px;
    background-color: #E8DFCA;
}

#login {
    background-color: #B29079;
    color: white;
    font-size: 20px;
    font-weight: 600;
    border: none;
    padding: 6px 20px;
    border-radius: 25px;
    margin-right: 20px;
}

#signup {
    background-color: white;
    color: #B29079;
    font-size: 20px;
    font-weight: 600;
    border: none;
    padding: 6px 20px;
    border-radius: 25px;
}

.extend {
    width: 100%;
    /* height: 10px; */
}

.header-nav-list {
    margin-bottom: 0;
}
</style>
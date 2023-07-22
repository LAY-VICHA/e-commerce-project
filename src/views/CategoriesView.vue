<script>
import axios from 'axios'
import Header from './HeaderView.vue'
import Footer from './FooterView.vue'

export default {
    name: 'CategoriesView',
    components: {
        Header,
        Footer
    },

    data() {
        return {
            products: [],
            image: null,
            pro: null,
        };
    },
    watch: {
        '$route.params.categoryId'(newValue) {
            this.fetchCategory(newValue);
        },
    },
    created() {
        this.fetchCategory();
    },
    methods: {
        // route to product page
        toProductPage() {
            this.$router.push('/productname')
        },
        fetchCategory() {
            const categoryId = this.$route.params.categoryId;
            console.log(categoryId);
            axios.get(`http://localhost:8000/api/products/categories/${categoryId}`) // Replace this with your actual backend API endpoint to fetch category details
                .then(response => {
                    this.products = response.data;
                })
                .catch(error => {
                    console.error(error);
                });
        },

        getImage(imagePath) {
            return `http://localhost:8000/storage/${imagePath}`
        }
    }
}
</script>

<template>
    <Header></Header>

    <div>
        <div class="path">Home > <span class="current-path">Shampoo</span></div>
        <div class="shampoo-products">
            <div class="shampoo" v-for="product in products" :key="product.id"  @click="toProductPage">
                <!-- <img class="shampoo-image" src="../assets/images/shampoo1.jpg">
                <div class="shampoo-text">Product name</div>
                <div class="shampoo-text">Price</div> -->
                <img class="shampoo-image"  :src="getImage(product.image)">
                <div class="shampoo-text">{{ product.name }}</div>
                <div class="shampoo-text">Price</div>
            </div>
        </div>
    </div>

    <Footer></Footer>
</template>
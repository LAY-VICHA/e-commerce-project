<script>
import axios from 'axios'
import Header from './HeaderView.vue'
import Footer from './FooterView.vue'
import { useStore } from 'vuex';

export default {
    name: 'ProductView',
    components: {
        Header,
        Footer
    },
    data() {
        return {
            products: [],
            prod: {},
            scents: [],
            sizes: [],
            pro: null,
            product_id: null,
            price: '',
            stock: '',
            isValid: true,
            err: '',

            sce_id: '',
            siz_id: '',
            quantity: '',
        };
    },
    watch: {
        '$route.params.productId'(newValue) {
            // this.fetchCategory(newValue);
            this.fetchAllProduct();
            this.fetchProduct();
            this.fetchScent();
        },
    },
    created() {
        this.fetchAllProduct();
        this.fetchProduct();
        this.fetchScent();
    },
    methods: {
        fetchAllProduct() {
            axios.get(`http://localhost:8000/api/products`)
                .then(response => {
                    this.products = response.data.slice(0, 10);
                })
                .catch(error => {
                    console.error(error);
                });
        },
        fetchProduct() {
            const product_Id = this.$route.params.productId;
            axios.get(`http://localhost:8000/api/products/${product_Id}`)
                .then(response => {
                    this.prod = response.data;
                })
                .catch(error => {
                    console.error(error);
                });
        },
        fetchScent() {
            const product_Id = this.$route.params.productId;
            axios.get(`http://localhost:8000/api/productscents/products/${product_Id}`)
                .then(response => {
                    this.scents = response.data;
                })
                .catch(error => {
                    console.error(error);
                });
        },
        fetchSize() {
            const scent = this.sce_id
            axios.get(`http://localhost:8000/api/productsizes/scents/${scent}`)
                .then(response => {
                    this.sizes = response.data;
                })
                .catch(error => {
                    console.error(error);
                });
        },

        scentListener() {
            this.siz_id = '';
            this.fetchSize();
        },
        sizeListener() {
            const size = this.siz_id
            axios.get(`http://localhost:8000/api/productsizes/${size}`)
                .then(response => {
                    this.price = response.data.price;
                    this.stock = response.data.stock;
                })
                .catch(error => {
                    console.error(error);
                });
        },
        checkValid() {
            if (this.quantity > this.stock) {
                return this.isValid = false;
            } else {
                return this.isValid = true;
            }
        },
        addToCart() {
            if (this.isValid == true) {
                if (localStorage.getItem('token') != undefined || localStorage.getItem('user') != undefined) {
                    const size = this.siz_id
                    const userId = JSON.parse(localStorage.getItem('user')).user.id
                    const productId = this.$route.params.productId;
                    const scentId = this.sce_id
                    const subtotal = this.price * this.quantity

                    const cart = {
                        user_id: userId,
                        pro_id: productId,
                        sce_id: scentId,
                        siz_id: size,
                        quantity: this.quantity,
                        status: 'in_cart',
                        price: this.price,
                        subtotal: subtotal
                    }
                    axios.post(`http://localhost:8000/api/carts`, cart)
                        .then(response => {
                            console.log('cart created:', response.data);
                            this.$router.push(`/home`);
                        })
                        .catch(error => {
                            console.error(error);
                        });

                    const stockNow = this.stock - this.quantity
                    const decreaseStock = {
                        stock: stockNow
                    }
                    axios.put(`http://localhost:8000/api/productsizes/${size}`, decreaseStock)
                        .then(response => {
                            console.log('update successfully:', decreaseStock);
                        })
                        .catch(error => {
                            console.error(error);
                        });

                    this.err = '';
                } else {
                    alert('You must login first to continue!!');
                    this.$router.push('/login');
                }
            } else {
                return this.err = 'added not successs'
            }
        },
        goBack() {
            this.$router.push(`/home`);
        },
        getImage(imagePath) {
            return `http://localhost:8000/storage/${imagePath}`
        },
        toProductPage(product) {
            this.$router.push(`/product/${product}`);
        },
    }
}

</script>

<template>
    <Header></Header>

    <div class="path">Home > Shampoo > <span class="current-path"> {{ prod.name }} </span></div>
    <div id="product-page">
        <div id="product-image">
            <div id="product-subimage">
                <img id="product-subimage1" :src="getImage(prod.image2)">
                <img id="product-subimage2" :src="getImage(prod.image3)">
                <img id="product-subimage3" :src="getImage(prod.image4)">
            </div>
            <img id="product-mainimage" :src="getImage(prod.image)">
        </div>

        <form @submit.prevent="addToCart">
            <div class="product-name-price">
                <div class="product-name-product-page"> {{ prod.name }} </div>
                <div class="product-price-product-page">{{ price }}</div>
            </div>
            <div class="product-size-scent-quantity">
                <div class="product-page-dropdown-container">
                    <div class="product-page-dropdown-text">Scent</div>
                    <select class="product-page-dropdown" v-model="sce_id" @change="scentListener" required>
                        <option value="" disabled selected>Select Scent</option>
                        <option v-for="scent in scents" :key="scent.id" :value="scent.id">{{ scent.name }}</option>
                    </select>
                </div>
                <div class="product-page-dropdown-container">
                    <div class="product-page-dropdown-text">Size</div>
                    <select class="product-page-dropdown" v-model="siz_id" @change="sizeListener" required>
                        <option value="" disabled selected>Select Size</option>
                        <option v-for="size in sizes" :key="size.id" :value="size.id" :price="size.price">{{ size.name }}
                        </option>
                    </select>
                </div>
                <div>
                    <label for="quantity">Quantity
                        <input id="quantity" v-model="quantity" @change="checkValid()" required>
                    </label>
                    <p v-if="!isValid" class="wrong-credentials">There are only {{ this.stock }} in stock</p>
                    <p class="wrong-credentials">{{ this.err }}</p>
                </div>
            </div>

            <div class="add-cart-btn-container">
                <button id="add-cart-btn" type="submit">Add to cart</button>
                <button id="back-btn" @click="goBack">Back</button>
            </div>

            <div class="product-page-product-description-container">
                <div class="product-page-product-description">Description</div>
                <div class="product-page-product-description-text">
                    {{ prod.description }}
                    <!-- Pigmented and airy, the Mousse de Rouge delicately
                    enhances lips and cheekbones. Its matte and
                    velvety finish brings a touch of chic to your complexion. -->
                </div>
            </div>
        </form>
    </div>

    <div class="product-page-recommend-product">
        <img v-for="product in products" :key="product.id" :src="getImage(product.image)"
            @click="toProductPage(product.id)">
    </div>




    <Footer></Footer>
</template>
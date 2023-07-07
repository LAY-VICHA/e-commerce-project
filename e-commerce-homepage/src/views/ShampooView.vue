<script>
import Header from './HeaderView.vue'
import Footer from './FooterView.vue'

export default {
    name: 'ShampooView',
    components: {
        Header,
        Footer
    },
    methods: {
        toProductPage() {
            this.$router.push('/productname')
        }
    }
}
</script>

<template>
    <Header></Header>

    <div>
        <div class="path">Home > <span class="current-path">Shampoo</span></div>
        <div class="shampoo-products">
            <div class="shampoo" @click="toProductPage">
                <img class="shampoo-image" src="../assets/images/shampoo1.jpg">
                <div class="shampoo-text">Product name</div>
                <div class="shampoo-text">Price</div>
            </div>
            <div class="shampoo">
                <img class="shampoo-image" src="../assets/images/shampoo2.jpg">
                <div class="shampoo-text">Product name</div>
                <div class="shampoo-text">Price</div>
            </div>
            <div class="shampoo">
                <img class="shampoo-image" src="../assets/images/shampoo3.jpg">
                <div class="shampoo-text">Product name</div>
                <div class="shampoo-text">Price</div>
            </div>
            <div class="shampoo">
                <img class="shampoo-image" src="../assets/images/shampoo4.jpg">
                <div class="shampoo-text">Product name</div>
                <div class="shampoo-text">Price</div>
            </div>
            <div class="shampoo">
                <img class="shampoo-image" src="../assets/images/shampoo5.jpg">
                <div class="shampoo-text">Product name</div>
                <div class="shampoo-text">Price</div>
            </div>
            <div class="shampoo">
                <img class="shampoo-image" src="../assets/images/shampoo1.jpg">
                <div class="shampoo-text">Product name</div>
                <div class="shampoo-text">Price</div>
            </div>
            <div class="shampoo">
                <img class="shampoo-image" src="../assets/images/shampoo2.jpg">
                <div class="shampoo-text">Product name</div>
                <div class="shampoo-text">Price</div>
            </div>
            <div class="shampoo">
                <img class="shampoo-image" src="../assets/images/shampoo3.jpg">
                <div class="shampoo-text">Product name</div>
                <div class="shampoo-text">Price</div>
            </div>
            <div class="shampoo">
                <img class="shampoo-image" src="../assets/images/shampoo4.jpg">
                <div class="shampoo-text">Product name</div>
                <div class="shampoo-text">Price</div>
            </div>
            <div class="shampoo">
                <img class="shampoo-image" src="../assets/images/shampoo5.jpg">
                <div class="shampoo-text">Product name</div>
                <div class="shampoo-text">Price</div>
            </div>
            <div class="shampoo">
                <img class="shampoo-image" src="../assets/images/shampoo1.jpg">
                <div class="shampoo-text">Product name</div>
                <div class="shampoo-text">Price</div>
            </div>
            <div class="shampoo">
                <img class="shampoo-image" src="../assets/images/shampoo2.jpg">
                <div class="shampoo-text">Product name</div>
                <div class="shampoo-text">Price</div>
            </div>
            <div class="shampoo">
                <img class="shampoo-image" src="../assets/images/shampoo3.jpg">
                <div class="shampoo-text">Product name</div>
                <div class="shampoo-text">Price</div>
            </div>
            <div class="shampoo">
                <img class="shampoo-image" src="../assets/images/shampoo4.jpg">
                <div class="shampoo-text">Product name</div>
                <div class="shampoo-text">Price</div>
            </div>
            <div class="shampoo">
                <img class="shampoo-image" src="../assets/images/shampoo5.jpg">
                <div class="shampoo-text">Product name</div>
                <div class="shampoo-text">Price</div>
            </div>
            <div class="shampoo">
                <img class="shampoo-image" src="../assets/images/shampoo1.jpg">
                <div class="shampoo-text">Product name</div>
                <div class="shampoo-text">Price</div>
            </div>
            <div class="shampoo">
                <img class="shampoo-image" src="../assets/images/shampoo2.jpg">
                <div class="shampoo-text">Product name</div>
                <div class="shampoo-text">Price</div>
            </div>
            <div class="shampoo">
                <img class="shampoo-image" src="../assets/images/shampoo3.jpg">
                <div class="shampoo-text">Product name</div>
                <div class="shampoo-text">Price</div>
            </div>
            <div class="shampoo">
                <img class="shampoo-image" src="../assets/images/shampoo4.jpg">
                <div class="shampoo-text">Product name</div>
                <div class="shampoo-text">Price</div>
            </div>
            <div class="shampoo">
                <img class="shampoo-image" src="../assets/images/shampoo5.jpg">
                <div class="shampoo-text">Product name</div>
                <div class="shampoo-text">Price</div>
            </div>
        </div>
    </div>

    <Footer></Footer>
</template>
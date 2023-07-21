<template>
    <Header></Header>

    <div class="path">Home > Shampoo > <span class="current-path">product name</span></div>
    <div id="product-page">
        <div id="product-image">
            <div id="product-subimage">
                <img id="product-subimage1" src="../assets/images/product-subimage1.png">
                <img id="product-subimage2" src="../assets/images/product-subimage2.png">
                <img id="product-subimage3" src="../assets/images/product-subimage3.png">
            </div>
            <img id="product-mainimage" src="../assets//images/product-mainimage.png">

        </div>

        <form>
            <div class="product-name-price">
                <div class="product-name-product-page">Product name</div>
                <div class="product-price-product-page">20$</div>
            </div>
            <div class="product-size-scent-quantity">
                <div class="product-page-dropdown-container">
                    <div class="product-page-dropdown-text">Size</div>
                    <select class="product-page-dropdown">
                        <option value="s">S</option>
                        <option value="m">M</option>
                        <option value="l">L</option>
                        <option value="xl">XL</option>
                    </select>
                </div>
                <div class="product-page-dropdown-container">
                    <div class="product-page-dropdown-text">Scent</div>
                    <select class="product-page-dropdown">
                        <option value="ginger">Ginger</option>
                        <option value="strawberry">strawberry</option>
                        <option value="coconut">Coconut</option>
                        <option value="lemon">Lemon</option>
                    </select>
                </div>
                <div>
                    <label for="quantity">Quantity
                        <input id="quantity" name="quantity">
                    </label>
                </div>
            </div>

            <div class="add-cart-btn-container">
                <button id="add-cart-btn">Add to cart</button>
            </div>

            <div class="product-page-product-description-container">
                <div class="product-page-product-description">Description</div>
                <div class="product-page-product-description-text">Pigmented and airy, the Mousse de Rouge delicately
                    enhances lips and cheekbones. Its matte and
                    velvety finish brings a touch of chic to your complexion.</div>
            </div>
        </form>
    </div>

    <div class="product-page-recommend-product">
        <img src="../assets/images/product-page-image1.png">
        <img src="../assets/images/product-page-image2.png">
        <img src="../assets/images/product-page-image3.png">
        <img src="../assets/images/product-page-image4.png">
        <img src="../assets/images/product-page-image5.png">
        <img src="../assets/images/product-page-image1.png">
        <img src="../assets/images/product-page-image2.png">
        <img src="../assets/images/product-page-image3.png">
        <img src="../assets/images/product-page-image4.png">
        <img src="../assets/images/product-page-image5.png">
    </div>




    <Footer></Footer>
</template>

<script>
import Header from './HeaderView.vue'
import Footer from './FooterView.vue'


let productImage = document.getElementById('product-image')
let productSubImage1 = document.getElementById('product-subimage1');
let productSubImage2 = document.getElementById('product-subimage2');
let productSubImage3 = document.getElementById('product-subimage3');

export default {
    name: 'ProductView',
    components: {
        Header,
        Footer
    },
    methods: {

    }
}

</script>


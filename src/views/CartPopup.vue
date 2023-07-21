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
        <ul class="cart-popup-product-list">
          <li class="cart-popup-product-name">MOUSSE DE ROUGE</li>
          <li class="cart-popup-product-detail-container">
            <div class="cart-popup-product-detail">QT: 1</div>
            <div class="cart-popup-product-detail">| $20</div>
          </li>
        </ul>
      </div>
      <div class="cart-popup-btn-container">
        <router-link to="/cart">
          <button id="cart-popup-view-cart-btn">View cart</button>
        </router-link>
        <router-link to="/checkout">
          <button id="cart-popup-check-out-btn">Check out</button>
        </router-link>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  props: ['togglePopup']
};
</script>
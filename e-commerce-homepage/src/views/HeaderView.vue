<script>
export default {
  name: 'header'
}
</script>

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
        <i class="fa-solid fa-cart-shopping"></i>
      </div>
    </div>
    <div class="header-nav">
      <ul class="header-nav-ulist">
        <li class="nav-list">Home</li>
        <li class="nav-list">Category1</li>
        <li class="nav-list">Category2</li>
        <li class="nav-list">About us</li>
      </ul>
    </div>
  </header>
</template>
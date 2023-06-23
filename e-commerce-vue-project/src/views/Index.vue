<template>
<header>
    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/products">Products</RouterLink>
        <button  @click="$emit('checkout')">Go to checkout</button>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
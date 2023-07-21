<script>
import axios from 'axios';
import Header from './HeaderView.vue'
import Footer from './FooterView.vue'

export default {
  name: 'Login',
  data() {
    return {
      jsonData: null,
    };
  },
  components: {
    Header,
    Footer
  },
  mounted() {
    axios
      .get('http://localhost:3000/api/data')
      .then(response => {
        this.jsonData = response.data;
      })
      .catch(error => {
        console.error(error);
      });
  },
};

</script>

<template>
  <!-- <Header></Header> -->

  <!-- content -->
  <div class="content">
    <div>
      <h3> Login </h3>
      <form class="login">
        <div class="input-wrapper">
          <label class="email">Email: </label>
          <input type="email" name="email" class="input-line">
        </div>

        <div class="input-wrapper">
          <label> Password: </label>
          <input type="password" name="password" class="input-line">
        </div>
        <a id="forget-password"> forgot password?</a>

        <div>
          <button type="submit" id="login-btn"> Login </button>
          <a href="/signup" class="acc"> Create an <span class="create-account">account</span></a>
        </div>
      </form>
    </div>
  </div>

  <!-- <Footer></Footer> -->
</template>


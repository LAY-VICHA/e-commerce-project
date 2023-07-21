<script>
import axios from 'axios';
import Header from './HeaderView.vue'
import Footer from './FooterView.vue'

export default {
  name: 'Signup',
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
      <h3> Singup </h3>
      <form class="signup">
        <div class="input-wrapper">
          <label class="username">Username: </label>
          <input type="text" name="username" class="input-line">
        </div>
        <div class="input-wrapper">
          <label class="firstname">Firstname: </label>
          <input type="text" name="firstname" class="input-line">
        </div>
        <div class="input-wrapper">
          <label class="lastname">Lastname: </label>
          <input type="text" name="lastname" class="input-line">
        </div>
        <div class="input-wrapper">
          <label class="email">Email: </label>
          <input type="email" name="email" class="input-line">
        </div>
        <div class="input-wrapper">
          <label class="password"> Password: </label>
          <input type="password" name="password" class="input-line">
        </div>
        <button type="submit" id="signup-btn"> Signup </button>
      </form>
    </div>
  </div>

  <!-- <Footer></Footer> -->
</template>


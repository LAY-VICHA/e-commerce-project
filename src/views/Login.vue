<script>
import axios from 'axios';
import Header from './HeaderView.vue'
import Footer from './FooterView.vue'
import setAuthHeader from '../libs/apis/axiosConfig'

// axios.defaults.withCredentials = true;

export default {
  name: 'Login',
  components: {
    Header,
    Footer
  },

  data() {
    return {
      email: '',
      password: '',
      hasError: false,
    };
  },
  methods: {
    login() {
      const userData = {
        "email": this.email,
        "password": this.password,
      };
      axios.post('http://localhost:8000/api/login', userData)
        .then(response => {
          console.log(response.data);
          if (response.data.message == "Wrong credentials") {
            this.hasError = true;
            console.log('false')
            this.$router.push('/login');
          } else {
            console.log('true')
            // Save the token to local storage after successful login
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data));

            this.hasError = false;
            setAuthHeader(response.data.token);
            // Optionally, you can redirect the user to a dashboard or home page
            this.$router.push('/home');
          }
        })
        .catch(error => {
          console.log(error)
        });
    },
  },
};

</script>

<template>
  <!-- <Header></Header> -->

  <!-- content -->
  <div class="content">
    <div>
      <h3> Login </h3>
      <form class="login" method="POST" @submit.prevent="login">
        <div class="input-wrapper">
          <label class="email">Email: </label>
          <input type="email" v-model="email" class="input-line">

        </div>

        <div class="input-wrapper">
          <label> Password: </label>
          <input type="password" v-model="password" class="input-line">
        </div>
        <a id="forget-password"> forgot password?</a>

        <div>
          <button type="submit" id="login-btn"> Login </button>
          <a href="/signup" class="acc"> Create an <span class="create-account">account</span></a>
        </div>
        <p v-if="hasError" class="wrong-credentials">Error: Wrong credentials</p>
      </form>
    </div>
  </div>

  <!-- <Footer></Footer> -->
</template>


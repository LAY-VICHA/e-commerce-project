<script>
import axios from 'axios';
import Header from './HeaderView.vue'
import Footer from './FooterView.vue'
import setAuthHeader from '../libs/apis/axiosConfig'

export default {
  name: 'Signup',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      firstname: '',
      lastname: '',
      username: '',
      email: '',
      password: '',

      hasError: false,
      err: '',
    };
  },
  methods: {
    register() {
      const data = {
        username: this.username,
        email: this.email,
      };
      console.log(data);
      axios.post('http://localhost:8000/api/register/validate', data)
        .then(response => {
          console.log(response.data);
          if (response.data.message != null) {
            this.err = response.data.message
            this.hasError = true;
            this.$router.push('/signup');
          } else {
            this.hasError = false;
            this.err = '';
            this.registerSuccess();
          }
        })
        .catch(error => {
          console.log(error)
        });
    },

    registerSuccess() {
      const userData = {
        username: this.username,
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        password: this.password,
      };
      console.log(userData);
      axios.post('http://localhost:8000/api/register', userData)
        .then(response => {
          console.log(response.data);
          // Save the token to local storage after successful login
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('user', JSON.stringify(response.data));

          setAuthHeader(response.data.token);
          // Optionally, you can redirect the user to a dashboard or home page
          this.$router.push('/home');
        })
        .catch(error => {
          console.log(error)
        });
    }
  },
};

</script>

<template>
  <!-- <Header></Header> -->

  <!-- content -->
  <div class="content">
    <div>
      <h3> Singup </h3>
      <form class="signup" method="POST" @submit.prevent="register">
        <div class="input-wrapper">
          <label class="username">Username: </label>
          <input type="text" v-model="username" class="input-line" required>
        </div>
        <div class="input-wrapper">
          <label class="firstname">Firstname: </label>
          <input type="text" v-model="firstname" class="input-line" required>
        </div>
        <div class="input-wrapper">
          <label class="lastname">Lastname: </label>
          <input type="text" v-model="lastname" class="input-line" required>
        </div>
        <div class="input-wrapper">
          <label class="email">Email: </label>
          <input type="email" v-model="email" class="input-line" required>
        </div>
        <div class="input-wrapper">
          <label class="password"> Password: </label>
          <input type="password" v-model="password" class="input-line" required>
        </div>
        <button type="submit" id="signup-btn"> Signup </button>
        <p v-if="hasError" class="wrong-credentials">{{ this.err }}</p>
      </form>
    </div>
  </div>

  <!-- <Footer></Footer> -->
</template>


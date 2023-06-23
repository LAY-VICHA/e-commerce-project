<script>
import Footer from './FooterView.vue'
// import home from './HomeView.vue'

export default {
    name: 'LandingView',
    components: {
        Footer,
    }
}
</script>

<template>
    <header class="header-landing">
        <div class="header-component">
            <div>
                <i class="fa-solid fa-bars"></i>
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <div class="store-name">
                Shampoo Store
            </div>
            <div>
                <button id="login" type="submit">Login</button>
                <button id="signup" type="submit">Signup</button>
            </div>
        </div>
        <div class="header-nav">
            <ul class="header-nav-ulist">
                <!-- <li class="nav-list">Home</li> -->
                <li class="nav-list">Category1</li>
                <li class="nav-list">Category2</li>
                <li class="nav-list">About us</li>
            </ul>
        </div>
        <div class="extend"></div>
    </header>

    <!-- LANDING Page -->
    
    <div id="landing-page">
        <img id="landing-page-image" src="../assets/images/landingPage.png">
        <div class="landing-page-content">
            <div id="quote">Healthy Hair? <br> Starts here!</div>
            <div id="company-strength">
                Purchase your daily hair product here! with affordable
                <br>
                price, high quality product  from around the world 
                <br> 
                with multi brand 
            </div>
            <router-link to="/home">
                <button id="get-start">Get start!</button>
            </router-link>
            
        </div>
        
        
    </div>

    <Footer></Footer>
</template>

<style>
.header-landing {
    background-color: #E8DFCA;
}

#login {
    background-color: #B29079;
    color: white;
    font-size: 20px;
    font-weight: 600;
    border: none;
    padding: 6px 20px;
    border-radius: 25px;
    margin-right: 20px;
}

#signup {
    background-color: white;
    color: #B29079;
    font-size: 20px;
    font-weight: 600;
    border: none;
    padding: 6px 20px;
    border-radius: 25px;
}

.extend {
    width: 100%;
    height: 30px;
}
</style>
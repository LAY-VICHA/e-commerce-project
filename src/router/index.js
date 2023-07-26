import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/Signup.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/',
      name: 'landing',
      component: () => import('../views/LandingView.vue')
    },
    {
      path: '/categories/:categoryId',
      name: 'categories',
      component: () => import('../views/CategoriesView.vue')
    },
    {
      path: '/product/:productId',
      name: 'product',
      component: () => import('../views/ProductView.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/CartView.vue')
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('../views/CheckoutView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/shipping',
      name: 'shipping',
      component: () => import('../views/ShippingView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/payment',
      name: 'payment',
      component: () => import('../views/PaymentView.vue')
    },
    {
      path: '/confirm',
      name: 'confirm',
      component: () => import('../views/ConfirmView.vue')
    },
  ]
})

router.beforeEach((to, from, next) => {
  // Check if the route requires authentication
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  // Check if the user is authenticated by looking for the token in local storage
  const isAuthenticated = localStorage.getItem('token');
  var role = '';
  if(localStorage.getItem('user') !== null) {
    role = JSON.parse(localStorage.getItem('user')).role;
  }
  
  if ((requiresAuth && !isAuthenticated)) {
    console.log("my role");
    // If the route requires authentication and the user is not authenticated, redirect to the login page
    next('/login');
  } 
  // else if((requiresAuth && role === "admin")) {
  //   alert('admin donot have authentication in this page');
  // }
  else {
    // For all other cases, proceed with the navigation
    next();
  }
});

export default router

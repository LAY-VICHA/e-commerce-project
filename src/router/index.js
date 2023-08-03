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
      component: () => import('../views/Login.vue'),
      meta: { ensureLogout: true }
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/Signup.vue'),
      meta: { ensureLogout: true }
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
      component: () => import('../views/CartView.vue'),
      meta: { requiresAuth: true }
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
      component: () => import('../views/PaymentView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/confirm/:orderId',
      name: 'confirm',
      component: () => import('../views/ConfirmView.vue'),
      meta: { requiresAuth: true }
    },
  ]
})

router.beforeEach((to, from, next) => {
  // Check if the route requires authentication
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  // Check if the user is authenticated by looking for the token in local storage
  const isAuthenticated = localStorage.getItem('token');
  //to ensure that user is already logout in order to login or register
  const ensureLogout = to.matched.some(record => record.meta.ensureLogout);

  var role = '';
  if (localStorage.getItem('user') !== null) {
    role = JSON.parse(localStorage.getItem('user')).role;
  }

  if ((requiresAuth && !isAuthenticated)) {
    console.log("my role");
    alert('you must log in first to continue!!!');
    // If the route requires authentication and the user is not authenticated, redirect to the login page
    next('/login');
  }
  else {
    if (isAuthenticated && ensureLogout) {
      alert('you have already logged in');
      next('/home');
    } else {
      // For all other cases, proceed with the navigation
      next();
    }
    
    // next();
  }


});

export default router

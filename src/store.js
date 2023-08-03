import { createStore } from 'vuex';

export default createStore({
  state: {
    cartCount: 0,
  },
  mutations: {
    incrementCartCount(state) {
      state.cartCount++;
    },
    decrementCartCount(state) {
      state.cartCount--;
    },
  },
  actions: {
    incrementCartCount({ commit }) {
      commit('incrementCartCount');
    },
    decrementCartCount({ commit }) {
      commit('decrementCartCount');
    },
  },
  getters: {
    getCartCount: (state) => state.cartCount,
  },
});
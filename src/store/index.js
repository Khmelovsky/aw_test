import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import router from './router';
import view from './view';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    router,
    view,
  },
  plugins: [createPersistedState({
    storage: window.localStorage,
    paths: [
      'login.expirationTime',
    ],
  })],
});

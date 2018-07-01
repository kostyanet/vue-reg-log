import Vue from 'vue';
import Vuex from 'vuex';

import login from './modules/login/login.store';
import registration from './modules/registration/registration.store';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    login,
    registration
  }
});

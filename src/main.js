import Vue from 'vue';
import Icon from 'vue-awesome/components/Icon';
import 'vue-awesome/icons';

import App from './App';
import apiService from './services/api.service';
import router from './router';
import store from './store';
import './assets/styles/index.css';

Vue.component('icon', Icon);
Vue.config.productionTip = false;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  apiService,
  router,
  store,
  components: { App },
  template: '<App/>'
});

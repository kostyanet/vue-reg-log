import Vue from 'vue';
import Icon from 'vue-awesome/components/Icon';
import 'vue-awesome/icons';

import App from './App';
import router from './router';
import store from './store';
import './assets/styles/index.css';

Vue.component('icon', Icon);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});

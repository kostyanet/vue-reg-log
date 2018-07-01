import Vue from 'vue';
import Router from 'vue-router';

import AuthDataService from '../services/auth-data.service';
import HomePage from '@/modules/home/HomePage';
import LoginPage from '@/modules/login/LoginPage';
import ProtectedPage from '@/modules/protected/ProtectedPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    }, {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    }, {
      path: '/protected',
      name: 'ProtectedPage',
      component: ProtectedPage,
      beforeEnter(to, from, next) {
        AuthDataService.token ? next() : next('/login');
      }
    }, {
      path: '*',
      redirect: { name: 'HomePage' }
    },
  ]
});

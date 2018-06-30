import Vue from 'vue';
import Router from 'vue-router';
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
      component: ProtectedPage
    }, {
      path: '*',
      redirect: { name: 'HomePage' }
    },
  ]
});

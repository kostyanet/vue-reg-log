import Vue from 'vue';
import Router from 'vue-router';

import AuthDataService from '../services/auth-data.service';
import HomePage from '@/modules/home/HomePage';
import LoginPage from '@/modules/login/LoginPage';
import ProtectedPage from '@/modules/protected/ProtectedPage';
import RegisterPage from '@/modules/register/RegisterPage';

import appConfig from '../misc/app.config';


Vue.use(Router);


export default new Router({
  routes: [
    {
      path: appConfig.routes.HOME,
      name: 'HomePage',
      component: HomePage
    }, {
      path: appConfig.routes.LOGIN,
      name: 'LoginPage',
      component: LoginPage
    }, {
      path: appConfig.routes.REGISTER,
      name: 'RegisterPage',
      component: RegisterPage
    }, {
      path: appConfig.routes.PROTECTED,
      name: 'ProtectedPage',
      component: ProtectedPage,
      beforeEnter(to, from, next) {
        AuthDataService.token ? next() : next(appConfig.routes.LOGIN);
      }
    }, {
      path: '*',
      redirect: { name: 'HomePage' }
    },
  ]
});

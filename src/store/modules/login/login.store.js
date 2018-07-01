import apiService from '@/services/api.service';
import appConfig from '../../../misc/app.config';
import AuthDataService from '../../../services/auth-data.service';
import router from '../../../router/index';
import {CLEAR_AUTH_DATA, CLEAR_ERROR_MESSAGE, SUBMIT_LOGIN} from './action.types';

const state = {
  isPending: false,
  errorMessage: null
};

const actions = {
  [CLEAR_AUTH_DATA]() {
    AuthDataService.clearAuthData();
  },

  [CLEAR_ERROR_MESSAGE]({ commit }) {
    commit('clearErrorMessage');
  },

  [SUBMIT_LOGIN]({ commit }, data, keepLogged) {
    commit('loginPending');

    return apiService.post({ query: appConfig.path.LOGIN, data })
      .then((response) => {
        commit('loginPending', false);
        AuthDataService.saveAuthData(response.data, keepLogged);
        router.push({ path: appConfig.routes.PROTECTED });
      })
      .catch((error) => {
        commit('loginPending', false);
        commit('loginFailure', error);
      });
  }
};

const mutations = {
  clearErrorMessage(state) {
    state.errorMessage = '';
  },

  loginPending(state, isPending = true) {
    state.isPending = isPending;
  },

  loginFailure(state, error) {
    state.errorMessage = error.message;
  }
};


export default {
  namespaced: true,
  state,
  actions,
  mutations
};

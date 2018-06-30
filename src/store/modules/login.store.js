import apiService from '@/services/api.service';
import AuthDataService from '../../services/auth-data.service';
import router from '../../router';
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

    return apiService.post({ query: '/users/login', data })
      .then((response) => {
        commit('loginPending', false);
        router.push({ name: 'ProtectedPage' });
        AuthDataService.saveAuthData(response, keepLogged);
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

  // loginSuccess(state, authData) {
  //
  // },

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

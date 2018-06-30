import apiService from '@/services/api.service';
import AuthDataService from '../../services/auth-data.service';
import {CLEAR_AUTH_DATA, SUBMIT_LOGIN} from './action.types';

const state = {
  isPending: false,
  errorMessage: null
};

const actions = {
  [CLEAR_AUTH_DATA]() {
    AuthDataService.clearAuthData();
  },

  [SUBMIT_LOGIN]({ commit }, data) {
    commit('loginPending');

    return apiService.post({ query: '/users/login', data })
      .then((response) => {
        commit('loginPending', false);
        AuthDataService.clearAuthData();
      })
      .catch((error) => {
        commit('loginPending', false);
        commit('loginFailure', error);
      });
  }
};

const mutations = {
  loginPending(state, isPending = true) {
    state.isPending = isPending;
  },

  // loginSuccess(state, authData) {
  //
  // },

  loginFailure(state, errorMessage) {
    state.errorMessage = errorMessage;
  }
};


export default {
  namespaced: true,
  state,
  actions,
  mutations
};

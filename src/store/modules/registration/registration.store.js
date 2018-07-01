import apiService from '@/services/api.service';
import appConfig from '../../../misc/app.config';
import router from '../../../router/index';
import {CLEAR_ERROR_MESSAGE, SUBMIT_USER} from './action.types';

const state = {
  isPending: false,
  errorMessage: null
};

const actions = {
  [CLEAR_ERROR_MESSAGE]({ commit }) {
    commit('clearErrorMessage');
  },

  [SUBMIT_USER]({ commit }, data) {
    commit('signupPending');

    return apiService.post({ query: appConfig.path.REGISTER, data })
      .then(() => {
        commit('signupPending', false);
        router.push({ path: appConfig.routes.HOME });
      })
      .catch((error) => {
        commit('signupPending', false);
        commit('signupFailure', error);
      });
  }
};

const mutations = {
  clearErrorMessage(state) {
    state.errorMessage = '';
  },

  signupPending(state, isPending = true) {
    state.isPending = isPending;
  },

  signupFailure(state, error) {
    state.errorMessage = error.message;
  }
};


export default {
  namespaced: true,
  state,
  actions,
  mutations
};

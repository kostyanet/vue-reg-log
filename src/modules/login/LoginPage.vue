<script>
import {CLEAR_AUTH_DATA, CLEAR_ERROR_MESSAGE, SUBMIT_LOGIN} from '../../store/modules/login/action.types';

export default {
  name: 'LoginPage',
  created() {
    this.$store.dispatch(`login/${CLEAR_AUTH_DATA}`);
  },
  data() {
    return {
      keepLogged: false,
      login: '',
      password: '',
    };
  },
  computed: {
    errorMessage() {
      return this.$store.state.login.errorMessage;
    },
    isLoading() {
      return this.$store.state.login.isPending;
    }
  },
  methods: {
    onSubmit() {
      this.$store.dispatch(`login/${SUBMIT_LOGIN}`, {
        login: this.login,
        password: this.password,
      }, this.keepLogged);
    },
    clearError() {
      this.$store.dispatch(`login/${CLEAR_ERROR_MESSAGE}`);
    }
  }
};
</script>

<template src='./LoginPage.html'></template>

<style lang='scss' scoped>
  .LoginPage {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &__form {
      min-width: 300px;
      width: 350px;
    }
  }
</style>

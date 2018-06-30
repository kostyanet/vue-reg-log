<script>
import {CLEAR_AUTH_DATA, SUBMIT_LOGIN} from '../../store/modules/action.types';

export default {
  name: 'LoginPage',
  created() {
    this.$store.dispatch(`login/${CLEAR_AUTH_DATA}`);
  },
  data() {
    return {
      errorMessage: null,
      isLoading: false,
    };
  },
  methods: {
    onSubmit() {
      this.$store.dispatch(`login/${SUBMIT_LOGIN}`, {});
    }
  }
};
</script>

<template src='./LoginPage.html' />

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

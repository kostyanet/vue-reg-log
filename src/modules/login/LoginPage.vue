<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      errorMessage: null,
      isLoading: false,
    };
  }
};
</script>

<template src="./LoginPage.html" />

<style lang="scss" scoped>
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

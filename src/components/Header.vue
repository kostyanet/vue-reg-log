<template>
  <header class="navbar navbar-expand-lg navbar-light bg-light Header">
    <router-link class="navbar-brand" to="/">
      <img src="../assets/logo.png" width="30" height="30" class="d-inline-block align-top" />
      <h1 class="Header__title"><code>Vue-Reg-Log</code></h1>
    </router-link>

    <div class="navbar-nav Header__nav">
      <router-link to="/" exact class="nav-item nav-link Header__link" active-class="active">Home</router-link>
      <router-link to="/login" class="nav-item nav-link Header__link" active-class="active">Login</router-link>
      <router-link to="/protected" class="nav-item nav-link Header__link" active-class="active">Protected</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
};
</script>

<style lang="scss" scoped>
  .Header {
    flex-wrap: wrap;
    justify-content: space-between;

    &__title {
      display: inline-block;
      margin: 0 2rem;
      font-size: 1.25rem;
    }

    &__nav {
      flex-direction: row !important;
    }

    &__link {
      margin-left: 0.75rem;
    }

  }
</style>

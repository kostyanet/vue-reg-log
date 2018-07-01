<template>
  <div id="app" class="d-flex flex-column">
    <Header></Header>
    <main>
      <transition>
        <router-view/>
      </transition>
    </main>
  </div>
</template>

<script>
import Header from './components/AppHeader';

export default {
  name: 'App',
  components: { Header }
};
</script>

<style>
  #app {
    height: 100%;
    overflow: hidden;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  main {
    flex: 1;
    overflow: auto;
  }
</style>

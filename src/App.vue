<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view></router-view>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import NavBar from "./components/shared/NavBar.vue";
  import Footer from "./components/shared/Footer.vue";
  import MainBody from "./components/MainBody.vue";

  export default {
    name: 'app',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      'NavBar': NavBar,
      'MyFooter': Footer,
      'MainBody': MainBody,
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

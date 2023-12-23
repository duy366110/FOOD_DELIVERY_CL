<template>
  <router-view/>
</template>

<script>
  export default {
    name: "app-component",
    mounted() {
      
      let user = localStorage.getItem('user');
      if(!this.$store.state.auth.accessToken && user) {
        this.$store.commit('reload', JSON.parse(user));
      }
    }
  }
</script>

<style>
  :root {
    --first-text-color: #333333;
    --text-color-active: #7f7f7f;
  }

  html, body {
    box-sizing: border-box;
    font-family: 'Playfair Display', serif!important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    font-size: 10px;
    scroll-behavior: smooth;
  }

  a:hover {
    text-decoration: none!important;
  }
</style>

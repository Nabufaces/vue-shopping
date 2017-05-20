<template>
  <div id="app">
    <top_menu></top_menu>
    <carousel></carousel>
    <img src="./assets/logo.png">
    <hello></hello>
    <button-example></button-example>
  </div>
</template>

<script>
import Hello from './components/Hello';
import ButtonExample from "./components/button";
import top_menu from './components/top';
import carousel from './components/carouse'

export default {
  name: 'app',
  components: {
    ButtonExample,
    Hello,
    top_menu,
    carousel
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
  margin-top: 60px;
}
</style>

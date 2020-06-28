<template>
  <div id="app">
    <b-container>
      <Tasklist />
    </b-container>
  </div>
</template>

<script>
import Tasklist from './components/Tasklist'
export default {
  name: 'App',
  components: {
    Tasklist
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 60px;
  min-height: 100vh;
  background-image: linear-gradient(to bottom right, orange, red);
}
</style>

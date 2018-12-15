<template>
  <div id="app">
    <counter></counter>
    <info></info>
  </div>
</template>

<script>
import counter from './components/counter';
import info from './components/info';

export default {
  name: 'app',
    components: {
      counter,
        info
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

<template>
  <div id="app">
      <component-1 />
      <component-2 />
  </div>
</template>

<script>

import component1 from './components/component1'
import component2 from './components/component2'

export default {
  name: 'App',
  components: {
    component1, component2
  },
  data: () => {
    return {
      
    }
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
  margin-top: 60px;
}
</style>

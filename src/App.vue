<template>
  <div id="app">
    <Demo :n.sync="n" />
  </div>
</template>

<script>
import Demo from "./components/Sync";
export default {
  name: "app",
  data() {
    return {
      n: 0
    };
  },
  components: {
    Demo
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-left: 60px;
}
</style>

<template>
  <div id="app">
    <Demo />
  </div>
</template>

<script>
import Demo from "./components/Watch2";
export default {
  name: "app",
  data() {
    return {};
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

<template>
  <div></div>
</template>
<script>
import log from "../mixins/log.js";
export default {
  mixins: [log],
  data() {
    return {
      message: "world"
    };
  },
  created() {
    console.log("组件钩子被调用");
  }
};
</script>
<template>
  <div>
    <ul @click="click">
      <li @click="clickLi"></li>
      <li @click="clickLi">2</li>
      <li @click="clickLi">3</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    click(e) {
      if (e.target.tagName === "UL")
        e.target.children.forEach(i => (i.style.color = "red"));
      else {
        e.target.style.color = "red";
      }
    },
    clickLi(e) {
      e.target.style.color = "pink";
    }
  }
};
</script>
<style >
ul,
li {
  border: 1px solid #ddd;
}
</style>

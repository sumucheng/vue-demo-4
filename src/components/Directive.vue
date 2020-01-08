<template>
  <div id="container">
    <button v-my-on="hi">say hi</button>
    <button v-my-on:[type]="hi">say hi</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      type: "mouseenter"
    };
  },
  methods: {
    hi() {
      console.log("hi");
    }
  },
  directives: {
    myOn: {
      inserted(el, binding) {
        let type = binding.arg ? binding.arg : "click";
        el.addEventListener(type, binding.value);
      },
      unbind(el, binding) {
        let type = binding.arg ? binding.arg : "click";
        el.removeEventListener(type, binding.value);
      }
    }
  }
};
</script>
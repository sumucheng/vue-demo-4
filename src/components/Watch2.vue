<template>
  <div>
    {{a}}
    <button @click="ca">change a</button>
    {{b}}
    <button @click="cb">change b</button>
    {{c}}
    <button @click="cc">change c</button>
    {{d.e}}
    <button @click="cd">change d</button>
    <button @click="ce">change d.e</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      a: 1,
      b: 2,
      c: 3,
      d: {
        e: 4
      }
    };
  },
  watch: {
    a(val, oldVal) {
      console.log("new: %s, old: %s", val, oldVal);
    },
    b: "printb",
    // 该回调将会在侦听开始之后被立即调用
    c: {
      handler: "printc",
      immediate: true
    },
    // 该回调会在任何被侦听的对象的 property 改变时被调用，不论其被嵌套多深
    d: {
      handler: function() {
        console.log("d change");
      },
      deep: true
    },
    "d.e": function() {
      console.log("d.e change");
    }
  },
  methods: {
    printb() {
      console.log("b change");
    },
    printc() {
      console.log("c change");
    },
    ca() {
      this.a += 1;
    },
    cb() {
      this.b += 1;
    },
    cc() {
      this.c += 1;
    },
    cd() {
      this.d = { e: 4 };
    },
    ce() {
      this.d.e = this.d.e;
    }
  }
};
</script>

<template>
  <div>
    {{n}}
    <button @click="add">+</button>
  </div>
</template>
<script>
export default {
  props: ["initN"],
  data() {
    return {
      n: this.initN
    };
  },
  beforeCreate() {
    console.log("1 实例初始化完成");
  },
  created() {
    console.log(`2 实例创建完成`);
  },
  mounted() {
    console.log(`3 el已挂载实例`);
  },
  beforeUpdate() {
    console.log(`4 数据已更新,n=${this.n}`);
  },
  updated() {
    console.log(`5 虚拟DOM已重新渲染,n=${this.n}`);
  },
  beforeDestroy() {
    console.log("6 实例即将销毁");
  },
  destroyed() {
    console.log("7 实例已销毁");
  },
  methods: {
    add() {
      this.n += 1;
    }
  }
};
</script>

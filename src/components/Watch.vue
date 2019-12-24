<template>
  <div>
    {{n}}
    <button @click="add">+1</button>
    <button @click="undo">撤回</button>
    <ul>
      <li v-for="(h,i) in history" :key="i">{{h.from}} → {{h.to}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      n: 0,
      history: [],
      undoMode: false
    };
  },
  watch: {
    n(newValue, oldValue) {
      if (!this.undoMode) {
        this.history.push({ from: oldValue, to: newValue });
      }
    }
  },
  methods: {
    add() {
      this.n += 1;
    },
    undo() {
      if (this.history.length <= 0) return;
      this.undoMode = true;
      const last = this.history.pop();
      this.n = last.from;
      this.$nextTick(function() {
        this.undoMode = false;
      });
    }
  }
};
</script>


import Vue from 'vue/dist/vue.min.js'
// import App from './App.vue'
// Vue.config.productionTip = false
new Vue({
  el: '#app',
  template: `
  <div>
    {{n}}
    <button @click='add'>+1</button>
  </div>
  `,
  data: {
    n: 0
  },
  methods: {
    add() {
      this.n += 1
    }
  }
})

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

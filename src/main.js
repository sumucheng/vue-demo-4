import Vue from 'vue/dist/vue.min.js'
import App from './App.vue'

new Vue({
  render: h => h(App),
}).$mount('#app')


// Vue.config.productionTip = false
// new Vue({
//   el: '#app',
//   template: `
//   <div>
//     {{n}}
//     <button @click='add'>+1</button>
//   </div>
//   `,
//   data() {
//     return {
//       n: 0
//     }
//   },
//   methods: {
//     add() {
//       this.n += 1
//     }
//   }
// })

import Vue from 'vue'
import App from './App.vue'
import VModal from 'vue-js-modal'
import VueGoodTablePlugin from 'vue-good-table';
// axios
import axios from 'axios'
// import the styles 
import 'vue-good-table/dist/vue-good-table.css'

Vue.config.productionTip = false
Vue.prototype.$http = axios

new Vue({
  el: '#app',
  render: h => h(App)
})

import Vue from 'vue'
import App from './App.vue'
import VModal from 'vue-js-modal'

// axios
import axios from 'axios'
// import the styles 

Vue.config.productionTip = false
Vue.prototype.$http = axios

new Vue({
  el: '#app',
  render: h => h(App)
})

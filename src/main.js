import Vue from 'vue'
import App from './App.vue'
import VModal from 'vue-js-modal'
import VueGoodTablePlugin from 'vue-good-table';

// import the styles 
import 'vue-good-table/dist/vue-good-table.css'

Vue.use(VueGoodTablePlugin);
Vue.use(VModal, { dynamic: true })

new Vue({
  el: '#app',
  render: h => h(App)
})

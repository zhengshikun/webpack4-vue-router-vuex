import Vue from 'vue';
import App from './app.vue';
import router from './router/router'
import Vuex from 'vuex'
import store from './vuex/store'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
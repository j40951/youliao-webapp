// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store';
import YDUI from 'vue-ydui';
import 'vue-ydui/dist/ydui.rem.css';
// import 'vue-ydui/dist/ydui.base.css'
import chat from './chat'

Vue.config.productionTip = false

Vue.use(YDUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  store: store
})

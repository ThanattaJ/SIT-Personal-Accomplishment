// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {store} from './components/store/store'
import Axios from 'axios';
import Bars from 'vuebars'




import "./vee-validate";





Vue.use(Bars)

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'


Vue.use(VueMaterial)

Vue.config.productionTip = false

// Vue.prototype.$http = Axios;
//       const token = localStorage.getItem('token');
//       if (token) {
//         Vue.prototype.$http.defaults.headers.common['Authorization'] = token
//       }

/* eslint-disable no-new */
new Vue({
  store: store,
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {store} from './components/store/store'
import axios from 'axios';
import Bars from 'vuebars'
<<<<<<< Updated upstream
import "./vee-validate";
=======

>>>>>>> Stashed changes

Vue.use(Bars)

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'


Vue.use(VueMaterial)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store: store,
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import router from './router'
import 'element-ui/lib/theme-default/index.css'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(ElementUI)

const routers = new VueRouter({
	/*mode: 'history',*/
	routes: router
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  //缩写有毒，还是完整写比较好
  router: routers,
  components: { App }
})

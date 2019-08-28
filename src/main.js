/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-27 14:20:53
 * @LastEditTime: 2019-08-27 19:57:44
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'
import 'lib-flexible'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

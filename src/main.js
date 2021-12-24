import Vue from 'vue'
import App from './App'
import router from './router'
import echarts from 'echarts'
import axios from 'axios'
import store from './vuex/store';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueCookies from 'vue-cookies'

Vue.use(ElementUI);
Vue.use(VueCookies);

Vue.config.productionTip = false;
Vue.config.productionTip = false;
Vue.prototype.bus = new Vue();
Vue.prototype.$echarts = echarts;
Vue.prototype.$axios = axios;

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  components: {App},
  template: '<App/>'
});

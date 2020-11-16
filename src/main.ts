import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/pt-br'
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false
Vue.use(ElementUI, { locale })
Vue.use(VueAxios, axios)
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

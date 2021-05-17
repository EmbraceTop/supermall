import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import Toast from 'components/common/toast/index.js'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(Toast)
Vue.use(VueLazyload)

Vue.prototype.$eventBus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

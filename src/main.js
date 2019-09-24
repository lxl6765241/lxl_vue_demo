import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible/flexible.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import MintUI from "mint-ui";
import { Button } from "mint-ui";
import "./mock/mock.js";
// require stylesimport 'mint-ui/lib/style.css'
import 'mint-ui/lib/style.css'
import 'swiper/dist/css/swiper.css'
Vue.use(Button)
Vue.use(MintUI)
Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.config.productionTip = false

new Vue({
  render:h =>h(App),
  router
}).$mount('#app')

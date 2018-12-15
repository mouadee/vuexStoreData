import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import swal from 'sweetalert';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
    store,swal
}).$mount('#app')

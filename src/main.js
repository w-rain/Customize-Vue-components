import Vue from 'vue'
import App from './App.vue'
import toastRegistry from './components/Toast/index'
import {Toast,Loading,Alert} from './components/messageBox'

Vue.config.productionTip = false;

Vue.use(toastRegistry);

Vue.use(Toast);

Vue.use(Loading);

Vue.use(Alert);

new Vue({
  render: h => h(App),
}).$mount('#app')

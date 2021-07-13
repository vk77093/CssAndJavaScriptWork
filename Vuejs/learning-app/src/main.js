 import Vue from 'vue'
 import App from './App.vue'

 Vue.config.productionTip = false
import baseCard from './components/UI/BaseCard.vue';
Vue.component('base-card', baseCard);
new Vue({
  render: h => h(App),
  
}).$mount('#app')


 
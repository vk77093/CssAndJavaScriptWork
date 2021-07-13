import { createApp } from 'vue'
import App from './App.vue'


import BaseCard from './components/UI/BaseCard.vue'
 import baseButton from './components/UI/BaseButton.vue';


const app=createApp(App);
 app.component('base-card', BaseCard);
 app.component('base-button', baseButton);
app.mount('#app');

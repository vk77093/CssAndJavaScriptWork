import { createApp } from 'vue';
import {createRouter,createWebHashHistory } from 'vue-router';

import App from './App.vue';
import BaseModal from './components/BaseModal.vue';
import AllUsers from './components/RoutingCom/AllUser.vue';
import CourseGoal from './components/RoutingCom/CourseGoal.vue';


const app = createApp(App);
const router=createRouter({
    history:createWebHashHistory(),
    routes:[
        {path:'/',component:BaseModal},
        {path :'/user',component:AllUsers},
        {path:'/goal',component:CourseGoal},

    ]
});

app.component('base-modal', BaseModal);
app.use(router);
router.isReady().then(function () {
    app.mount('#app');
})




import { createApp } from 'vue';
import {createRouter,createWebHashHistory } from 'vue-router';

import App from './App.vue';
import TeamList from './components/teams/TeamsList.vue';
import UserList from './components/users/UsersList.vue';
// for dynamic routes
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/NotFound.vue';
const routes = createRouter({
    history:createWebHashHistory(),
    routes:[
        {path:'/',redirect:'/teams'},
        {path: '/teams',component:TeamList},
        {path: '/users',component:UserList},
        //dynamic components of routes
        {path: '/teams/:teamId',component:TeamMembers},
        {path:'/:notFound(.*)',component:NotFound},
    ],
    linkActiveClass:'active',

})
const app = createApp(App)
app.use(routes);
app.mount('#app');

import {createRouter,createWebHistory} from 'vue-router';

import CoachDetail from './pages/coach/CoachDetail.vue';
import CoachList from './pages/coach/CoachList.vue';
import CoachRegister from './pages/coach/CoachRegister.vue';

import ConatchCoach from './pages/request/ConatchCoach.vue';
import RequestRecive from './pages/request/RequestRecive.vue';
import NotFound from './pages/NotFound.vue';
const router = createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/', redirect:'/coach'},
        {path:'/coach',component:CoachList},
        {path:'/coach/:id',component:CoachDetail,children:[
            {path:'/contact',component:ConatchCoach},
        ]},
        {path:'/register',component:CoachRegister},
        {path:'/request',component:RequestRecive},
        {path:'/:notFound(.*)',component:NotFound},
    ]
});
export default router;


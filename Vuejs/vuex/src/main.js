import { createApp } from 'vue';
import {createStore } from 'vuex';

import App from './App.vue';

const counterModule={
    state(){
return { counter:0,
}
    },
    mutations:{
        incrementFromMut(state){
            state.counter++;
                    },
                    newIncrementFromMut(state,payload){
                        state.counter=state.counter+payload.value;
                    },
            
    },
    getters:{
        finalcounter(state){
            return state.counter*2;
        }
    }
};
const app = createApp(App);

const store= createStore({
    modules:{
        numbers:counterModule
    },
    state(){
        return {
            counter:0,
            isUserLoggedIn:false,
        }
    },
    mutations:{
        incrementFromMut(state){
state.counter++;
        },
        newIncrementFromMut(state,payload){
            state.counter=state.counter+payload.value;
        },

        //for user Authentication
setAuth(state,payload){
    state.isUserLoggedIn=payload.isAuth;
}
    },
    actions:{
loginAction(context){
context.commit('setAuth',{isAuth:true});
},
logoutAction(context){
context.commit('setAuth',{isAuth:false});
}
    },
    getters:{
        finalcounter(state){
            return state.counter*2;
        },
        userIsAuthenticated(state){
            return state.isUserLoggedIn;
        }
    }

});
app.use(store);

app.mount('#app');

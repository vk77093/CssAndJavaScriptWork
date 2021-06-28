// Vue.createApp({
//     data(){
//        return {
//            courseGoal:'Hello finish the Course',
//            links:'https://www.vue.org/'
//        }
//     }
// }).mount('#user-goal')

const app=Vue.createApp({
    data:()=>{
        return {
            courseGoal:'Hello finish the Course', 
            links:'https://www.vue.org/' 
        }
    },
    methods:{
        checkGoalStatus (){
            let value =Math.random(10);
            if(value < 0.5){
                return'Hello finish the Course'; 
            }else{
                return 'you have done it';
            }

        }
    }
})
app.mount('#user-goal');
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
            courseGoalA :'You have not finish the courseGoal',
            courseGoalB:'You have to finished the courseGoal for making apps',
            links:'https://www.vue.org/',
            showHtml:'<h2>Hello i am from vue js using html</h2>'
        }
    },
    methods:{
        checkGoalStatus (){
            let value =Math.random(10);
            if(value < 0.5){
                //return'Hello finish the Course'; 
                return this.courseGoalA;
            }else{
                //return 'you have done it';
                return this.courseGoalB;

            }

        }
    }
})
app.mount('#user-goal');
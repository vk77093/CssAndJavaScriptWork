// let app=Vue.createApp({
//     data:()=>{
//         return {
//             counter:0,
//             name:'vijay'
//         }
//     }
// }).mount('#mainSection');

// by methods
// let app =Vue.createApp({
//     data:()=>{
//         return {
//             counter:0,
//         };
//     },
//     methods:{
//     increment(){
//         this.counter++;
//     },
//     deccrement(){
//         this.counter--;
//     }
//     }
// })
// app.mount('#mainSection');

// adding and subrtaing by 5 by passing arguments
let app2=Vue.createApp({
    data:()=>{
        return {
            counter:0,
            name:'',
        };
    },
    methods:{
        increment(num){
this.counter=this.counter+num;
        },
        deccrement(num){
            this.counter=this.counter-num;
        },
    setName(event){
        this.name=event.target.value;
    },
    preventSubmit(event){
event.preventDefault();
        alert("i am submitted");
    },
    VuepreventSubmit(){
        alert("i am not allowed to submit thriugh event modifirers");
    }

    }
})
app2.mount('#mainSection')

let app3=Vue.createApp({
    data:()=>{
        return {
            counter:0,
            nameGet:'',
            finalNameGet:'',
        };
    },
    methods:{
        increment(event){
            event.preventDefault();
            this.counter++;
        },
        deccrement(event){
            event.preventDefault();
            this.counter--;
        },
        getName(event){
            this.nameGet = event.target.value;
        },
        finalName(event){
            this.finalNameGet=event.target.value;
        }
    }
})
app3.mount('#keywords')

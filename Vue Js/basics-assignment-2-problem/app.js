let assignment2=Vue.createApp({
    data:()=>{
        return {
result:'',
finalResult:'',
        };
    },
    methods:{
        showAlert(){
            alert('I am alert showing');
        },
        outputGet(event){
            this.result=event.target.value;
        },
        outputGetEnter(event){
            this.finalResult=event.target.value;
        }

    }
})
assignment2.mount('#assignment');
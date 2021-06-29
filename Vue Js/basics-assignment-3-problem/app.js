let assignment3=Vue.createApp({
    data:()=>{
        return{
counter:0,
dataGet:'',

        };
    },
    computed:{
        counterResultGet(){
            if(this.counter< 37){
return this.dataGet='Not There yet';
            }else{
 return this.dataGet='Too Much';
            }
        }
    },
    watch:{
        counterResultGet(){
            if(this.counter>37){
                let thisget = this;
              setTimeout(()=>{
thisget.counter=0;
              },5000)  
            }
        }   
    },
   
    methods:{
        increment (num){
            this.counter=this.counter+num++;
        },
    } 
})
assignment3.mount('#assignment');
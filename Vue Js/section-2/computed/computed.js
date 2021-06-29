let computed=Vue.createApp({
    data:()=>{
        return{
            name:'',
            lastname:'',
            counter:0,
        };
    },
    // computed:{
    //     fullname(){
    //         console.log('Running the computed');
    //        if(this.name === ''){
    //            return '';
    //        }
    //        return this.name + ' ' + 'Kumar';
    //     }
    // },
    computed:{
        fullname(){
            console.log('Running the computed');
           if(this.name === ''){
               return '';
           }
           return this.name + ' ' + this.lastname;
        }
    },
    watch:{
        //when some logic then we can use the these
        counter(){
if(this.counter>50){
    
    let thisget=this;
    setTimeout(function(){
        thisget.counter =0
    },2000)
}

        } 
    },

    methods:{
        increment (num){
            this.counter=this.counter+num++;
        },
        deccrement (num){
            this.counter=this.counter+num--;
        },
        // getName(event){
        //     this.name = event.target.value;
        // }
    },
})
computed.mount('#computed')
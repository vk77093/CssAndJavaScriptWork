let app=Vue.createApp({
    data:()=>{
        return {
boxASelected:false,
boxBSelected:false,
boxCSelected:false,
        }
    },
    methods:{
// box(select){
//     if(select==='A'){
//         this.boxASelected=true;
        
//     }else if(select==='B'){
//         this.boxBSelected=true;
//     }else if(select==='C'){
//         this.boxCSelected=true;
//     }
// }

// box(select){
//     if(select==='A'){
//         this.boxASelected=true;
        
//     }else if(select==='B'){
//         this.boxBSelected=true;
//     }else if(select==='C'){
//         this.boxCSelected=true;
//     }
// }
box(select){
    if(select==='A'){
        this.boxASelected=!this.boxASelected;
        
    }else if(select==='B'){
        this.boxBSelected=!this.boxBSelected;
    }else if(select==='C'){
        this.boxCSelected=!this.boxCSelected;
    }
}
    },
    //we can also use comouted Property
    computed:{
        boxAClass(){
            return {active:this.boxASelected};
        }
    },

})
app.mount('#styling');
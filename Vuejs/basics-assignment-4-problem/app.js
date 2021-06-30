const app=Vue.createApp({
    data:()=>{
        return {
            inputClass: '',
            paraVisibles:true,
            inputBackgroundColor:'',
            
        }
    },
    computed:{
        computedToggle(){
            return {
                user1:this.inputClass==='user1',
                user2:this.inputClass==='user2',
                visible:this.paraVisibles,
                hidden:!this.paraVisibles,
                
            }
        }
    },
    methods:{
        toggleClass(){
this.paraVisibles=!this.paraVisibles;
}
    }
})
app.mount('#assignment');
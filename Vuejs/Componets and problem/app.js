let withoutComponets=Vue.createApp({
data:()=>{
    return{
        showVisibility:true,
        friends: [
            {
                id:1,
                name: 'vijay',
                phone_number:'9872662785',
                email: 'vk7709@gmail.com',
            },
            {
                id:2,
                name: 'Krishna',
                phone_number:'9872662785',
                email: 'krishna@gmail.com',
            }
        ]
        }
},
methods: {
    togglesButton(){
       this.showVisibility=!this.showVisibility;
      
    }
}
})
withoutComponets.mount('#app');

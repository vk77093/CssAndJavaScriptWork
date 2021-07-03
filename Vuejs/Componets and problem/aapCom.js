let app2=Vue.createApp({
    data:()=>{
        return{
            // showVisibility:true,
            friends:[
               {
                id:1, 
name:'vijay',
phone_number:'9872662785',
email:'vk77093@gmail.com',

            },
            {
                id:2,
                name:'krishna',
                phone_number:'9872662785',
                email:'kk77093@gmail.com',
            }
        ]
        }
    },
    // methods: {
    //     togglesButton(){
    //         this.showVisibility=!this.showVisibility;
           
    //      }
    // },
    
});
app2.component('friend-componets',{
    template:`
    <li>
    <h2>{{frn.name}}</h2>
    <button @click="togglesButton">Show Details</button>
    <ul v-if="showVisibility">
      <li><strong>Phone:</strong> {{frn.phone_number}}</li>
      <li><strong>Email:</strong> {{frn.email}}</li>
    </ul>
  </li>
    `,
    data(){
        return { showVisibility:true,
        frn:{
            id:2,
            name:'krishna',
            phone_number:'9872662785',
            email:'kk77093@gmail.com', 
        },
        
        };
    },
    methods: {
        togglesButton(){
            this.showVisibility=!this.showVisibility;
        }
    }
})
app2.mount('#app');
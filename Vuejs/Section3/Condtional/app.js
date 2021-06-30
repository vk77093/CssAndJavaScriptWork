const app = Vue.createApp({
  data() {
    return { 
      goals: [],
      enteredvalue:''
    
    };
  },
  methods: {
    addGoal(){
      this.goals.push(this.enteredvalue);
      this.enteredvalue='';
      
    },
    removeGoal(idx){
this.goals.splice(idx,1);
    }
  }
});

app.mount('#user-goals');

<template>
    <form @submit.prevent="addTheList()">
        <div>
          <label for="name">Name</label>  
          <input type="text" v-model="enterName">
          </div>
          <div>
<label for="name">Phone</label>  
          <input type="text" v-model="enterPhone">
          </div>
          
          <div>
              <label for="name">Email</label>  
          <input type="text" v-model="enterEmail">
          </div>
          <div>
              <button>Add Name</button>
          </div>
            
   </form>
</template>
<script>
export default {
emit:['add-contact'],
data() {
    return{
        enterName: '',
enterPhone:'',
enterEmail:'',
    }
},
methods: {
    addTheList(){
        this.$emit('add-contact',
        this.enterName,
        this.enterPhone,
        this.enterEmail,
        )
    }
}
}
</script>
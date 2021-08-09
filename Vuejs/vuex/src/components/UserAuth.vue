<template>
<button @click="login" v-if="!isAuth">Login</button>
<button @click="logout" v-if="isAuth">Logout</button> 
</template>
<script>
export default {
  methods:{
      login(){
       this.$store.dispatch('loginAction');  
      },
      logout(){
this.$store.dispatch('logoutAction');
      }
  },
  computed: {
      isAuth(){
          return this.$store.getters.userIsAuthenticated;
      }
  }  
}
</script>
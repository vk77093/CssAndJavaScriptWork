<template>
  <base-container title="Vuex" v-if="isAuth">
  <!-- <h2>Counter {{$store.state.counter}}</h2>  -->
  <!-- <h2>{{counterWatch}}</h2> -->
  <the-counter></the-counter>
  <button @click="increment">Add 11</button>
  <change-counter></change-counter>
  </base-container>
  <base-container title="user">
  <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import UserAuth from './components/UserAuth.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    UserAuth,

  },
  // computed: {
  //   counterWatch() {
  //     return this.$store.state.counter;
  //   }
  // },
  methods: {
    increment(){
      // this.$store.state.counter=this.$store.state.counter+11;
     this.$store.commit('incrementFromMut');
    // this.$store.getters.finalcounter;
    }
  },
  computed: {
    isAuth(){
      return this.$store.getters.userIsAuthenticated;
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
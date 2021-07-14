<template>
<the-header title="Remeber Me"></the-header>
<!-- <stored-resource :resource="storedResource"></stored-resource> -->
<!-- <the-resource :resource="storedResource"></the-resource> -->
<the-resource></the-resource>

</template>
<script>
//import learningResource from './components/learningResource/ResourceLearning.vue';
//import StoredResource from './components/learningResource/StoredResource.vue';
import TheHeader from './components/layouts/TheHeader.vue';
import TheResource from './components/learningResource/TheResource.vue';

export default {
  components:{
//StoredResource,
TheHeader,
TheResource,
  },
  // data(){
  //   return {
  //     // storedResource:[{
  //     //   id:'1',
  //     //     title:'offical docs for Vue Apps',
  //     //     description:'You have to know the description with Tags',
  //     //     links:'https://vuejs.org/',
  //     // },
  //     // {
  //     //        id:'2',
  //     //    title:'Gooogle for self learner',
  //     //    description:'You have to know the description with google',
  //     //    links:'https://www.google.com', 
  //     // }
  //     // ]
  //   }
  // }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>

<template>
<ul>
  <learning-resource v-for="res in resource" :key="res.id"
   :title="res.title"
   :id="res.id"
   :description="res.description"
   :links="res.links"></learning-resource>
</ul>
</template>
<script>
import learningResource from './ResourceLearning.vue';
export default {
     //props:['resource'],
     inject:['resource'],
    components:{
    learningResource,
   
}   
}

</script>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
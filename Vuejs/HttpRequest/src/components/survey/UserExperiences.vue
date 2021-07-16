<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadData">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading">Data Is Loading Please Wait</p>
      <p v-else-if="!isLoading && error">{{error}}</p>
      <p v-else-if="!isLoading && (!results ||results.length <=0)">No Data is found please add some data</p>
      <ul v-else-if="!isLoading && results && results.length >0">
        <survey-result
          v-for="result in results"
          :key="result.id" 
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  // props: ['results'],
  components: {
    SurveyResult,
  },
  data(){
    return {
      results:[],
      isLoading:false,
      error:'',
    }
  },
  methods: {
loadData(){
  this.isLoading = true;
  this.error=null;
  fetch('https://vueappdemo-91ea5-default-rtdb.firebaseio.com/survey.json').then((response)=>{
    if(response.ok){
      return response.json();
    }
  }).then((data)=>{
//console.log(data);
this.isLoading=false;
const results=[];
for(const id in data){
  results.unshift({
    id:id,
    name:data[id].name,
    rating:data[id].rating,
  })
}
this.results=results;
  })
  .catch((error)=>{
    this.isLoading=false;
    console.log(error +' Url not found');
   this.error='Failed to fetch the results from server';
  })
  

}
 },
  mounted(){
    this.loadData();
  }
  
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
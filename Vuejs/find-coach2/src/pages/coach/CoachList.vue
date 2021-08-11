<template>
<div>
<base-dialoug :show="!!error" title="An Error Occurred"
@close="handleError">
{{error}}
</base-dialoug>


<section>
    <!-- <h2>Filter List</h2> -->
    </section>
  <coach-filter @change-filter="setFilter"></coach-filter>
    <section>
          <base-card>
<div class="controls">
    <base-button mode="outline" @click="loadCoaches(true)">Refresh</base-button>
   
    <base-button v-if="!isCoach && !isLoading" link to="/register">Register</base-button>
    </div>
    <div v-if="isLoading">
        <base-spinner></base-spinner>
    </div>
    <ul v-else-if="hasCoaches">
        <!-- <li v-for="coach in filterCoaches" :key="coach.id">

{{coach.firstName}}
        </li> -->

        <coach-item v-for="coach in filterCoaches" :key="coach.id"
        :id="coach.id"
        :first-name="coach.firstName"
        :last-name="coach.lastName"
        :rate="coach.hourlyRate"
        :areas="coach.areas"
        >

        </coach-item>
    </ul>
    <h2 v-else>No Coach is Found</h2>
</base-card>
    </section>
    </div>
</template>
<script>
import CoachItem from '../../components/coaches/CoachItem.vue';
import CoachFilter from '../../components/coaches/CoachFilter.vue';
export default {
    data() {
        return{
           activeFilter:{
               frontend:true,
               backend:true,
               career: true,
           },
           isLoading:false,
           error:null,
        }
    },
components: {
CoachItem,
CoachFilter,
},
  computed: {
       isCoach() {
      return this.$store.getters['coaches/isCoach'];
    },
      filterCoaches(){
          const coaches =this.$store.getters['coaches/coaches'];
          return coaches.filter(coach =>{
              if(this.activeFilter.frontend && coach.areas.includes('frontend')){
                  return true;
              }
              if(this.activeFilter.backend && coach.areas.includes('backend')){
return true;
              }
              if(this.activeFilter.career && coach.areas.includes('career')){
                  return true;
              }
              return false;
          })
      },
      hasCoaches(){ 
          return !this.isLoading && this.$store.getters['coaches/hasCoaches'];
      }
  },
  created(){
this.loadCoaches();
  },
  methods: {
      setFilter(updateFilter){
this.activeFilter=updateFilter;
      },
     async loadCoaches(refresh=false){
          //console.log("cliked coach");
          this.isLoading=true;
          try {
             await this.$store.dispatch('coaches/loadCoaches',{forceRefresh:refresh}); 
          } catch (error) {
            this.error=error.message || 'Something went wrong';  
          }
         
         this.isLoading=false;
      },
      handleError(){
          this.error=null;
      }
  } 
}
</script>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
<template>
<div>
<base-dialoug :show="!!error" title="An Error Occurred"
@close="handleError">
{{error}}
</base-dialoug>

    <section>
    <base-card>
<header>
    <h2>All the Requests Recieved</h2>
</header>
<div v-if="isLoading">
    <base-spinner></base-spinner>
</div>
<ul v-else-if="hasRequest && !isLoading">
    <request-item v-for="req in receivedRequests"
    :key="req.id"
    :email="req.userEmail"
    :message="req.message"
    ></request-item>
    <!---Added the value through request/actions.js -->
</ul>
<h3 v-else>You Haven't Received any requests</h3>
</base-card>
    </section>
    </div>

</template>
<script>
import RequestItem from '../../components/request/RequestItem.vue';
export default{
    components: {
       RequestItem, 
    },
    data() {
        return {
            isLoading: false,
            error:null,
        }
    },
    computed: {
       receivedRequests(){
           return this.$store.getters['requests/requests'];
       },
       hasRequest(){
           return this.$store.getters['requests/hasRequests'];
       } 
    },
    created(){
this.loadRequests();
    },
    methods: {
     async loadRequests(){
this.isLoading = true;
try{
    await this.$store.dispatch('requests/fetchRequests');
}catch(error){
    this.error=error.message ||'Something went wrong';
}
this.isLoading = false;
        },
        handleError(){
            this.error=null;
        }
    }
}
</script>
<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
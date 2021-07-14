<template>
<base-card>
<base-button @click="setSelectedTab('stored-resource')" :mode="storedResourceMode">Stored Resource</base-button>
<base-button @click="setSelectedTab('add-resource')" :mode="addResourceMode">Add Resource</base-button>
</base-card>
<keep-alive>
<component :is="selectedTab"></component>
</keep-alive>
</template>
<script>
import StoredResource from './StoredResource.vue';
import AddResource from './AddResource.vue';
export default {
    components:{
StoredResource,
AddResource,
    },
    data(){
        return{
            selectedTab:'stored-resource',
            resources:[{
        id:'1',
          title:'offical docs for Vue Apps',
          description:'You have to know the description with Tags',
          links:'https://vuejs.org/',
      },
      {
             id:'2',
         title:'Gooogle for self learner',
         description:'You have to know the description with google',
         links:'https://www.google.com', 
      }
      ]
        }
    },
    methods: {
        setSelectedTab(tab){
            this.selectedTab=tab;
        },
        addNewResource(title,description,links){
const newResource={
    id:new Date().toISOString,
    title:title,
    description:description,
    links:links,
};
this.resources.unshift(newResource);
this.selectedTab='stored-resource';
        },
        removeResource(resid){
            const resIndex=this.resources.findIndex(res =>res.id !== resid);
            this.resources.splice(resIndex,1);
        }
        
    },
    computed:{
        storedResourceMode(){
          return  this.selectedTab==='stored-resource' ? null : 'flat';
        },
        addResourceMode(){
            return this.selectedTab==='add-resource' ?null : 'flat';
        }
    },
    provide(){
        return {
            resource:this.resources,
            addResourceProvie:this.addNewResource,
            deleteResource:this.removeResource,
        };
    }
    
}
</script>
<template>
  <div>
    <the-header></the-header>
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
  </div>
  <div id="golas">
    <button @click="setSelectedComponents('active-goals')">Active</button>
    <button @click="setSelectedComponents('manage-goals')">Manage</button>
    <!-- <active-goals v-if="selectedComponents ==='active-goals'"></active-goals>
<manage-goals v-if="selectedComponents ==='manage-goals'"></manage-goals> -->
<!--Dynamic Components with ":is" for removiing the multiple if --->
<keep-alive>
 
  <component :is="selectedComponents"></component>
</keep-alive>
  </div>
</template>
 
<script>
import TheHeader from './components/TheHeader';
import BadgeList from './components/BadgeList.vue';
export default {
  components:{
'the-header':TheHeader,
BadgeList,

  },
  data() {
    return {
      selectedComponents:'active-goals',
      activeUser: {
        name: 'Vijay Kumar',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods: {
    setSelectedComponents(com){
      this.selectedComponents=com;
    }
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
<style scoped>
#golas{
  /* display: flex; */
  /* justify-content: space-between; */
  align-items: center;
}
</style>
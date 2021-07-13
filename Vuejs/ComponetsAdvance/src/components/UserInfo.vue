<template>
  <section>
     <slot-card>
        <h3>{{ fullName }}</h3>
      <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
      <p>{{ infoText }}</p>
    
    </slot-card>
  </section>
</template>

<script>
//import BaseBadge from './components/BaseBadge.vue';
export default {
  props: ['fullName', 'infoText', 'role'],
  // components:{
  //   'base-badge':BaseBadge,
  // },
};
</script>

<style scoped>
section div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
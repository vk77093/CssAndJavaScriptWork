<template>
<li>
    <base-card>
        <header>
            <h3>{{title}}</h3>
            <base-button mode="flat">Delete</base-button>
        </header>
    
    <p>{{description}}</p>
    <nav>
        <!---Its V:bind property shorthand --->
        <a :href="links">View ResourceLearning</a>
    </nav>
    </base-card>
</li>
</template>
<script>
 //import baseCard from './components/UI/BaseCard.vue';
export default {
    props:['title', 'description','links'],
    // components:{
    //   baseCard,
    // }
}
</script>
<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
</style>
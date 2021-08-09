<template>
<!-- <h2>{{$store.state.counter}}</h2> -->
<button @click="changeIt">Add 10</button>
</template>
<script>
export default {
    methods: {
        changeIt(){
            // this.$store.state.counter++;
           // this.$store.commit('incrementFromMut');
           this.$store.commit('newIncrementFromMut',{value:10});
        }
    }
}
</script>
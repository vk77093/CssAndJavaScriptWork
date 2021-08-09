<template>
<h2>{{counterWatch}}</h2>

</template>
<script>
export default {
    computed:{
        counterWatch(){
           return this.$store.state.counter;
        }
    }
}
</script>
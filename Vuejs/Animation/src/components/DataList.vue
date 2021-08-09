<template>
<!-- <ul> -->
    <transition-group tag="ul" name="fruit-ilst">
<li v-for="fruit in fruits" :key="fruit" @click="removeFruit(fruit)">{{fruit}}</li>
    </transition-group>
<!-- </ul> -->
<div>
    <input type="text" ref="fruitName">
<button @click="addFruit">Add Fruit</button>
</div>
</template>
<script>
export default {
    data() {
        return {
fruits:['apple', 'orange','mango','pineapple'],
        }
    },
    methods:{
        addFruit(){
            let enteredFruit =this.$refs.fruitName.value;
this.fruits.unshift(enteredFruit);
        },
        removeFruit(fruit){
this.fruits=this.fruits.filter(fru=>fru !==fruit);
        },
    }
}
</script>
<style>
ul {
    list-style: none;
    padding:1rem;
    margin:0;
}
li {
    border:1px solid #ccc;
    padding:1rem;
    text-align: center;

}
.fruit-ilst-enter-from{
opacity:0;
transform:translateX(-50px);
}
.fruit-ilst-enter-active{
transition:all 0.3s ease-out;
}
.fruit-ilst-active-to{
opacity:1;
transform:translateX(0px);
}
/* for leave Animation */
.fruit-ilst-leave-from{
opacity:1;
transform:translateX(0px);
}
.fruit-ilst-leave-active{
transition:all 0.3s ease-in;
position:absolute;
}
.fruit-ilst-leave-to{
opacity:0;
transform:translateX(-50px);
}
.fruit-ilst-move{
    transition:all 0.8s ease;
}
</style>
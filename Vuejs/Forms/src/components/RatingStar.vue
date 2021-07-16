<template>
<ul>
    <!-- <li :class="{active :activeOptions ==='poor' }"><button type="button" @click="activetedOptions('poor')">Poor</button></li> -->
    <!--As we used the computed properties then we can directly use the modelValue --->
     <li :class="{active :modelValue ==='poor' }"><button type="button" @click="activetedOptions('poor')">Poor</button></li>
     <li :class="{active :activeOptions ==='average'}"><button type="button" @click="activetedOptions('average')">Average</button></li>
      <li :class="{active :activeOptions ==='good'}"><button type="button" @click="activetedOptions('good')">Good</button></li>
</ul>
</template>
<script>
export default {
    props:['modelValue'],
    emits:['update:modelValue'],
//     data(){
//     return {
//         //activeOptions:'',
//         //as we used the props
//         activeOptions:this.modelValue,

//         //by using that approach we can't clear the state of the button
//         //so that we need to use the computedProper

//     }
    
// },
computed:{
    activeOptions(){
        return this.modelValue;
    }
},
methods: {
        activetedOptions(option){
            //after using computed properties we not need to define again
            //this.activeOptions=option;
            this.$emit('update:modelValue',option);
        }
    }
}
</script>
<style scoped>
ul{
    list-style: none;
    margin:0.5rem 0;
    padding: 0;
    display: flex;
}
li{
    margin:0 1rem;
    border:1px solid #ccc;
    display: flex;
    justify-content:center;
    align-items:center;
}
button{
    font: inherit;
    border:none;
    background-color: transparent;
    cursor: pointer;
}
.active{
border-color:pink;
}
.active button{
    color:pink;
}
</style>
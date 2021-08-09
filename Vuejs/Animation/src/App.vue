<template>
<!-- <transition>
  <router-view></router-view>
</transition> -->
<router-view v-slot="vijaySlots">
  <transition name="route" mode="out-in">
<component :is="vijaySlots.Component"></component>
  </transition>
</router-view>
<div class="container">
  <data-list></data-list>
  </div>
  <div class="container">
    <div class="block" :class="{animate :buttonAnimated}"></div>
    <button @click="animateButton">Animate</button>
  </div>
  <base-modal @close="hideDialog" v-if="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
   <transition>
      <p v-if="togglesIsVisible">It will show some time with toggles button</p>
   </transition>
    <button @click="toffButton">Toggle The Paragragh</button>
  </div>
   <div class="container">
    <button @click="showButton" v-if="!buttonIsVisible">ShowButton</button>
    <button @click="hideButton" v-else>HideButton</button>
  </div>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
 
</template>  

<script>
import DataList from './components/DataList.vue';
export default {
  components: {
    DataList,
  },
  data() {
    return { 
      dialogIsVisible: false,
      buttonAnimated: false,
      togglesIsVisible: false,
      buttonIsVisible: false,
    
    };
  },
  methods: {
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    animateButton(){
this.buttonAnimated=true;
    },
    toffButton(){
      this.togglesIsVisible=!this.togglesIsVisible;
    },
    showButton(){
      this.buttonisVisible=true;
      console.log("show");
    },
    hideButton(){
      this.buttonisVisible=false;
      console.log("hide");
    }
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition:all 0.5s ease-in-out; */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
.animate{
  /* transform:translateX(-150px); */
  animation:mymove 0.5s ease-out forwards;
}
@keyframes mymove {
  /* 0%   {top: 0px; left: 0px; background: red;}
  25%  {top: 0px; left: 100px; background: blue;}
  50%  {top: 100px; left: 100px; background: yellow;}
  75%  {top: 100px; left: 0px; background: green;}
  100% {top: 0px; left: 0px; background: red;} */
  0% {transform:translateX(0) scale(1);}
  70%{transform:translateX(-120) scale(1.2);}
  100%{transform:translateX(-160px) scale(1.5);}

}
.v-enter-from{
  opacity:0;
  transform:translateY(-30px) scale(0.9);
}
.v-enter-active{
transition:all 0.3s ease-out;
}
.v-enter-to{
opacity:1;
transform:translateY(0px) scale(1);
}
/*for closing the transition */
.v-leave-from{
opacity:1;
transform:translateY(0px) scale(1);
}
.v-leave-active{
transition:all 0.3s ease-in;
}
.v-leave-to{
opacity:0;
transform:translateY(30px) scale(1);
}
.route-enter-from{
animation :routerAnimationEnter 0.5s ease-in;
}
.route-enter-active{
animation:routerAnimationEnter 0.5s ease-in;
}
.route-enter-to{
animation:routerAnimationEnter 0.5s ease-in;
}
.route-leave-from{
animation:routerAnimationLeave 0.5s ease-out;
}
.route-leave-active{
animation:routerAnimationLeave 0.5s ease-out;
}
.route-leave-to{
animation:routerAnimationLeave 0.5s ease-out;
}

@keyframes routerAnimationEnter{
   0% {opacity:0;}
  100% {opacity:1;}
}
@keyframes routerAnimationLeave{
   0% {opacity:100;}
  100% {opacity:0;}
}
</style>
<template>
    <h2>Manage Goals Template</h2>
    <input type="text" name="goals" ref="goals">
    <button @click="setGoals">Add Goals</button>
    <teleport to="body">
        <alert-box v-if="inputIsInvalid">
<h2>Title is invalid</h2>
<p>Please enter some content</p>
<button @click="okCancel">OK</button>
    </alert-box>
    </teleport>
    
</template>
<script>
import alertBox from './alertGoals.vue';
export default {
  components:{
     'alert-box':alertBox,
  },
  data:()=>{
      return {
inputIsInvalid:false,
      }
  },
  methods:{
      setGoals(){
          let enterGoals=this.$refs.goals.value;
if(enterGoals===''){
    //alert('please enter some content');
    this.inputIsInvalid=true;
}
      },
      okCancel(){
          this.inputIsInvalid=false;
      }
  }
}
</script>
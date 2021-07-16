<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{invalid:userNameValidity==='invalid'}">
      <label for="user-name">Your Name</label>
      <input id="user-name" name="user-name" type="text" v-model="userName" 
      @blur="checkUserNameValidity"/>
      <p v-if="userNameValidity ==='invalid'">Please enter a valid user name</p>
    </div>
    <div class="form-control" :class="{invalid:ageValidity==='invalid'}">
      <label for="age">Your Age (Years)</label>
      <input id="age" name="age" type="number"  v-model.trim="userAge" @blur="checkAgeValidity"/>
       <p v-if="ageValidity ==='invalid'">Please enter a valid age</p>
    </div>
    <div class="form-control">
      <label for="referrer">How did you hear about us?</label>
      <select id="referrer" name="referrer" v-model="refer">
        <option value="google">Google</option>
        <option value="wom">Word of mouth</option>
        <option value="newspaper">Newspaper</option>
      </select>
    </div>
    <div class="form-control">
      <h2>What are you interested in?</h2>
      <div>
        <input id="interest-news" name="interest" type="checkbox" value="inter" v-model="interest"/>
        <label for="interest-news">News</label>
      </div>
      <div>
        <input id="interest-tutorials" name="interest" type="checkbox" value="tut" v-model="interest" />
        <label for="interest-tutorials">Tutorials</label>
      </div>
      <div>
        <input id="interest-nothing" name="interest" type="checkbox" value="not" v-model="interest"/>
        <label for="interest-nothing">Nothing</label>
      </div>
    </div>
    <div class="form-control">
      <h2>How do you learn?</h2>
      <div>
        <input id="how-video" name="how" type="radio" value="video" v-model="howRadio" />
        <label for="how-video">Video Courses</label>
      </div>
      <div>
        <input id="how-blogs" name="how" type="radio" value="blog" v-model="howRadio"/>
        <label for="how-blogs">Blogs</label>
      </div>
      <div>
        <input id="how-other" name="how" type="radio" value="other" v-model="howRadio" />
        <label for="how-other">Other</label>
      </div>
    </div>
    <div class="form-control">
      <!---v-model as we used the props and emits :modelValue(props) & 
       @update:modelValue (emits)-->
      <rating-star v-model="rating"></rating-star>
    </div>
    <div>
      <button>Save Data</button>
    </div>
  </form>
</template>
<script type="text/javascript">
import RatingStar from './RatingStar.vue';
export default {
  components:{
RatingStar,
  },
  data(){
    return{
userName:'',
userAge:null,
refer:'wom',
interest:[],
howRadio:'',
userNameValidity:'pending',
ageValidity:null,
rating:null,

    }
  },
  methods: {
    submitForm(){
      console.log('User Name is '+this.userName);
      this.userName ='';
      //here we will get the automatci number conversion due to v-model property
      console.log('User Age is '+this.userAge);
      this.userAge ='';

      console.log('User select refer is '+this.refer);
this.refer ='';
console.log('User checkbox is '+this.interest)
this.interest =[];

console.log('User radio is '+this.howRadio);
this.howRadio ='';
console.log('User RatingStar is '+this.rating);
this.rating ='';

    },
    checkUserNameValidity(){
      if(this.userName.trim() ===''){
        this.userNameValidity='invalid';
      }else{
        this.userNameValidity ='valid';
      }
    },
    checkAgeValidity(){
      if(this.userAge ==null){
        this.ageValidity='invalid';
      }else if(this.userAge <=21){
        this.ageValidity ='invalid';
      }else{
        this.ageValidity ='valid';
      }
      
      
    }
  }
}
</script>
<style scoped>
form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
}

h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}

input,
select {
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
}

select {
  width: auto;
}

input[type='checkbox'],
input[type='radio'] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}

input[type='checkbox'] + label,
input[type='radio'] + label {
  font-weight: normal;
}

button {
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
}

button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}
.form-control.invalid input {
  border-color: red;
}
.form-control.invalid label {
  color:red;
}
.form-control p{
  color:red;
  font-weight:bold;
}
</style>
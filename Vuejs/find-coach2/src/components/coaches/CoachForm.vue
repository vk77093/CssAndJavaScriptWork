<template>
<div>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{invalid :!firstName.isValid}">
      <label for="firstname">Firstname</label>
      <input type="text" id="firstname" v-model.trim="firstName.val" @blur="checkFirsyNameValidity()"/>
      <p v-if="!firstName.isValid" class="errorTextAbove">First Name must not be empty</p>
    </div>
    <div class="form-control" :class="{invalid:!lastName.isValid}">
      <label for="lastname">Lastname</label>
      <input type="text" id="lastname" v-model.trim="lastName.val" @blur="clearValidity('lastName')"/>
      <p v-if="!lastName.isValid" class="errorTextAbove">Lastname can not be empty</p>
    </div>
    <div class="form-control" :class="{invalid:!description.isValid}">
      <label for="description">Description</label>
      <textarea id="description" rows="5" v-model.trim="description.val" @blur="clearValidity('description')"></textarea>
      <p v-if="!description.isValid" class="errorTextAbove">Description can not be empty</p>
    </div>
    <div class="form-control" :class="{invalid:!rate.isValid}">
      <label for="rate">Hourly Rate</label>
      <input type="number" id="rate" v-model.number="rate.val" @blur="clearValidity('rate')" />
      <p v-if="!rate.isValid" class="errorTextAbove">Rate is not valid</p>
    </div>
    <div class="form-control" :class="{invalid:!areas.isValid}">
      <h3>Areas of Expertise</h3>
      <div>
        <input type="checkbox" id="frontend" value="frontend" v-model="areas.val" @blur="clearValidity('areas')" />
        <label for="frontend">Frontend Development</label>
      </div>
      <div>
        <input type="checkbox" id="backend" value="backend" v-model="areas.val"  @blur="clearValidity('areas')"/>
        <label for="backend">Backend Development</label>
      </div>
      <div>
        <input type="checkbox" id="career" value="career" v-model="areas.val"  @blur="clearValidity('areas')" />
        <label for="career">Career Advisory</label>
      </div>
      <p v-if="!areas.isValid" class="errorTextAbove">At least one experties must be select</p>
    </div>
    <base-button>Register</base-button>
    <p v-if="!formIsValid" class="errorText"> Please Enter all the data and fix the error</p>
  </form>
  </div>
</template>

<script>
export default {
  emits: ['save-data'],
  data() {
    return {
      firstName: {
        val:'',
        isValid: true,
      },
      lastName: {
        val: '',
        isValid: true,
      },
      description: {
        val: '',
        isValid: true,
      },
      rate: {
        val: null,
        isValid: true,
      },
      areas: {
        val:[],
        isValid: true,
      },
      formIsValid: true,
    };
  },
  methods: {
    
    validateForm(){
if(this.firstName.val===''){
this.firstName.isValid=false;
this.formIsValid=false;
}
if(this.lastName.val===''){
  this.lastName.isValid=false;
  this.formIsValid=false;
}
if(this.description.val===''){
  this.description.isValid=false;
  this.formIsValid=false;
}
if (!this.rate.val ||this.rate.val <0){
this.rate.isValid=false;
this.formIsValid=false;
}
if (this.areas.val.length ===0){
  this.areas.isValid=false;
  this.formIsValid=false;
}
    },
    clearValidity(input){
this[input].isValid=true;
//console.log(validatateData);
// if(!this.formIsValid){
//   this.firstName.isValid=false;
// this.formIsValid=false;
// }
    },
    checkFirsyNameValidity(){
  if(this.firstName.val===''){
    this.firstName.isValid=false;
this.formIsValid=false;
  }else{
     this.firstName.isValid=true;
this.formIsValid=true;
  }
},
    submitForm() {
      this.validateForm();
      if(!this.formIsValid){
return;
      }
      const formData = {
        first: this.firstName.val,
        last: this.lastName.val,
        description: this.description.val,
        rate: this.rate.val,
        areas: this.areas.val
      };

      this.$emit('save-data', formData);
    }
  }
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type="checkbox"] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type="checkbox"] {
  display: inline;
  width: auto;
  border: none;
}

input[type="checkbox"]:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
.errorText{
  color: red;
}
.errorTextAbove{
  color:pink;
}
</style>
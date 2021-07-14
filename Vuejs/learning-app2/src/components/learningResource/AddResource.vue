<template>
<dialog-box v-if="inputIsInvalid" title="invalid Input" @close="confirmError">
<template #default>
    <p>You need to add the Some Records</p>
    <p>Your input is cant validdated and need to add some</p>
</template>
<template #actions>
<base-button @click="confirmError">Okey</base-button>
</template>
</dialog-box>
<base-card>
<form @submit.prevent="submitResource">
    <div class="form-control">
        <label for="title">Title</label>
        <input type="text" id="title" name="title" ref="titleInput">
    </div>
    <div class="form-control">
        <label for="description">Description</label>
        <textarea id="description" name="description" rows="3" cols="3" ref="descriptionInput"></textarea>
    </div>
    <div class="form-control">
        <label for="links">Links</label>
        <input id="links" name="links" type="url" ref="linksInput">
    </div>
    <div class="form-control">
        <base-button type="submit">Add Resource</base-button>
    </div>
</form>
</base-card>
</template>
<script>
export default {
     inject:['addResourceProvie'],
     data() {
         return {
            inputIsInvalid:false, 
         }
     },
    methods:{
      submitResource(){
            let enteredTitle=this.$refs.titleInput.value;
            let enteredDescription=this.$refs.descriptionInput.value;
            let enteredLink=this.$refs.linksInput.value;
            if(enteredTitle.trim()===''||enteredDescription.trim()
            ==='' ||enteredLink.trim()===''){
this.showAlert();
return;
            }
            
             this.addResourceProvie(enteredTitle, enteredDescription, enteredLink);
            // console.log(add);
        },
        showAlert(){
this.inputIsInvalid=true;
        },
        confirmError(){
            this.inputIsInvalid=false;
        }

         
    }
}
</script>
<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
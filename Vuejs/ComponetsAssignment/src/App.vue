<template>
    <div>
        <active-user :userName="activeUserData.name"
        :userAge="activeUserData.age"></active-user>
        <user-data @add-data="setUserData"></user-data>
    </div>
   
</template>
<script>

export default {
 data() {
     return{
         activeUserData: {
             name:'vijay Kumar',
             age:27,
         }
     }
 },
methods: {
    setUserData(name,age) {
        this.activeUserData={
            name:name,
            //for converting the input data into number format
            age:+age,
        }
    }
}
    
}
</script>
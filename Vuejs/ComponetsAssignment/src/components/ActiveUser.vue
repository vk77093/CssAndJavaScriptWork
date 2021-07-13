<template>
    <section>
        <h2>My Name is:{{userName}}</h2>
        <h3>My Age is :{{userAge}}</h3>
    </section>
</template>
<script>
export default {
    props:{
        userName:{
            type:String,
            required:true,
        },
        userAge:{
            type:Number,
            required:true,
        }
    }
}
</script>
<style>
section{
    margin:2rem auto;
    border-radius:12px;
    border: solid 2px red;
    max-width: 40rem;
    padding:3px
}
</style>
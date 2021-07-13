<template>
    <dialog open>
        <slot></slot>
    </dialog>
</template>
<style scoped>
dialog{
    position:fixed;
    top:20vh;
    width:30%;
    height:30%;
    left:30%;
    border:solid 1px red;
    box-shadow: 2px 8px black;
    background-color: white;
    padding:1rem;
}
</style>
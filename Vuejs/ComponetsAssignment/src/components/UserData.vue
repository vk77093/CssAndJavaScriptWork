<template>
    <section>
       <form @submit.prevent="addData">
            <input type="text" placeholder="Enter The Name" v-model="enteredName">
        <input type="text" placeholder="Enter The Age" v-model="enteredAge">
        <button type="submit">Add Data</button>
       </form>
    </section>
</template>
<script>
export default {
    emits:['add-data'],
    data() {
        return{
            enteredName:'',
            enteredAge:'',
        }
    },
    methods: {
        addData() {
            this.$emit('add-data',
            this.enteredName,this.enteredAge,
            )
        }
    }
}
</script>
let assignment5=Vue.createApp({
    data:()=>{
        return{
dataList:[],
listValue:'',
taskListVisible:true,
        };
    },
    computed:{
        buttonCaptions(){
            return this.taskListVisible ?'Hide List':'Show List';
        }
    },
    methods:{
addList(){
    this.dataList.push(this.listValue);
    this.listValue='';
},
showHide(){
   this.taskListVisible=!this.taskListVisible;
}
    }
})
assignment5.mount('#assignment');
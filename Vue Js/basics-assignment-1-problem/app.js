Vue.createApp({
    data:()=>{
return {
    myname:'vijay kumar',
    myage:27,
    imageUrl:'https://i.pinimg.com/originals/3a/5c/85/3a5c850f458b461991ef13c55738512f.jpg',
   
}
    },
    methods:{
favoritesNumber(){
   return Math.random(0,1);
},

    },
}).mount('#assignment');
<template>
  <li>
    <!-- <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ friend.phone }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ friend.email }}
      </li>
    </ul> -->
<!-- Now we can add the new different value throug props--->
    <h2>{{ name }} {{friendIsFavorite==='1' ?'Favourite':''}}</h2>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <button @click="toggleFav">{{ toggleFav ? 'Fav' : 'Not Fav' }} Favourite</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ email }}
      </li>
      <li>
        <!--here we also called the un mutted property--->
        {{friendIsFavorite}}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  // props:[
  //   'name','phoneNumber','email','isfavourite'
  // ],
  props:{
    name:{
      type:String,
      required:true,
    },
    phoneNumber:{
      type:String,
      required:true,
    },
    email:{
      type:String,
      required:true,
    },
    isfavourite:{
      type:String,
      required:false,
      default:'0',
      validator:function(val){
    return val==='0' || val==='1';
      }
    }
    
  },

  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "0123 45678 90",
        email: "manuel@localhost.com",
      },
      friendIsFavorite:this.isfavourite,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFav(){

      // we can't mutted the props like that
      // if we need then we need to make the parent child relataion
//       if(this.isfavourite===1){
// this.isfavourite='0';
//       }else{
// this.isfavourite='1';
//       }
// accessing the props value and using through parent relation.
if(this.friendIsFavorite==='1'){
this.friendIsFavorite='0';
}else{
this.friendIsFavorite='1';
}
    }
  }
};
</script>
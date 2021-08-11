// export default{
//     registerCoach(context,data){
//         const coachData = {
//             id:'cs2',
//             firstName:data.first,
//             lastName:data.last,
//             description:data.description,
//             hourlyRate: data.rate,
//             areas:data.areas,
//         };
//         context.commit('registerCoach',coachData);
        
//     }
// };

export default {
    async registerCoach(context, data) {
      const userId=context.rootGetters.userId;
      const coachData = {
        // id: context.rootGetters.userId,
        firstName: data.first,
        lastName: data.last,
        description: data.description,
        hourlyRate: data.rate,
        areas: data.areas
      };
  const response = await fetch(`https://findcoach-c8879-default-rtdb.firebaseio.com/coaches/${userId}.json`,{
    method: 'PUT',
    body:JSON.stringify(coachData),
  });
 // const responseData = await response.json();
  if(!response.ok){
    //error message
  }
      //context.commit('registerCoach', coachData);
      context.commit('registerCoach',{
        ...coachData,
        id:userId,
      });
    },
    // Getting Coach Data
    async loadCoaches(context,payload){
      if(!payload.forceRefresh && !context.getters.shouldUpdate){
        return;
      }
     const response= await fetch('https://findcoach-c8879-default-rtdb.firebaseio.com/coaches.json');

     const responseData= await response.json();
     if(!response.ok){
       const error= new Error(responseData.message || 'Failed to Fetch Data');
       throw error;
     }
     const coaches=[];
     for(const key in responseData){
       const coach={
         id:key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
        areas: responseData[key].areas,
       };
       coaches.push(coach);
     }
     context.commit('setCoach',coaches);
     context.commit('setFetchTimeStamp');
    }
  };
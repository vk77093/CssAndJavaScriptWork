export default{
  async  contactCoach(context,payload){
       const newRequest ={
       // id:new Date().toISOString(),
       // coachId:payload.coachId,
        userEmail:payload.email,
        userMessage:payload.message,
       }
       const response =await fetch(`https://findcoach-c8879-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`,{
           method: 'POST',
           body: JSON.stringify(newRequest),
       });
       const responseData = await response.json();
       if(!response.ok){
           const error = new Error(responseData.message ||'Something went wrong');
           throw error;
       }
       newRequest.Id = responseData.name;
       newRequest.coachId=payload.coachId;
       context.commit('addRequest',newRequest);

    },
    // loading the coach request
    async fetchRequests(context){
const coachId=context.rootGetters.userId;
 const response= await fetch(`https://findcoach-c8879-default-rtdb.firebaseio.com/requests/${coachId}.json`);
 const responseData = await response.json();

 if(!response.ok){
     const error = new Error(responseData.message || 'Something went wrong');
     throw error;
 }
 const requests=[];
 for(const key in responseData){
     const request = {
         id:key,
         coachId:coachId,
         userEmail:responseData[key].userEmail,
         message:responseData[key].userMessage,
     };
     requests.push(request);
    
 }
 context.commit('setRequests',requests);

    }
};
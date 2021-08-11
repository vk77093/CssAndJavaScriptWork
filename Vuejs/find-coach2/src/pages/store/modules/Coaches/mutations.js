
export default {
    registerCoach(state, payload) {
      state.coaches.push(payload);
    },
    setCoach(state, payload) {
      state.coaches=payload;
    },
    setFetchTimeStamp(state){
      state.lastFetch=new Date().getTime();
    }
  };
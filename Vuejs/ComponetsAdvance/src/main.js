import { createApp } from 'vue';

import App from './App.vue';
// it global but now we want to make as local
// import TheHeader from './components/TheHeader.vue';
 import BaseBadge from './components/BaseBadge.vue';
//import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';
 // slot card AddedItems
 import SlotCard from './components/BaseCardSlot.vue';

 import ActiveGoals from './components/ActiveGoals.vue';
 import ManageGoals from './components/ManageGoals.vue'
const app = createApp(App);

// app.component('the-header', TheHeader);
app.component('base-badge', BaseBadge);
//app.component('badge-list', BadgeList);
app.component('user-info', UserInfo);
app.component('slot-card', SlotCard);
app.component('active-goals', ActiveGoals);
app.component('manage-goals', ManageGoals);

app.mount('#app');

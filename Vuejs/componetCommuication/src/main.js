import { createApp } from 'vue';

import App from './App.vue';
import FriendContact from './components/FriendContact.vue';
import NewFriends from './components/newFriends.vue';

const app = createApp(App);


app.component('friend-contact', FriendContact);
app.component('new-friends',NewFriends);

app.mount('#app');

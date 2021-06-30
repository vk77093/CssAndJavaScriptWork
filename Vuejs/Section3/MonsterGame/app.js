const getRandomNumner=(min,max)=>{
    return Math.floor(Math.random()*(max-min)+min);
}
let monsterProject=Vue.createApp({
    data:()=>{
        return{
            playerHealth:100,
            monsterHealth:100,
            gameCounter:0,
            winner:null,
            logMessages:[],
        };
    },
    watch:{
        playerHealth(value){
            if(value <=0 && this.monsterHealth <=0){
this.winner='draw';
            }else if(value <=0){
                this.winner='monster'
            }
        },
        monsterHealth(value){
if(value <=0 && this.playerHealth <=0){
    this.winner='draw';
}else if(value <=0){
    this.winner='player';
}
        }  
    },
    computed:{
        monsterBar(){
            return {width:this.monsterHealth + '%'}
        },
        playerBar(){
            return {width:this.playerHealth + '%'};
        },
        isSpecialAttackEnabled(){
            
            return this.gameCounter % 3 != 0;
        }
    },
    methods:{
        startGameAgain(){
            this.playerHealth=100;
            this.monsterHealth=100;
            this.gameCounter=0;
            this.winner=null;
            this.logMessages=[];
        },
        attackMonster(){
            this.gameCounter++;
           // alert('attacked')
            // let damage=Math.floor(Math.random()*(12-5)+5);
            let damage=getRandomNumner(12,5);
            this.monsterHealth=this.monsterHealth-damage;
            this.attackPlayer();
            this.addLogMessage('player', 'attack', damage);
        },
        attackPlayer(){
            let damage=Math.floor(Math.random()*(10-5)+5);
            this.playerHealth -= damage;
            this.addLogMessage('monster', 'attack', damage);
        },
        specialAttack(){
           this. gameCounter++;
           let damage=getRandomNumner(10,25);
           this.monsterHealth -= damage;
           this.attackPlayer(); 
           this.addLogMessage('player','special Attack',damage);
        },
        healSelf(){
            this.gameCounter++;
            let heal=getRandomNumner(8,20);
            if(this.playerHealth +heal >100){
                this.playerHealth=100;
            }else{
                this.playerHealth += heal;     
            }
            this.attackPlayer();
            this.addLogMessage('player','heal',heal);
           
           
        },
        surender(){
            this.winner='monster';
        },
        addLogMessage(who, what, value) {
            this.logMessages.unshift({
              actionBy: who,
              actionType: what,
              actionValue: value
            });
          }
        
    }
   
    

})
monsterProject.mount('#game');

// function getRandomValue(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
//   }
  
//   const app = Vue.createApp({
//     data() {
//       return {
//         playerHealth: 100,
//         monsterHealth: 100,
//         currentRound: 0,
//         winner: null,
//         logMessages: []
//       };
//     },
//     computed: {
//       monsterBarStyles() {
//         if (this.monsterHealth < 0) {
//           return { width: '0%' };
//         }
//         return { width: this.monsterHealth + '%' };
//       },
//       playerBarStyles() {
//         if (this.playerHealth < 0) {
//           return { width: '0%' };
//         }
//         return { width: this.playerHealth + '%' };
//       },
//       mayUseSpecialAttack() {
//         return this.currentRound % 3 !== 0;
//       },
//     },
//     watch: {
//       playerHealth(value) {
//         if (value <= 0 && this.monsterHealth <= 0) {
//           // A draw
//           this.winner = 'draw';
//         } else if (value <= 0) {
//           // Player lost
//           this.winner = 'monster';
//         }
//       },
//       monsterHealth(value) {
//         if (value <= 0 && this.playerHealth <= 0) {
//           // A draw
//           this.winner = 'draw';
//         } else if (value <= 0) {
//           // Monster lost
//           this.winner = 'player';
//         }
//       },
//     },
//     methods: {
//       startGame() {
//         this.playerHealth = 100;
//         this.monsterHealth = 100;
//         this.winner = null;
//         this.currentRound = 0;
//         this.logMessages = [];
//       },
//       attackMonster() {
//         this.currentRound++;
//         const attackValue = getRandomValue(5, 12);
//         this.monsterHealth -= attackValue;
//         this.addLogMessage('player', 'attack', attackValue);
//         this.attackPlayer();
//       },
//       attackPlayer() {
//         const attackValue = getRandomValue(8, 15);
//         this.playerHealth -= attackValue;
//         this.addLogMessage('monster', 'attack', attackValue);
//       },
//       specialAttackMonster() {
//         this.currentRound++;
//         const attackValue = getRandomValue(10, 25);
//         this.monsterHealth -= attackValue;
//         this.addLogMessage('player', 'attack', attackValue);
//         this.attackPlayer();
//       },
//       healPlayer() {
//         this.currentRound++;
//         const healValue = getRandomValue(8, 20);
//         if (this.playerHealth + healValue > 100) {
//           this.playerHealth = 100;
//         } else {
//           this.playerHealth += healValue;
//         }
//         this.addLogMessage('player', 'heal', healValue);
//         this.attackPlayer();
//       },
//       surrender() {
//         this.winner = 'monster';
//       },
//       addLogMessage(who, what, value) {
//         this.logMessages.unshift({
//           actionBy: who,
//           actionType: what,
//           actionValue: value
//         });
//       }
//     },
//   });
  
//   app.mount('#game');
  
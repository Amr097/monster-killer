let battleLog = [];

const writeToLog = (event, value, playerHealth, monsterHealth)=>{
    let logEntry;
    if(event === EVENT_PLAYER_ATTACK){

       logEntry= {
       event: event,
       value: value,
       target: 'monster',
       finalPlayerHealth : playerHealth,
       finalMonsterHealth : monsterHealth
       }
   battleLog.push(logEntry);
   
    }
   else if(event === EVENT_PLAYER_SATTACK){

       logEntry= {
           event: event,
           value: value,
           target: 'monster',
           finalPlayerHealth : playerHealth,
           finalMonsterHealth : monsterHealth
           }
       battleLog.push(logEntry);
       
   }
   else if(event === EVENT_PLAYER_HEAL){

       logEntry= {
           event: event,
           value: value,
           target: 'player'
           ,
           finalPlayerHealth : playerHealth,
           finalMonsterHealth : monsterHealth
           }
       battleLog.push(logEntry);
       
   }
   else if(event === EVENT_GAME_RESULT){

       logEntry= {
           event: event,
           value: value,
           finalPlayerHealth : playerHealth,
           finalMonsterHealth : monsterHealth
           }
       battleLog.push(logEntry);
       
   }
   
}




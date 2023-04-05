
const attackMonster = mode => {
   if(mode===EVENT_PLAYER_SATTACK){
       const playerDamage = dealMonsterDamage(PLAYER_StrongA_VALUE);
       monsterCurrentHealth -= playerDamage;
       
       
       const monsterDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE)
       playerCurrentHealth -= monsterDamage;

       console.log(monsterCurrentHealth+ "Monster hp");
       console.log(playerCurrentHealth+ "Player hp");
       
       writeToLog(EVENT_PLAYER_SATTACK, playerDamage, playerCurrentHealth, monsterCurrentHealth);

   }

   else if(mode===EVENT_PLAYER_ATTACK){
       const playerDamage = dealMonsterDamage(PLAYER_ATTACK_VALUE);
       monsterCurrentHealth -= playerDamage;
       
       
       const monsterDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE)
       playerCurrentHealth -= monsterDamage;

       console.log(monsterCurrentHealth+ "Monster hp");
       console.log(playerCurrentHealth+ "Player hp");
       
       writeToLog(EVENT_PLAYER_ATTACK, playerDamage, playerCurrentHealth, monsterCurrentHealth);
   
   }
}


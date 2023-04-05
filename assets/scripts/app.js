let assignedHealthbar = assignHealthBar()
let monsterCurrentHealth  = assignedHealthbar;
let playerCurrentHealth = assignedHealthbar;

const MONSTER_ATTACK_VALUE = assignedHealthbar * 30 / 100;
const PLAYER_ATTACK_VALUE = assignedHealthbar * 10 / 100;
const PLAYER_StrongA_VALUE = assignedHealthbar * 30 / 100;

const HEAL_VALUE = assignedHealthbar * 20 / 100;

const EVENT_PLAYER_ATTACK = 'basicAttack';
const EVENT_PLAYER_SATTACK = 'strongAttack';
const EVENT_PLAYER_HEAL = 'HEAL';
const EVENT_GAME_RESULT = 'GAME END';

let lastLogged;


adjustHealthBars(assignedHealthbar);



const attackLauncher = ()=>{
    attackMonster('basicAttack');
    gameResult();
    
    }
    
    
const strongAttackHandler = ()=>{
       attackMonster('strongAttack');
       gameResult();   
    }


const healPlayer = () => {
    
    increasePlayerHealth(HEAL_VALUE);

    if(playerCurrentHealth<=80){
         playerCurrentHealth += HEAL_VALUE;

        }

    else{
          let excessHeal = HEAL_VALUE;
          excessHeal = 100 - playerCurrentHealth;
          playerCurrentHealth += excessHeal;
        }

        gameResult();

        writeToLog(EVENT_PLAYER_HEAL, HEAL_VALUE, playerCurrentHealth, monsterCurrentHealth);

       }    


const printLog = ()=>{

   let i = 0

   for(log of battleLog){
       if(!lastLogged && lastLogged !==0 || lastLogged<i){
       console.log(log);
       lastLogged=i
       console.log(lastLogged);
       break;
    }

   i++;

}

 }
       
        

attackBtn.addEventListener('click', attackLauncher);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayer);
logBtn.addEventListener('click', printLog);
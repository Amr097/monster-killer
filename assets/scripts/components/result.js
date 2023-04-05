let BONUS_LIFE = true;

const gameResult = ()=>{
          
    if(playerCurrentHealth<=0 && BONUS_LIFE){
        BONUS_LIFE = false;
        removeBonusLife();
        playerCurrentHealth = battleLog[battleLog.length-2].finalPlayerHealth
        console.log(playerCurrentHealth)
        setPlayerHealth(playerCurrentHealth);
        alert("RESURRECTION");
    }
        
    if(monsterCurrentHealth<=0 && playerCurrentHealth>0) {
        alert('WIN');
        gameReset();
    }
    else if (playerCurrentHealth<=0 && monsterCurrentHealth>0) {
        alert('DEFAT');
        gameReset();
    }
    else if(playerCurrentHealth<=0 && monsterCurrentHealth<=0){
        alert('DRAW');
        gameReset();
    }    
 }
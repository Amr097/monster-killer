const assignHealthBar = ()=>{
  let getHealthbar = parseInt(prompt('Please assign health points','100'));
  
  if(isNaN(getHealthbar) || getHealthbar<=0){
    getHealthbar = 100;
    console.log('default value has been set');
  }

  return getHealthbar;
}





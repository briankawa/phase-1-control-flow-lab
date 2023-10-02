// Write your code here!
function scuberGreetingForFeet(someValue){
  if(someValue <= 400){
    return 'This one is on me!';
  }
  else if(someValue >= 2000 && someValue <= 2500){
    return 'I will gladly take your thirty bucks.';
  }
  else if(someValue > 2500){
    return 'No can do.';
  }
}

// Write your code here!
function ternaryCheckCity(city){
  const passengerResponse = city === 'NYC' ? 'Ok, sounds good.' : 'No go.';

  return passengerResponse;

}
//const response1 = ternaryCheckCity('NYC');
//console.log(response1);

//const response2 = ternaryCheckCity('Pittsburgh');
//console.log(response2);

  

// const response = ternaryCheckCity('NYC'); // among the first trials


// Write your code here!
function switchOnCharmFromTip(tip){
  let tipResult;
  switch(tip){
    case 'generous':
      tipResult = 'Thank you so much.';
    break;
    case 'not as generous':
      tipResult = 'Thank you.';
      break;
    default: 
      tipResult = 'Bye.';
      break;
  }
  
  return tipResult;

}
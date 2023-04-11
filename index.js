function scuberGreetingForFeet(someValue){ 
  if (someValue <= 400) {
    return 'This one is on me!'
  }
  else if (400 < someValue && someValue <= 2000) {
    return 'That will be twenty bucks.'
  }
  else if (2000 < someValue && someValue <= 2500) {
    return 'I will gladly take your thirty bucks.'
  }
  else (someValue) 
    return 'No can do.'
     
  }
function ternaryCheckCity(cityName){
  
  return (cityName === 'NYC' ? "Ok, sounds good.": 'No go.')
}


function switchOnCharmFromTip(tip){
  let message;
  switch (tip) {
    case 'generous':
     message = 'Thank you so much.';
     break;
   case 'not as generous':
    message = 'Thank you.';
    break;
    default:
      message = 'Bye.'
      break;
  }
  return message;
}
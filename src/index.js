import { prepTur, prepRemember, weightKG } from './otherFile.js'

console.log("borkings to all and to all a good bork!");
let titleFun = `${prepTur} and ${prepRemember} are two different cheeses of interesting origin!.`;
let insertKG = `Add ${weightKG} of your turkey here!.`;
console.log(titleFun);
console.log(insertRef);
let theHeading = document.querySelector("h1");
theHeading.innerText = titleFun;
let theMessage = document.querySelector("h3");
theMessage.innerText = insertRef;


document.getElementById('input').onclick = function () {

  //collect the value of the chicken weight inputted
  let chickenWeight = document.getElementById('pound').value;

  //log to console
  console.log(chickenWeight);

  //take the chicken weight and convert it to pounds
  let convertedAmnt = chickenWeight * 2.2;

  //take the converted amount and round to next whole integer
  let roundedAmnt = Math.round(convertedAmnt);
  
  // calculate cook time by the rounded amount of pounds multiplied by 20.
  let cookTime = roundedAmnt * 20;

  // console.log(cookTimeAmnt);

  let cookTime350 = cookTime - 15;

  //write it to the html 
  document.getElementById('cookTime').innerHTML = "That's " + roundedAmnt + "Lbs!" + " You'll need to cook that chicken for " 
  + cookTime + " minutes! Rub the skin with some butter and sprinkle paprika for flavour. Remember to put a half lemon up the bum to keep it moist. Start off cooking at 425F for the initial 15 minutes, then for the remaining " + cookTime350 + " minutes cook it at a temperate of 350F!";


}
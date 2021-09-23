let kgbtn = document.getElementById('kg');


kgbtn.addEventListener('click', function(){
  let input = document.getElementById('input').value;
  console.log(input);
  document.getElementById('output').value = input / 2.205 + " Kg";
});

poundbtn.addEventListener('click', function(){
  let input = document.getElementById('input').value;
  console.log(input);
  document.getElementById('output').value = input * 2.205 + " Pound";
});
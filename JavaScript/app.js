'use strict';
function checkEveryThing(){
  let visitor = prompt('whats your name');
  alert('Hello '+visitor+', and welcome to my web page');
  alert ('Let me introduce myself by this yes/no game');
  let score = 0;



  let id = prompt('Is my name ahmad ? yes or no').toLowerCase();
  const checkId= function(){
    while (('yes' !== id) && ('no' !== id)) {
      alert('Please answer with yes or no');
      id = prompt('Please answer with yes or no').toLowerCase();

    }
    if (id === 'no'){
      score++;
    }

  };
  checkId();


  alert('its not ahmad, its yazan');

  let age =prompt('15 years ago i was 15 years old, am i 30 now ? yes or no').toLowerCase();
  const checkAge=function(){
    while (('yes' !== age) && ('no' !== age)) {
      alert('Please answer with yes or no');
      age =prompt('15 years ago i was 15 years old, am i 30 now ? yes or no').toLowerCase();
    }
    if (age === 'yes'){
      score++;
    }
  };
  checkAge();


  alert('Does not require much mathematics skills, it is 30');


  let place =prompt('Im from middle east, am i from Iraq ? yes or no').toLowerCase();
  const checkPlace= function(){
    while (('yes' !== place) && ('no' !== place)) {
      alert('Please answer with yes or no');
      place =prompt('Im from middle east, am i from Iraq ? yes or no').toLowerCase();
    }
    if (place === 'no'){
      score++;
    }
  };
  checkPlace();


  alert('Im from Jordan');

  let lang =prompt('Do i speak a language other than Arabic and English ? yes or no').toLowerCase();
  const checkLang= function(){
    while (('yes' !== lang) && ('no' !== lang)) {
      alert('Please answer with yes or no');
      lang =prompt('Do i speak a language other than Arabic and English ? yes or no').toLowerCase();
    }
    if (lang === 'yes'){
      score++;
    }
  };
  checkLang();


  alert('I speak Chechen language also');


  let study =prompt('Do you think my field of study in college was IT ? yes or no').toLowerCase();
  const checkStudy= function(){
    while (('yes' !== study) && ('no' !== study)) {
      alert('Please answer with yes or no');
      study =prompt('Do you think my field of study in college was IT ? yes or no').toLowerCase();
    }
    if (study === 'no'){
      score++;
    }
  };
  checkStudy();


  alert('My major was Business Administration');

  alert('For next question answer with a number');

  let num =prompt('Can you guess my favourite number ? between 1-10');
  let i = 3;
  let v = 4;
  const checkNumber= function(){
    for (i=0; i<3; i++){
      if(num<5){
        alert('your guess is lower than correct answer!');
        num = prompt('try again!');
        v--;
      }else if (num>5){
        alert('your guess is higher than correct answer!');
        num = prompt('try again!');
        v--;
      }else{
        num =prompt('Aha again!');
      }
    }
    if(v>0){score++;}
  };
  checkNumber();
  alert('Correct answer is 5');

  let fruit =prompt('Can you guess one of my favourite fruit ?').toLowerCase();
  let corGuess =['banana','apple','orange'];
  let x = 0;
  let c = 5;
  const checkFruit= function(){
    while ((corGuess[0] !== fruit)&&(corGuess[1] !== fruit)&&(corGuess[2] !== fruit)&&( x<5 )){
      fruit =prompt('it is not, try again!!').toLowerCase();
      x++;
      c--;
    }

    if(c>0){score++;}
  };
  checkFruit();

  alert('my favourites are: banana, apple, orange');



  alert ('You answered correctly '+ score +' questions');
  alert('your score is '+score+'/7');
  alert('I wish you had fun '+visitor);}
checkEveryThing();


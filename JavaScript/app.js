'use strict';

let visitor = prompt('whats your name');
alert('Hello '+visitor+', and welcome to my web page');
alert ('Let me introduce myself by this yes/no game');
let score = 0;

function game(){
        
        let name = prompt('Is my name ahmad ? yes or no').toLowerCase();
            while (('yes' !== name) && ('no' !== name)) { 
                alert('Please answer with yes or no');
                name = prompt('Please answer with yes or no').toLowerCase();
               
            }
                if (name == 'no'){
                    score++;
                }
                // console.log('correct answer is no');
                alert('its not ahmad, its yazan');    

        let age =prompt('15 years ago i was 15 years old, am i 30 now ? yes or no').toLowerCase();
            while (('yes' !== age) && ('no' !== age)) {
                 alert('Please answer with yes or no');
                 age =prompt('15 years ago i was 15 years old, am i 30 now ? yes or no').toLowerCase();
            }
                if (age == 'yes'){
                score++;
                }   
                // console.log('correct answer is yes');
                alert('Does not require much mathematics skills, it is 30');  
                

        let place =prompt('Im from middle east, am i from Iraq ? yes or no').toLowerCase();
            while (('yes' !== place) && ('no' !== place)) {
                alert('Please answer with yes or no');
                place =prompt('Im from middle east, am i from Iraq ? yes or no').toLowerCase(); 
            }
                if (place == 'no'){
                    score++;
                }
                // console.log('correct answer is no');
                alert('Im from Jordan');

        let lang =prompt('Do i speak a language other than Arabic and English ? yes or no').toLowerCase();
            while (('yes' !== lang) && ('no' !== lang)) {
                alert('Please answer with yes or no');
                lang =prompt('Do i speak a language other than Arabic and English ? yes or no').toLowerCase();
            }   
                if (lang == 'yes'){
                    score++;
                }
                // console.log('correct answer is yes');
                alert('I speak Chechen language also'); 


        let study =prompt('Do you think my field of study in college was IT ? yes or no').toLowerCase();
            while (('yes' !== study) && ('no' !== study)) {
                 alert('Please answer with yes or no');
                 study =prompt('Do you think my field of study in college was IT ? yes or no').toLowerCase();
            }
                if (study == 'no'){
                    score++;
                }    
                // console.log('correct answer is no');
                alert('My major was Business Administration');

                alert('For next question answer with a number')

        let num =prompt('Can you guess my favourite number ? between 1-10');
        let i = 3; 
        let v = 4;
             for (i=0; i<3; i++){
                if(num<5){
                    alert('your guess is lower than correct answer!');
                    num = prompt('try again!')
                    v--;
                }else if (num>5){
                    alert('your guess is higher than correct answer!');
                    num = prompt('try again!');
                    v--;
                }else{
                    num =prompt('Aha again!');   
                }   
            }  
            if(v>0){score++}

        alert('Correct answer is 5');  
        
        let fruit =prompt('Can you guess one of my favourite fruit ?').toLowerCase();
        let corGuess =['banana','apple','orange'];
        let x = 0;
        let c = 5;
            while ((corGuess[0] != fruit)&&(corGuess[1] != fruit)&&(corGuess[2] != fruit)&&( x<5 )){
                fruit =prompt('it is not, try again!!').toLowerCase();
                x++;
                c--;
            }

            if(c>0){score++}
        
        alert('my favourites are: banana, apple, orange');
        
    }

game();
alert ('You answered correctly '+ score +' questions');
alert('your score is '+score+'/7');
alert('I wish you had fun '+visitor);


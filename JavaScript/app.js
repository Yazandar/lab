'use strict';

let visitor = prompt('whats your name');
alert('Hello '+visitor+', and welcome to my web page');
alert ('Let me introduce myself by this yes/no game')

function game(){
        
        let name = prompt('Is my name ahmad ? yes or no').toLowerCase();
            while (('yes' !== name) && ('no' !== name)) { 
                alert('Please answer with yes or no');
                name = prompt('Please answer with yes or no').toLowerCase();
               
            }
                // console.log('correct answer is no');
                alert('its not ahmad, its yazan');    

        let age =prompt('15 years ago i was 15 years old, am i 30 now ? yes or no').toLowerCase();
            while (('yes' !== age) && ('no' !== age)) {
                 alert('Please answer with yes or no');
                 age =prompt('15 years ago i was 15 years old, am i 30 now ? yes or no').toLowerCase();
            }
                
                // console.log('correct answer is yes');
                alert('Does not require much mathematics skills, it is 30');  
                

        let place =prompt('Im from middle east, am i from Iraq ? yes or no').toLowerCase();
            while (('yes' !== place) && ('no' !== nplace)) {
                alert('Please answer with yes or no');
                place =prompt('Im from middle east, am i from Iraq ? yes or no').toLowerCase(); 
            }
                // console.log('correct answer is no');
                alert('Im from Jordan');

        let lang =prompt('Do i speak a language other than Arabic and English ? yes or no').toLowerCase();
            while (('yes' !== lang) && ('no' !== lang)) {
                alert('Please answer with yes or no');
                lang =prompt('Do i speak a language other than Arabic and English ? yes or no').toLowerCase();
            }
                
                // console.log('correct answer is yes');
                alert('I speak Chechen language also'); 


        let study =prompt('Do you think my field of study in college was IT ? yes or no').toLowerCase();
            while (('yes' !== study) && ('no' !== study)) {
                 alert('Please answer with yes or no');
                 study =prompt('Do you think my field of study in college was IT ? yes or no').toLowerCase();
            }
                
                // console.log('correct answer is no');
                alert('My major was Business Administration');
        
}

game();
alert('I wish you had fun '+visitor);


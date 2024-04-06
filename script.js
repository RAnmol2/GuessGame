const input=document.getElementById("number");
const button=document.getElementById("btn");
const wrong=document.getElementById("wrng");
const result =document.getElementById("result");


let random= Math.floor(Math.random()*100)+1;

let numGuess=0;

button.addEventListener("click",()=>{
    guessesNumber();
});

function guessesNumber(){
    if(input.value <1 || input.value > 100 ){
        wrong.innerHTML = "please enter a number between 1 and 100";
       
    }else{
        numGuess ++;
        result.innerHTML = "No. of Guess : "+numGuess;
        if(input.value > random){
              wrong.innerHTML = "You Guessed too High! ";
        }else if(input.value < random){
            wrong.innerHTML = "You Guessed too Low! ";
        }else{
            wrong.innerHTML = "Congratulations You  Guessed the correct answer"
            setTimeout(()=>{
                resetGame();
            },3000)
        }

    }
    input.value = " ";

    
}
function resetGame(){
    numGuess = 0;
    random = Math.floor(Math.random() * 100)+1;
    input.value ="";
    result.innerHTML = "No. of Guess : 0";
    wrong.innerHTML="";
}
 
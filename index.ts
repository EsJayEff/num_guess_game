import PromptSync from "prompt-sync";
const prompt=PromptSync();

var gameNumber:number =1;
var playerWins : number =0;
var computerWins : number =0;

function main():void
{
console.log(`Round Number ${gameNumber}`);

let playerNumber:number =+prompt("Please Enter your Number between 0-9: ");
console.log(`Player Guessed ${playerNumber}`);

let computerNumber:number = Math.floor((Math.random()*10)-1); 
console.log(`Computer Number is ${computerNumber}`);

if (isNaN(playerNumber))
{
    console.clear();
    console.log("Please input (0-9) number");
    playRepeat();
}
else if(playerNumber === computerNumber)
{
playerWins ++;
counter();
}else
{
computerWins ++;
counter();
}
}; 

function counter ():void{
    console.log(`Player Wins = ${playerWins}`);
    console.log(`Computer Wins = ${computerWins}`);
    gameNumber++;
    playRepeat();
}


function playRepeat():void{
let playAgain:string =prompt("Want to play again Y/N: ");
if(playAgain === "Y" || playAgain === "y" )
{
    main();
}
};

main();

console.log("Thanks for Playing the Number Guessing Game:");
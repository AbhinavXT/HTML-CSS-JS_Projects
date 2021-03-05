let userscore = 0;
let compscore = 0;
const userscore_span = document.getElementById("user_score");
const compscore_span = document.getElementById("comp_score");
const result_p=document.getElementById("result");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissors_div=document.getElementById("s");


function getcompChoice() {
   const options=['r','p','s'];
   compChoice=options[Math.floor(Math.random()*3)];
   //console.log(options[Math.round(Math.random()*3)]);
   return compChoice;
}

function converttoWord(letter){
    if(letter==="r") return "Rock";
    if(letter==="p") return "Paper";
    if(letter==="s") return "Scissors";
}

function win(userChoice,compChoice){
    //console.log("Win");
    userscore++;
    userscore_span.innerHTML=userscore;
    compscore_span.innerHTML=compscore;
    const user_sub="(User)".fontsize(3).sub();
    const comp_sub="(Comp)".fontsize(3).sub();
    result_p.innerHTML=converttoWord(userChoice)+user_sub+" beats "+converttoWord(compChoice)+comp_sub+". You Win! ^_^";
    document.getElementById(userChoice).classList.add('green_glow');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('green_glow')},300);
}
function lose(userChoice,compChoice){
    //console.log("Lose");
    compscore++;
    userscore_span.innerHTML=userscore;
    compscore_span.innerHTML=compscore;
    const user_sub="(User)".fontsize(3).sub();
    const comp_sub="(Comp)".fontsize(3).sub();
    result_p.innerHTML=converttoWord(userChoice)+user_sub+" lose to "+converttoWord(compChoice)+comp_sub+". You Lose -_- ";
    document.getElementById(userChoice).classList.add('red_glow');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('red_glow')},300);
}
function draw(userChoice,compChoice){
    //console.log("Draw");
    userscore_span.innerHTML=userscore;
    compscore_span.innerHTML=compscore;
    const user_sub="(User)".fontsize(3).sub();
    const comp_sub="(Comp)".fontsize(3).sub();
    result_p.innerHTML=converttoWord(userChoice)+user_sub+" draws "+converttoWord(compChoice)+comp_sub+". Draw";
    document.getElementById(userChoice).classList.add('gray_glow');
    setTimeout(function(){document.getElementById(userChoice).classList.remove('gray_glow')},300);
}


function game(userChoice) {
    let compChoice=getcompChoice();
    //console.log(hand);
    switch (userChoice+compChoice) {
        case "pr":
        case "rs":
        case "sp":
            win(userChoice,compChoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(userChoice,compChoice);
            break;
        case "ss":
        case "pp":
        case "rr":
            draw(userChoice,compChoice);
            break;
    }
}

function main(){
rock_div.addEventListener('click',function(){
    game("r")});
paper_div.addEventListener('click',function(){
    game("p")});
scissors_div.addEventListener('click',function(){
    game("s")});
}

main();

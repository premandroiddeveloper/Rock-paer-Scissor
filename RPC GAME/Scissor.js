var user_score=0;
var computer_score=0;
var rock_img_set=document.getElementById('rock');
var paper_img_set=document.getElementById('paper');
var scissor_img_set=document.getElementById('scissor');
var user_score_span=document.getElementById('user_score_setter');
var computer_score_span=document.getElementById('computer_score_setter');
var btn_1=document.getElementById("endgame")
var main_dashb=document.getElementById('getanwser')


//here we generate random value for computer
function c_choice(){
var ar=['rock','paper','scissor'];
var randomgen=Math.floor(Math.random() * 3);
return ar[randomgen];
}
btn_1.addEventListener('click',function(){
    
    if(user_score>computer_score)
    main_dashb.innerHTML="The Winner is User";
    else if(user_score==computer_score)
    main_dashb.innerHTML="Match is Die";
    else
    main_dashb.innerHTML="The Winner is Computer"
    computer_score_span.innerHTML=0;
    user_score_span.innerHTML=0;
    user_score=0;
    computer_score=0;
   
})

//here we code for users click
function Game(userChoice){
    var computerChoice=c_choice();
    switch(userChoice){
        case 'rock':
            if(computerChoice=='paper'){
                computer_score_span.innerHTML=++computer_score;
                main_dashb.innerHTML="user choice is "+userChoice+" and computer choice is "+computerChoice+" so Computer wins";
            }
            else if(computerChoice=="scissor"){
                user_score_span.innerHTML=++user_score;
                main_dashb.innerHTML="user choice is "+userChoice+" and computer choice is "+computerChoice+" so User wins";
            }
            else if(computerChoice==userChoice){
                main_dashb.innerHTML="user choice and computer choice are same so choose again!"
            }
            break;
        case 'paper':
            if(computerChoice=='rock'){
                user_score_span.innerHTML=++user_score;
                main_dashb.innerHTML="user choice is "+userChoice+" and computer choice is "+computerChoice+" so user wins";
            }
            else if(computerChoice=="scissor"){
                computer_score_span.innerHTML=++computer_score;
                main_dashb.innerHTML="user choice is "+userChoice+" and computer choice is "+computerChoice+" so Computer wins";
            }
            else if(computerChoice==userChoice){
                main_dashb.innerHTML="user choice and computer choice are same so choose again!"
            }
            break;
        case 'scissor':
            if(computerChoice=='rock'){
                computer_score_span.innerHTML=++computer_score;
                main_dashb.innerHTML="user choice is "+userChoice+" and computer choice is "+computerChoice+" so Computer wins";
            }
            else if(computerChoice=="paper"){
                user_score_span.innerHTML=++user_score;
                main_dashb.innerHTML="user choice is "+userChoice+" and computer choice is  "+computerChoice+" so User wins";
            }
            else if(computerChoice==userChoice){
                main_dashb.innerHTML="user choice and computer choice are same so choose again!"
            }
            break;
    }


}
//this is the basic step when user choose one of the element of rock,paper and scissor
function main(){

rock_img_set.addEventListener('click',function(){
    Game('rock');
}
)
paper_img_set.addEventListener('click',function(){
    Game('paper')
}
)
scissor_img_set.addEventListener('click',function(){
    Game('scissor')
}
)
}
main();
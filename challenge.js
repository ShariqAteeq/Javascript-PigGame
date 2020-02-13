var activePlayer,scores,roundScore,diceDOM,diceDOM1,gamePlaying=true;

init();


//roll dice
document.querySelector(".dice").style.display = "none";
document.querySelector("#dice-2").style.display = "none";
document.querySelector(".btn-roll").addEventListener("click",function(){
    
    
    if(gamePlaying){
    var dice = Math.floor(Math.random()*6)+1;
    var dice1 = Math.floor(Math.random()*6)+1;
    
    console.log(dice);
    console.log(dice1);
    //1st dice
     diceDOM = document.querySelector(".dice");
    diceDOM.style.display = "block";
    diceDOM.src = "dice-"+dice+".png";

    //second dice
    diceDOM1 = document.querySelector("#dice-2");
    diceDOM1.style.display = "block";
    diceDOM1.src = "dice-"+dice1+".png";

    if(dice!=1 && dice1 != 1){
        roundScore += dice;
        roundScore += dice1;
        document.querySelector("#current-"+activePlayer).textContent = roundScore;
        
    }
    else{
        diceDOM.style.display = "none";
        diceDOM1.style.display = "none";
            nextplayer();
    }
}
});


//hold button
document.querySelector(".btn-hold").addEventListener("click",function(){

        if(gamePlaying){
        scores[activePlayer] += roundScore;
        document.querySelector("#score-"+activePlayer).textContent = scores[activePlayer];

            //value is used to take input value from text field
            var input = document.querySelector(".final-score").Value;
            var winningScore;
            //check if there is value or not
            if(input>20){
                winningScore = input;
            }
            else{
                winningScore =20;
            }

        if(scores[activePlayer] >= winningScore){
            document.querySelector("#name-"+activePlayer).textContent="winner";
            document.querySelector(".player-"+activePlayer+"-panel").classList.add("winner");
            document.querySelector(".player-"+activePlayer+"-panel").classList.remove("active");
            diceDOM.style.display="none";
            diceDOM1.style.display="none";
            gamePlaying=false;
        }
            else{
        diceDOM.style.display = "none";
        nextplayer();
            }
        }

});

//new button
document.querySelector(".btn-new").addEventListener("click",init);

function nextplayer(){
   
    roundScore=0;
    document.querySelector("#current-"+activePlayer).textContent=0;
    activePlayer === 0 ? activePlayer=1:activePlayer=0;

    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
}




function init(){
    gamePlaying = true;
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    
    document.querySelector("#current-0").textContent = 0;
    document.querySelector("#current-1").textContent = 0;
    document.querySelector("#score-0").textContent = 0;
    document.querySelector("#score-1").textContent = 0;


    document.getElementById("name-0").textContent = "Player 1";
    document.getElementById("name-1").textContent = "Player 2";
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector(".player-0-panel").classList.add("active");
}
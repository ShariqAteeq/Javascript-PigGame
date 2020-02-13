








var scores,roundScore,activePlayer,dice,gamePlaying=true;

init();

document.querySelector(".btn-roll").addEventListener("click", function(){ //anonymous function that has no name and cant be used afterward
        if (gamePlaying){
    // 1. generate random no
        
    var dice = Math.floor(Math.random()*6)+1; //it will generate from 1-6

    // 2. display result by class
    var diceDOM = document.querySelector(".dice");
    diceDOM.style.display = "block"; //it will display dice
    diceDOM.src = "dice-"+dice+".png"; //it will set dice pic according to random no of dice

    //update result until if dice no equal to 1
        if (dice !==1){
            roundScore+=dice;
            document.querySelector("#current-"+activePlayer).textContent = roundScore;
           
        }else{
            //next player
            diceDOM.style.display="none";
            nextplayer();
        }

    }


});
//hold button event
document.querySelector(".btn-hold").addEventListener("click",function(){
        if(gamePlaying){
    scores[activePlayer] += roundScore;
    document.querySelector("#score-"+activePlayer).textContent = scores[activePlayer];

    document.querySelector(".dice").style.display = "none";

    if(scores[activePlayer] >= 20){
        document.querySelector(".dice").style.display = "none";
        document.querySelector("#name-"+activePlayer).textContent = "Winner";
        document.querySelector(".player-"+activePlayer+"-panel").classList.add("winner");
        document.querySelector(".player-"+activePlayer+"-panel").classList.remove("active");
        gamePlaying = false;
      
    }
    else{
        nextplayer();
    }
}
});

function nextplayer(){
    
            activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
            roundScore =0;
            document.getElementById("current-0").textContent = 0;
            document.getElementById("current-1").textContent = 0;

            //classlist is used to add remove or toggle classes..
            //toggle mean if there is class remove it and if there is no class so add it.. 
            //in toggle parameter we define that class which is added
            document.querySelector(".player-0-panel").classList.toggle("active");
            document.querySelector(".player-1-panel").classList.toggle("active");
}

document.querySelector(".btn-new").addEventListener("click", init);
function init(){
    gamePlaying = true;
    scores = [0,0]; //both player starting global scores
roundScore = 0; // individual score for each player
activePlayer = 0; //1st player is 0 and 2nd player is 1

//Math.random * 6 is to generate random no b/w 0 - 5
//Math.floor method remove decimal point from no e.g : Math.floar(4.6) it return 4


//the object that will access to dom is document object

//document.querySelector("#current-"+activePlayer).textContent= dice; //if active playe is 0 so it will auto select player 0
//queryselector is used to select stuf or text from id..
//queryselect can also be used to read data and store in variable

//e.g = var x = document.querySelector("#current-0");

//textcontent is used to change only plain text
//but if we want change HTML so we have to write innerHTML see e.g

//document.querySelector("#current-"+activePlayer).innerHTML = "<em>"+dice+"</em>" //em tag is used to emphasize/italic text

//query selector is also used for change css using class see below example

document.querySelector(".dice").style.display = "none"; // display none for hidinf dice..
document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;
document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;
document.getElementById("name-0").textContent = "Player 1";
document.getElementById("name-1").textContent = "Player 2";
//event

document.querySelector(".player-0-panel").classList.remove("winner");
document.querySelector(".player-1-panel").classList.remove("winner");
document.querySelector(".player-0-panel").classList.remove("active");
document.querySelector(".player-1-panel").classList.remove("active");
document.querySelector(".player-0-panel").classList.add("active");
}

//state variable tells the condition of system
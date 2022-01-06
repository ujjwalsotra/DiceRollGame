'use strict';

// SELECTING ELEMENTS
const score0=document.querySelector('#score--0');
const score1=document.getElementById('score--1');
let diceval=document.querySelector('.dice');
let btnNew=document.querySelector('.btn--new');
let btnRoll=document.querySelector('.btn--roll');
let btnHold=document.querySelector('.btn--hold');
let current0=document.getElementById('current--0');
let current1=document.getElementById('current--1');
let Player0=document.querySelector('.player--0');
let Player1=document.querySelector('.player--1');
// Setting to initial values

   let activePlayer;
    let currentScore;
    let playing;
    let score;
const initalCondition=function()
{
    activePlayer=0;
    currentScore=0;
    playing=true;
    score=[0,0];
    current0.textContent=0;
    current1.textContent=0;
    diceval.classList.add('hidden');
    Player0.classList.remove('player--winner');
    Player1.classList.remove('player--winner');
    Player0.classList.add('player--active');
    Player1.classList.add('player--active');
    score0.textContent=0;
    score1.textContent=0;
}
initalCondition();
const switchPlayer=function()
{
        let nonActive=activePlayer;
       activePlayer=activePlayer===0?1:0;
       Player0.classList.toggle('player--active');
       Player1.classList.toggle('player--active');
       currentScore=0;
       document.getElementById(`current--${nonActive}`).textContent=currentScore;
}
//ROLLING DICE FUNCTIONALITY
btnRoll.addEventListener('click',function(){
    // Generating a random dice roll
    if(playing)
    {
        const number=Math.trunc(Math.random()*6)+1;
        // display the dice
        diceval.classList.remove('hidden');
        diceval.src=`images/dice-${number}.png`;
        //check for rolled:1 (if true current ==0 and other player turn)(else roll again)
        if(number==1)
        {
            switchPlayer();
        }
        else
        {
        currentScore+=number;
        document.getElementById(`current--${activePlayer}`).textContent=currentScore;
        }
    }
});

btnHold.addEventListener('click',function(){
    //Add current score to score of the active player
    if(playing)
    {
        score[activePlayer]+=currentScore;
        document.getElementById(`score--${activePlayer}`).textContent=score[activePlayer];
        //check if score>= 100 player wins
        if(score[activePlayer]>=100)
        {
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            diceval.classList.add('hidden');
            playing=false;
        }
        else
            switchPlayer();
    }
})

btnNew.addEventListener('click',initalCondition);
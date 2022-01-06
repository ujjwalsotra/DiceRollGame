'use strict';

// SELECTING ELEMENTS
const score0=document.querySelector('#score--0');
const score1=document.getElementById('score--1');
let diceval=document.querySelector('.dice');
let btnNew=document.querySelector('.btn--new');
let btnRoll=document.querySelector('.btn--roll');
let btnHold=document.querySelector('.btn--hold');
let current0=document.getElementById('current--0');
let Player0=document.querySelector('.player--0');
let Player1=document.querySelector('.player--1');
// Setting to initial values

score0.textContent=0;
score1.textContent=0;
diceval.classList.add('hidden');

const score=[0,0];
let currentScore=0;
let activePlayer=0;
let playing=true;

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
        if(score[activePlayer]>=20)
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
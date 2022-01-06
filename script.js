'use strict';

// SELECTING ELEMENTS
const score0=document.querySelector('#score--0');
const score1=document.getElementById('score--1');
let diceval=document.querySelector('.dice');
let btnNew=document.querySelector('.btn--new');
let btnRoll=document.querySelector('.btn--roll');
let btnHold=document.querySelector('.btn--hold');
let current0=document.getElementById('current--0');

// Setting to initial values

score0.textContent=0;
score1.textContent=0;
diceval.classList.add('hidden');

let currentScore=0;

//ROLLING DICE FUNCTIONALITY
btnRoll.addEventListener('click',function(){
    // Generating a random dice roll
    const number=Math.trunc(Math.random()*6)+1;
    // display the dice
    diceval.classList.remove('hidden');
    diceval.src=`images/dice-${number}.png`;
    //check for rolled:1 (if true current ==0 and other player turn)(else roll again)
    if(number==1)
    {

    }
    else
    {
       currentScore+=number;
       current0.textContent=currentScore;
    }
})
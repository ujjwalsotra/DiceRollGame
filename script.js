'use strict';

let number=Math.trunc(Math.random()*6)+1;

// SELECTING ELEMENTS
const score0=document.querySelector('#score--0');
const score1=document.getElementById('score--1');
let diceval=document.querySelector('.dice');

// Setting to initial values

score0.textContent=0;
score1.textContent=0;
diceval.style.display='none';


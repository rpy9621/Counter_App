const main=document.querySelector("#title");
let current_value=0;
current_value=current_value+1;
const btnDecrement=document.querySelector("#decrement");
const rese=document.querySelector("#reset");
const btnIncrement=document.querySelector("#increment");
btnIncrement.addEventListener('click',() =>{;
    current_value++;
title.textContent=current_value});
btnDecrement.addEventListener('click',() =>{;
    current_value--;
    title.textContent=current_value});
rese.addEventListener('click',() =>{;
    current_value=0;
    title.textContent=current_value});    
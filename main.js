const startBtn = document.querySelector('.startBtn');
const logo = document.querySelector('.img');
const h2 = document.querySelector('.h2');
const qst1 = document.querySelector('.qst1');
const qst2 = document.querySelector('.qst2');
const qst3 = document.querySelector('.qst3');
const qst4 = document.querySelector('.qst4');
const qst5 = document.querySelector('.qst5');
const qst6 = document.querySelector('.qst6');
const qst7 = document.querySelector('.qst7');
const qst8 = document.querySelector('.qst8');
const qst9 = document.querySelector('.qst9');
const qst10 = document.querySelector('.qst10');
const right1 = document.querySelector('.answer.right1')
const fallse1 = document.querySelector('.false1')
const fallse2 = document.querySelector('.false2')
const fallse3 = document.querySelector('.false3')
const nextBtn = document.querySelector('.next');


let counter = 0;


function func1() {
   h2.style.display = 'none'; 
   logo.style.display = 'none';
   startBtn.style.display = 'none';
   qst1.style.display = 'grid';
   nextBtn.style.display = 'grid';
}

function func2() {
   right1.style.backgroundColor = 'green';
   fallse1.style.backgroundColor = 'red';
   fallse2.style.backgroundColor = 'red';
   fallse3.style.backgroundColor = 'red';
}

function func3() {
    qst1.style.display = 'none';
    qst2.style.display = 'grid';
    right1.style.backgroundColor = 'green';
   fallse1.style.backgroundColor = 'red';
   fallse2.style.backgroundColor = 'red';
   fallse3.style.backgroundColor = 'red';
}
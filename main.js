const startBtn = document.querySelector('.startBtn');
const logo = document.querySelector('.img');
const h2 = document.querySelector('.h2');
const qst1 = document.querySelector('.qst1');
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
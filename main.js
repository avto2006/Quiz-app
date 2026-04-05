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
const right2 = document.querySelector('.right2')
const right3 = document.querySelector('.right3')
const right4 = document.querySelector('.right4')
const right5 = document.querySelector('.right5')


const fallse1 = document.querySelector('.false1')
const fallse2 = document.querySelector('.false2')
const fallse3 = document.querySelector('.false3')
const fallse4 = document.querySelector('.false4')
const fallse5 = document.querySelector('.false5')
const fallse6 = document.querySelector('.false6')
const fallse7 = document.querySelector('.false7')
const fallse8 = document.querySelector('.false8')
const fallse9 = document.querySelector('.false9')
const fallse10 = document.querySelector('.false10')
const fallse11 = document.querySelector('.false11')
const fallse12 = document.querySelector('.false12')
const fallse13 = document.querySelector('.false13')
const fallse14 = document.querySelector('.false14')
const fallse15 = document.querySelector('.false15')

const nextBtn1 = document.querySelector('.next');
const nextBtn2 = document.querySelector('.nx2');
const nextBtn3 = document.querySelector('.nx3');
const nextBtn4 = document.querySelector('.nx4');
const nextBtn5 = document.querySelector('.nx5');


let counter = 0;


function func1() {
   h2.style.display = 'none'; 
   logo.style.display = 'none';
   startBtn.style.display = 'none';
   qst1.style.display = 'grid';
   nextBtn1.style.display = 'grid';
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
}

function func4() {
   right2.style.backgroundColor = 'green';
   fallse4.style.backgroundColor = 'red';
   fallse5.style.backgroundColor = 'red';
   fallse6.style.backgroundColor = 'red';
   nextBtn1.style.display = 'none'
   nextBtn2.style.display = 'grid'
}

function func5() {
     qst2.style.display = 'none'
     qst3.style.display = 'grid'
}


function func6() {
   right3.style.backgroundColor = 'green';
   fallse7.style.backgroundColor = 'red';
   fallse8.style.backgroundColor = 'red';
   fallse9.style.backgroundColor = 'red';
   nextBtn2.style.display = 'none'
   nextBtn3.style.display = 'grid';
}


function func7() {
   qst3.style.display = 'none'
   qst4.style.display = 'grid';
}


function func8() {
     right4.style.backgroundColor = 'green';
   fallse10.style.backgroundColor = 'red';
   fallse11.style.backgroundColor = 'red';
   fallse12.style.backgroundColor = 'red';
   nextBtn3.style.display = 'none';
   nextBtn4.style.display = 'grid';
}

function func9() {
   qst4.style.display = 'none';
   qst5.style.display = 'grid';
}


function func10() {
     right5.style.backgroundColor = 'green';
   fallse13.style.backgroundColor = 'red';
   fallse14.style.backgroundColor = 'red';
   fallse15.style.backgroundColor = 'red';
   nextBtn4.style.display = 'none';
   nextBtn5.style.display = 'grid';
}
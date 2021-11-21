let poster1 = document.querySelector('#poster1');
let poster2 = document.querySelector('#poster2');
let poster3 = document.querySelector('#poster3');
let poster4 = document.querySelector('#poster4');
let poster5 = document.querySelector('#poster5');

let button = document.querySelector('#button');
let button2 = document.querySelector('#button2');
let button3 = document.querySelector('#button3');
let button4 = document.querySelector('#button4');
let button5 = document.querySelector('#button5');


let trashLoop = document.querySelector('#interaction')


button.addEventListener('click',aniFn);
button2.addEventListener('click',aniFn2);
button3.addEventListener('click',aniFn3);
button4.addEventListener('click',aniFn4);
button5.addEventListener('click',aniFn5);

poster1.addEventListener('click',offAni);






function aniFn()
{
    poster1.classList.toggle('on');
    button.classList.toggle('clicked');
    trashLoop.classList.toggle('on');
}

function aniFn2()
{
    poster2.classList.toggle('on');
    button2.classList.toggle('clicked');
    trashLoop.classList.toggle('on');
}

function aniFn3()
{
    poster3.classList.toggle('on');
    button3.classList.toggle('clicked');
    trashLoop.classList.toggle('on');
}

function aniFn4()
{
    poster4.classList.toggle('on');
    button4.classList.toggle('clicked');
    trashLoop.classList.toggle('on');
}

function aniFn5()
{
    poster5.classList.toggle('on');
    button5.classList.toggle('clicked');
    trashLoop.classList.toggle('on');
}

function offAni()
{
    poster1.classList.toggle('off');
}
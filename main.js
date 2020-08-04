const messWithMeSpan = document.querySelector('.mess-with-me');
messWithMeSpan.style.fontSize = '3em';

const messWithMeP = document.querySelector('p.mess-with-me');
messWithMeP.style.backgroundColor = 'green';

const secondDinosaur = document.querySelector('#hide-me');
secondDinosaur.style.display = 'none';

const firstDinosaur = document.querySelector('#triceratops');
firstDinosaur.style.width = '324px'

const makeOrange = function(){
messWithMeSpan.style.color = 'orange';
};
messWithMeSpan.addEventListener('click', makeOrange);
    
const redBorder = function(){
firstDinosaur.style.border = 'thin dotted red';
};
firstDinosaur.addEventListener('click', redBorder);
    
const featherDino = document.querySelector('#feathers')

const halfTrans = function(){
featherDino.style.opacity = '0.5';
};
featherDino.addEventListener('click',halfTrans);

const backgroundChangeRow = document.querySelector('#row');

const backgroundColorButton = document.querySelector('#toggle');

const changeBackgroundColor = function(){

if(backgroundChangeRow.style.backgroundColor === '') {

backgroundChangeRow.style.backgroundColor = 'purple';

} else {
backgroundChangeRow.style.backgroundColor = '';
}

};

backgroundColorButton.addEventListener('click', changeBackgroundColor);

const biggy = document.querySelector('#biggify');

const hover = function(){
biggy.style.width = '200px';
};

biggy.addEventListener('mouseover',hover);


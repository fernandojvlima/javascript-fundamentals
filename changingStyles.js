var btnAddBox = document.querySelector('button#addBox');

btnAddBox.onclick = function(){
var divBox = document.querySelector('div.box')
var newBoxElement = document.createElement('div');

newBoxElement.style.width = 100;
newBoxElement.style.height = 100;
newBoxElement.style.backgroundColor = '#f00';

divBox.appendChild(newBoxElement);

}



var list = document.querySelector('ul');

var btnElement = document.querySelector('div#list button.botao');

btnElement.onclick = function() {
    var inputElement = document.querySelector('input.list').value;
    var liElement = document.createElement('li');
    var textElement = document.createTextNode(inputElement);
    var linkElement = document.createElement('a');
    var linkText = document.createTextNode(' Excluir');
    
    linkElement.appendChild(linkText);
    linkElement.setAttribute('href', '#');
    liElement.appendChild(textElement);
    liElement.appendChild(linkElement);

    list.appendChild(liElement);

}
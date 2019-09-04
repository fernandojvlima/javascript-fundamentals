var btnElement = document.querySelector('button#addLink');

btnElement.onmouseover = function() {
    var linkElement = document.createElement('a');
    linkElement.setAttribute('href' , 'http://rocketseat.com.br');

    var linktext = document.createTextNode('Click to access RocketSeat Now');
    
    linkElement.appendChild(linktext);

    var divApp = document.querySelector('div#app');

    divApp.appendChild(linkElement);
}
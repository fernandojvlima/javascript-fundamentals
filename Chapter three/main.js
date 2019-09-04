var todos = ['Make Coffee' , 'Go Javascript', 'Verify the Plataform'];
var list = document.querySelector('ul');

function renderTodos() {
    for (todo of todos) {
        var elementLi = document.createElement('li');
        var textElement = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        var linkText = document.createTextNode(' Excluir');
        linkElement.appendChild(linkText);
        linkElement.setAttribute('href' , '#');

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo('+ pos +')');

        elementLi.appendChild(textElement);
        elementLi.appendChild(linkElement);
        list.appendChild(elementLi);
    }
}

    renderTodos();

var btnElement = document.querySelector('div#list button.botao');

btnElement.onclick = function () {
    var inputElement = document.querySelector('input.list').value;
    todos = [];
    todos.push(inputElement);
    inputElement.value =' ';
    renderTodos();

}

function deleteTodo(pos){
    todos.splice(pos, 1);
    renderTodos();
}
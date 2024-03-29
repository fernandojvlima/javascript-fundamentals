var todos = JSON.parse(localStorage.getItem('list_todos')) || [];
var listElement = document.querySelector('ul');
var inputElement = document.querySelector('div#list input');

function renderTodos() {
    listElement.innerHTML = '';

    for (todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        var linkText = document.createTextNode(' Excluir');
        linkElement.appendChild(linkText);
        linkElement.setAttribute('href' , '#');

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo('+ pos +')');

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }
}

var btnElement = document.querySelector('div#list button.botao');

renderTodos();

function addTodo(){
    var todoText = inputElement.value;
    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
    saveToStorage();
}

btnElement.onclick = addTodo;

function deleteTodo(pos){
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

//***  Very Important
function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos));
}

//One way to find a element in DOM and bring to action.
var inputElement = document.getElementById('input');
console.log(inputElement);
//The return through 'id' will be unique

//Howeever, using:  document.getElementByTagName (will return a vector of elements)

// If you need one of the elements, you have to indicate the position, 
// document.getElementByClassName('input')[0];

// querySelector is very usefull for these situations also.

var btnElement = document.querySelector('button#button2');
var inputElement2 = document.querySelector('input#input2');


btnElement.onclick = function() {
    var textElement = inputElement2.value; 
    alert(textElement);
}
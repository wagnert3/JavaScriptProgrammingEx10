// create a div
let myDiv = document.createElement('div');

// set attributes of my div
myDiv.setAttribute('id', 'newDiv');
myDiv.setAttribute('class','box');

// Create text node
let divContent = document.createTextNode('We are creating a new div!');

myDiv.appendChild(divContent);

document.body.appendChild(myDiv);
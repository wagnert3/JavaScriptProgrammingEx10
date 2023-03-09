// create a div
let myDiv = document.createElement('div');

// set attributes of my div
myDiv.setAttribute('id', 'newDiv');
myDiv.setAttribute('class','box box2');

// Create text node
let divContent = document.createTextNode('We are creating a new div!');

myDiv.appendChild(divContent);

//same as: myDiv.innerText = 'We are creating a new div!';

document.body.appendChild(myDiv);

let newParagraph = document.createElement('p');
newParagraph.setAttribute('id', 'newParagraph');
newParagraph.innerHTML = '<h3>This is my paragraph</h3>';
myDiv.appendChild(newParagraph);

let button = document.createElement('button');
button.setAttribute('class', 'myButton');
button.innerText = 'Click me';

myDiv.insertBefore(button, newParagraph);

let p = document.createElement('p');
myDiv.appendChild(p);

button.addEventListener('click', () => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    button.style.color = `rgb(${r},${g},${b})`;

    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);

    myDiv.style.backgroundColor = `rgb(${r},${g},${b})`;

    p.innerText = `Div bg colour is r:${r} g:${g} b:${g}`;

    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);

    document.body.style.backgroundColor = `rgb(${r},${g},${g}`;
});

//console.error('there is an error');

// var titles = document.querySelectorAll('.title');
// console.log(titles);

// titles[0].textContent = 'Add an item';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// for (var i = 0; i < odd.length; i++) {
//     odd[i].style.backgroundColor = '#f4f4f4';
//     even[i].style.backgroundColor = '#ccc';

// }

//const itemInput = document.querySelectorAll('#item');

// itemInput.addEventListener('submit', onSubmit)

// function onSubmit(e) {
//     e.preventDefault();

//console.log(itemInput.value);
// }


// ? traversing the Dom
// var itemsList = document.querySelector('#items');
// parentNode
// console.log(itemsList.parentNode);
//itemsList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemsList.parentNode.parentNode);

// ? parent Element does same thing
// console.log(itemsList.parentElement);

// ? child nodes
//console.log(itemsList.childNodes);// do not use this

// ? children
// console.log(itemsList.children[1]);
// itemsList.children[1].style.backgroundColor = 'yellow';

// ? firstChild
// console.log(itemsList.firstChild); // do not use firstChild use: first element Child
// console.log(itemsList.firstElementChild);
// itemsList.firstElementChild.style.fontWeight = 'bold';
// itemsList.firstElementChild.style.backgroundColor = '#333';
// itemsList.firstElementChild.style.color = '#fff';

// ? lastChild
// console.log(itemsList.lastChild); // do not use lastChild use:
// console.log(itemsList.lastElementChild);
// itemsList.lastElementChild.style.fontWeight = 'bold';
// itemsList.lastElementChild.style.backgroundColor = 'green';
// itemsList.lastElementChild.style.color = 'white';

//? nextElementSibling
//console.log(itemsList.nextElementSibling);
// ? previousElementSiblings
// console.log(itemsList.previousElementSibling);
//itemsList.previousElementSibling.style.color = 'green';

// ! Creating Element // how to create new elements and insert them

//var newDiv = document.createElement('div') // to create elements

// ? add class

//newDiv.className = 'hello';
// ? add id

//newDiv.id = 'bye'
//  ? add attribute

//newDiv.setAttribute('style', 'background-color: #1f2122; text-align: center; padding:10px; margin:10px; ') //! the first column is the type of attribute while the second column is for the name of the attribute

// ? create a text node: this is to put a text inside your newly created div or elements in your code

//var newDivText = document.createTextNode(' Hello world '); //creating text node

// ? add text to div
//newDiv.appendChild(newDivText); //appending meaning add to the dom. child (the variable which the text was contained)


// ? how to inserted your created text node into your code
//var contain = document.querySelector('header .container'); //creating a variable contain then selecting the container inside the header
//var h1 = document.querySelector('header h1') // then selecting h1
//console.log(newDiv); // logging newDiv

//contain.insertBefore(newDiv, h1) // then  inserting it before the header h1

// ! events
//var click = document.querySelector('#button');
//click.addEventListener('click', buttonClicked);

//function buttonClicked(e) {
// console.log('clicked');
// document.getElementById('header-title').textContent = ' Changed';
// document.querySelector('#main').style.backgroundColor = '#f4f4f4';
//console.log(e);
// console.log(e.target.className);
// console.log(e.target.id);
// console.log(e.target.classList.value);

// var output = document.getElementById('output');
// output.innerHTML = '<h3>' + e.target.id + '</h3>';

// ! mouse position 
// console.log(e.clientY); //  from the browser
// console.log(e.clientX);// from the browser
// console.log(e.offsetX); //from the element
// console.log(e.offsetY); //from the element

// console.log(e.altKey);
// console.log(e.ctrlKey);
// console.log(e.shiftKey);
// ? writing a script that  checks wether the special keys are held  down
// if (e.altKey === true || e.ctrlKey === true || e.shiftKey === true) {
//     console.log('you are holding your alt key, ctrl key or shiftKey');
// } else {
//     alert('please hold down your alt key, ctrl key or shiftKey');
// }
//}
//var click = document.querySelector('#button');
//var box = document.getElementById('box');
//click.addEventListener('mouseout', runEvent)
//click.addEventListener('mouseout', runEvent);


//box.addEventListener('mouseenter', runEvent); // mouse enter is for the parent element
//box.addEventListener('mouseleave', runEvent);//for parent element...
//box.addEventListener('mouseover', runEvent); // for the  inner element...
//box.addEventListener('mouseout', runEvent);//for the  inner element...
//var itemInput = document.querySelector('input[type = "text"]');
//var form = document.querySelector('form');
//var select =document.querySelector('select')

//itemInput.addEventListener('keydown', runEvent);
//itemInput.addEventListener('keyup', runEvent);
//itemInput.addEventListener('focus', runEvent);
//itemInput.addEventListener('blur', runEvent);
//itemInput.addEventListener('cut', runEvent);
//itemInput.addEventListener('paste', runEvent);
//itemInput.addEventListener('input', runEvent);
//console.log(itemInput.value);
// box.addEventListener('mousemove', runEvent);
//select.addEventListener('change', runEvent)
//form.addEventListener('submit', runEvent)
//! event Type
//function runEvent(e) {
 //   e.preventDefault()
    //console.log('Event Type: ' + e.type);
    //document.body.style.display = 'none';
    // output.innerHTML = '<h3>Mouse: ' + e.offsetX + ' </h3> <h3>MouseX: ' + e.offsetY + '</h3> ';

    // document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},51)`;
//     document.getElementById('output').innerHTML = `<h3> ${e.target.value} </h3>`
 //console.log(e.target.value);

//}
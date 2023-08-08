//! variable adding

var addForm = document.getElementById('addForm'); 
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');



// ! form submit event,|| add event to item list to delete list,||filter event
addForm.addEventListener('submit', submitItem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItem);


// ! add item to the  li
function submitItem(e) {
    e.preventDefault(); // stopping initial behavior

// !get input value
var newItem = document.getElementById('item').value;
// ! create|new|element(li) ||
var newLi = document.createElement('li');
// !  adding the class list of the other li's
newLi.classList ='list-group-item';
// ! newLi = newItem.value;
// ! add text node with input value
newLi.appendChild(document.createTextNode(newItem));

// ! create del btn element
// ? var del = document.createElement('button')
var i = document.createElement('i')
// ! add all the classes of the other button to btn you are creating
// ? del.classList = 'btn btn-danger float-end delete align-item-center';
i.classList = 'fa-regular fa-trash-can fa-2x text-dark pointen float-end delete ix';
// ! append text node
// ? del.appendChild(document.createTextNode('x'));
// ! add to li to list
newLi.appendChild(i);
// ? newLi.appendChild(del);

itemList.appendChild(newLi);
}
// ! remove item
function removeItem(e) {
  if (e.target.classList.contains('delete')  ) {
    if (confirm(`Are you sure you want to delete ? :0`)) {
        var li = e.target.parentElement;
        itemList.removeChild(li)
    }
  }
// console.log(e.target.parentElement);
// console.log(e.target.classList.contains('delete'));
}

// ! to filter out the items 

function filterItem(e) {
  // get the txt then covert to lower case
  var txt = e.target.value.toLowerCase();
  //  get list
 var items  = itemList.getElementsByTagName('li');
// convert HTML collection  to array
Array.from(items).forEach(item =>{
var itemName = item.firstChild.textContent;
console.log(itemName);

if( itemName.toLowerCase().indexOf(txt) != -1){
item.style.display = 'block';

}else{
  item.style.display = 'none';
}
console.log(itemName.toLowerCase().indexOf(txt));
console.log(itemName);
});
}
var array =Array.from(itemList);
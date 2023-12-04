var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');


form.addEventListener('submit', addItem);

itemList.addEventListener('click', removeItem);

function addItem(e){
  e.preventDefault();

  var newItem = document.getElementById('item').value;


  var li = document.createElement('li');

  li.className = 'list-group-item';

  li.appendChild(document.createTextNode(newItem));
    

  var deleteBtn = document.createElement('button');


  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';


  deleteBtn.appendChild(document.createTextNode('X'));


  li.appendChild(deleteBtn);


  itemList.appendChild(li);
}


function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}


var editBtn = document.createElement('edit');
editBtn.className = 'btn-sm float-right';
editBtn.appendChild(document.createTextNode('E'));
editBtn.style.background = 'green';
editBtn.style.color = 'white';
editBtn.style.paddingBottom = '5px';
editBtn.style.marginRight = '5px';

var items = document.getElementsByClassName('list-group-item');

for(var i=0;i<items.length;i++){
    var editBtn = document.createElement('edit');
    editBtn.className = 'btn-sm float-right';
    editBtn.appendChild(document.createTextNode('E'));
    editBtn.style.background = 'green';
    editBtn.style.color = 'white';
    editBtn.style.paddingBottom = '5px';
    editBtn.style.marginRight = '5px';

    items[i].appendChild(editBtn);
}


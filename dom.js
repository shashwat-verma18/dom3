var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');


form.addEventListener('submit', addItem);

itemList.addEventListener('click', removeItem);

filter.addEventListener('keyup', filterItems);

editbtn(0);

function addItem(e){
  e.preventDefault();

  var newItem = document.getElementById('item').value;

  var newDes = document.getElementById('item2').value;

  var val = newItem+' '+newDes;
  
  var li = document.createElement('li');

  li.className = 'list-group-item';

  li.appendChild(document.createTextNode(val));
    

  var deleteBtn = document.createElement('button');


  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';


  deleteBtn.appendChild(document.createTextNode('X'));


  li.appendChild(deleteBtn);


  itemList.appendChild(li);

  var items = document.getElementsByClassName('list-group-item');

  console.log('Length : ',items.length);
  editbtn(items.length-1);


}


function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

function editbtn(x){
    var items = document.getElementsByClassName('list-group-item');

    for(var i=x;i<items.length;i++){
        var editBtn = document.createElement('edit');
        editBtn.className = 'btn-sm float-right';
        editBtn.appendChild(document.createTextNode('Edit'));
        editBtn.style.background = 'green';
        editBtn.style.color = 'white';
        editBtn.style.paddingBottom = '5px';
        editBtn.style.marginRight = '5px';

        items[i].appendChild(editBtn);
    }
}


function filterItems(e){

    var text = e.target.value.toLowerCase();

    var items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(item){
      var itemName = item.firstChild.textContent;
      if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
 }




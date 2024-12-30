//fetch from database

//store data locally

//alert('JavaScript is connected!');
//fetch items 
function get_todos(){
	var todos = new Array;
	var todos_str = localStorage.getItem('todo');
	if (todos_str!==null){ //not empty
		todos = JSON.parse(todos_str);
		//converts json string back into js data
	}
	return todos;
}


function add(){
	var task = document.getElementById('task').value;
	var todos = get_todos();
	todos.push(task); //appends to a list
	localStorage.setItem('todo', JSON.stringify(todos));
	show(); //write function
	return false; //avoids any further actions
}

function clearDefault(a){ //clears input 
	if (a.defaultValue == a.value){
		a.value="";
	}
}


function remove(){ //clicks on remove button next to task
	var id= this.getAttribute('id'); //retrieve id of currnt element
	var todos = get_todos(); //index
	todos.splice(id,1); //remove specific item from array
	localStorage.setItem('todo', JSON.stringify(todos));
	show(); //store what is left in local storage
	return false;
}

function show(){
	var todos = get_todos(); //get list of array
	var html = '<ul>'; //manually creating a list
	for( var i=0; i<todos.length; i++){
		//adds button to each element belonging to class remove
		//buttons enable user to remove 
		html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">Completed</button> </li>';
	};
	html +='</ul>';

	//insert new html into original html
	document.getElementById('todos').innerHTML = html;

	//fethc all buttons in previous class
	//assign event listener
	//which triggers functions
	var buttons = document.getElementsByClassName('remove');
	for (var i=0; i<buttons.length;i++){
		buttons[i].addEventListener('click', remove);
	};
}

//
document.getElementById('add').addEventListener('click', add);
show();

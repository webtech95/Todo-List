
let list = ['Create a Pen', 'Go for a walk'];


const inputbox = document.getElementById("todo-input")

document.getElementById('todo-add-btn').onclick = function () {
        if (inputbox.value === '') {
            alert("Phele kuch likh le BRO!");
            return
        }

    let todotext = document.getElementById('todo-input').value;
 

    // Create a Complete button element
    let deleteButton = document.createElement('button');

    // Add delete btn
    deleteButton.classList.add('delete-btn');

    let listitem = document.createElement('li');

    listitem.classList.add('todo-list');

    // Create delete buttons
    deleteButton.innerText = 'x';


    let tasktext = document.createElement('span');

    tasktext.classList.add('task-text');

    tasktext.innerText = todotext;

// Add task item
    listitem.appendChild(tasktext);

// add delete btn 
    listitem.appendChild(deleteButton);

    document.getElementById('todo-list').appendChild(listitem);

    deleteButton.onclick = function () {
        tasktext.parentElement.remove();
    };

};

inputbox.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        document.getElementById('todo-add-btn').click();
    }
});

document.querySelectorAll('.delete-btn').forEach(function (element) {
    element.onclick = function () {
        element.parentElement.remove();
    };
});
const ul = document.querySelector('ul');
const input = document.getElementById('item');

if (localStorage.getItem('items') === null) {
    localStorage.setItem('items', JSON.stringify([]));
}
let itemsArray = JSON.parse(localStorage.getItem('items'));
console.log(itemsArray);

function addTask(text) {
    const newTask = document.createElement('li');
    newTask.textContent = text;
    const ul = document.querySelector('ul.to-do-list');
    ul.appendChild(newTask);
}
addTask('Do homework');

const tasks = ['task1', 'task2', 'task3'];
tasks.forEach(task => {
    addTask(task);
});

function add() {
    const input = document.querySelector('input[type="text"]');
    const value = input.value.trim(); 
    if (value !== '') {
        itemsArray.push(value);
        localStorage.setItem('items', JSON.stringify(itemsArray));
        addTask(value);
        input.value = '';
    }
}

window.onload = function() {
    const storedItems = localStorage.getItem('items');
    if (storedItems) {
        itemsArray = JSON.parse(storedItems);
        itemsArray.forEach(item => addTask(item));
    }
};

function del() {
    localStorage.removeItem('items');
    itemsArray = [];
    const ul = document.querySelector('ul.to-do-list');
    ul.innerHTML = '';
}

const list = ['html', 'css', 'javascript', 'react.js'];
const ul = document.createElement('ul');
list.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
});
document.getElementById('container').appendChild(ul);

const listWithHref = [
    { 'html': "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { 'css': "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { 'javascript': "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { 'react.js': "https://react.dev" }
];
const ol = document.createElement('ol');
listWithHref.forEach(item => {
    const [text, link] = Object.entries(item)[0];
    const a = document.createElement('a');
    a.href = link;
    a.textContent = text;
    const li = document.createElement('li');
    li.appendChild(a);
    ol.appendChild(li);
});
document.getElementById('container').appendChild(ol);

const students = [
    { 'firstName': 'Tom', 'lastName': 'Cat', 'degree': 230 },
    { 'firstName': 'Nary', 'lastName': 'Ann', 'degree': 336 },
    { 'firstName': 'John', 'lastName': 'Doe', 'degree': 400 },
    { 'firstName': 'James', 'lastName': 'Bond', 'degree': 700 },
];
const table = document.createElement('table');
table.classList.add('students-table');
const thead = document.createElement('thead');
const trHeader = document.createElement('tr');
['firstName', 'lastName', 'degree'].forEach(headerText => {
    const th = document.createElement('th');
    th.textContent = headerText;
    th.classList.add('header-cell');
    trHeader.appendChild(th);
});
thead.appendChild(trHeader);
table.appendChild(thead);
const tbody = document.createElement('tbody');
students.forEach(student => {
    const tr = document.createElement('tr');
    ['firstName', 'lastName', 'degree'].forEach(prop => {
        const td = document.createElement('td');
        td.textContent = student[prop];
        td.classList.add('data-cell');
        tr.appendChild(td);
    });
    tbody.appendChild(tr);
});
table.appendChild(tbody);
document.getElementById('container').appendChild(table);


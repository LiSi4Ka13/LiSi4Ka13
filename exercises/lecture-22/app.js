const classes = ['first', 'second', 'third', 'fourth'];

const h1Elements = document.querySelectorAll('h1');
console.log(typeof h1Elements);
console.log('Розмір об\'єкту h1Elements:', h1Elements.length);
for (let i = 0; i < h1Elements.length; i++) {
    console.log(h1Elements[i]);
}

const paragraph1 = document.querySelector('#p1');
paragraph1.style.backgroundColor = 'gold';

const paragraph2 = document.querySelector('#p2');
paragraph2.style.backgroundColor = 'gold';
paragraph2.style.color = 'blue';
paragraph2.style.fontSize = '2rem';

const paragraph3 = document.querySelector('#p3');
paragraph3.classList.add('third');

const paragraph4 = document.querySelector('#p4');
paragraph4.classList.add('fourth', 'border');

const containers = document.querySelectorAll('.container');
for (let i = 0; i < containers.length; i++) {
    const firstChild = containers[i].firstElementChild;
    console.log(firstChild);
}

for (let i = 0; i < containers.length; i++) {
    const firstChildContent = containers[i].firstElementChild.textContent;
    console.log(firstChildContent);
}

const headers = document.querySelectorAll('.container header');
for (let i = 0; i < headers.length; i++) {
    switch (i) {
        case 1:
            headers[i].innerHTML = '<h2>' + headers[i].innerHTML + '</h2>';
            break;
        case 2:
            headers[i].innerHTML = '<h3>' + headers[i].innerHTML + '</h3>';
            break;
        case 3:
            const id = headers[i].id;
            const classList = headers[i].className;
            headers[i].innerHTML = '<h4 id="' + id + '" class="' + classList + '">' + headers[i].innerHTML + '</h4>';
            break;
        default:
            break;
    }
}

for (let i = 0; i < headers.length; i++) {
    switch (i) {
        case 0:
            headers[i].classList.add('first');
            break;
        case 1:
            headers[i].classList.add('second');
            break;
        case 2:
            headers[i].classList.add('third');
            break;
        case 3:
            headers[i].classList.add('fourth');
            break;
        default:
            break;
    }
}
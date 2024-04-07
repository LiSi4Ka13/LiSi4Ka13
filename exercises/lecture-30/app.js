setTimeout(function() {
    const firstName = document.querySelector('#demoForm [name="firstName"]').value;
    const lastName = document.querySelector('#demoForm [name="lastName"]').value;
    if (!firstName && !lastName) {
        document.getElementById('waiting').textContent = "I'm miss You";
    } else {
        document.getElementById('waiting').textContent = `Hello ${firstName} ${lastName}!`;
    }
}, 10000);


let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
        let items = JSON.parse(xhr.responseText);
        let template = '';
        items.forEach(function(item) {
            template += `
                <div>
                <h3>${item.title}</h3>
                <div>${item.body}</div>
                </div>
            `;
        });
        document.getElementById('demo').innerHTML = template;
    } else {
        console.error('Не вдалося здійснити запит: ' + xhr.status);
    }
};
xhr.send();

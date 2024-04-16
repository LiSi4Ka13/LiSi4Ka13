const url = "https://jsonplaceholder.typicode.com/posts";

const template = (item) => `
<h3>${item.title}</h3>
<div>${item.body}</div>
<p>Author: <strong><span class="author" data-id="${item.userId}"></span></strong></p>
`;

const xhrPromise = (method, url) => {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.send();
  
    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
      }
    };

    xhr.onerror = () => {
      reject('Something went wrong!');
    };   
  });

  return promise;
};

xhrPromise("GET", url)
  .then(response => {
    const posts = JSON.parse(response);
    const userIds = posts.map(post => post.userId); 
    const uniqueUserIds = [...new Set(userIds)];

    const usersPromise = fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });

    return Promise.all([usersPromise, uniqueUserIds, posts]); 
  })
  .then(([users, uniqueUserIds, posts]) => { 
    const userNames = {};
    users.forEach(user => {
      userNames[user.id] = user.name;
    });

    uniqueUserIds.forEach(userId => {
      const authorElement = document.querySelector(`.author[data-id="${userId}"]`);
      if (authorElement) {
        authorElement.textContent = userNames[userId];
      }
    });

    const blogElement = document.getElementById("blog");
    posts.forEach(post => {
      blogElement.insertAdjacentHTML('beforeend', template(post));
    });
  })
  .catch(error => {
    console.error(error);
  });

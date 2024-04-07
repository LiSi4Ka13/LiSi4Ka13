class AuthException extends Error {
  constructor(code, message) {
    super(message ? `${code}: ${message}` : code);
    this.code = code;
  }
  toString() {
    return this.message;
  }
}

const checkAuth = document.querySelector('.check-auth');

checkAuth.addEventListener('click', function() {
  try {
  } catch (e) {
      console.error('Сталася помилка:', e);
  }
});

checkAuth.addEventListener('click', function() {
  try {
      const isAuthenticated = isAuth(); 

      if (!isAuthenticated) {
          throw new AuthException('FORBIDDEN', 'You don\'t have access to this page');
      }

  } catch (e) {
      console.error('Сталася помилка:', e);
  }
});

checkAuth.addEventListener('click', function() {
  try {
      const isAuthenticated = isAuth(); 

      if (!isAuthenticated) {
          throw new AuthException('FORBIDDEN', 'You don\'t have access to this page');
      }

  } catch (e) {
      if (e instanceof AuthException) {
          const errorMessage = e.message;
          const dialogBox = document.getElementById('dialogBoxId');
          dialogBox.querySelector('.message').textContent = errorMessage;
      } else {
          console.error('Сталася помилка:', e);
      }
  }
});

checkAuth.addEventListener('click', function() {
  try {
      const isAuthenticated = isAuth(); 

      if (!isAuthenticated) {
          throw new AuthException('FORBIDDEN', 'You don\'t have access to this page');
      }

      window.open('success.html', '_blank');

  } catch (e) {
      if (e instanceof AuthException) {
          const errorMessage = e.message;
          const dialogBox = document.getElementById('dialogBoxId');
          dialogBox.querySelector('.message').textContent = errorMessage;
      } else {
          console.error('Сталася помилка:', e);
      }
  }
});



let isAuth = (auth)  => auth ?? false;

let dialogBoxId=document.getElementById("dialogBox");

function showDialog(e){
  dialogBoxId.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      e.preventDefault();
    }
  });
  
  dialogBoxId.showModal();
}

function closeDialog(){
  dialogBoxId.close(); 
}


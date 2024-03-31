const alert = document.querySelector('.alert');

const butt = document.querySelector('.btn-primary');
butt.onclick = function() {
  alert.classList.add('alert-primary');
  alert.textContent = 'A simple primary alert—check it out!';
};

const butt2 = document.querySelector('.btn-secondary');
butt2.onclick = function() {
  alert.classList.add('alert-primary');
  alert.textContent = 'A simple secondary alert—check it out!';
};

const butt3 = document.querySelector('.btn-success');
butt3.addEventListener('mouseover', function() {
  alert.classList.add('alert-success');
  alert.textContent = 'A simple success alert—check it out!';
});

butt3.addEventListener('mouseout', () => {
    alert.classList.remove('alert-success');
    alert.textContent = '';
});


const butt4 = document.querySelector('.btn-danger');
butt4.addEventListener('focus', function() {
  alert.classList.add('alert-danger');
  alert.textContent = 'A simple danger alert—check it out!';
});
butt4.addEventListener('focusout', function() {
  alert.classList.remove('alert-danger');
  alert.textContent = '';
});

const btnDark = document.querySelector('.btn-dark');
const btnLight = document.querySelector('.btn-light');
function toggleMode() {
  document.body.classList.toggle('dark-mode');
  const isDarkMode = document.body.classList.contains('dark-mode');
  if (isDarkMode) {
    btnDark.style.display = 'none'; 
    btnLight.style.display = 'inline-block'; 
  } else {
    btnDark.style.display = 'inline-block'; 
    btnLight.style.display = 'none';
  }
}
btnDark.addEventListener('click', toggleMode);
btnLight.addEventListener('click', toggleMode);
toggleMode();

const butt6 = document.querySelector('.btn-info');
butt6.addEventListener('keypress',  function(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    alert.classList.add('alert-info');
    alert.textContent = 'A simple info alert-check it out!';
  }
});

const cardAll = document.querySelectorAll('.card');
for (const card of cardAll) {
  const content = card.querySelector('.card-title').textContent;
  console.log(content);
}

for (const card of cardAll) {
    const content = card.querySelector('.card-title').textContent;
    const buttonToCart = card.querySelector('.add-to-cart');
    buttonToCart.addEventListener('click', () => console.log(content));
  }
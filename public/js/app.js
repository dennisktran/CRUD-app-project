// btn
const signUpBtn = document.querySelector('.sign-up-btn');
const mainBtn = document.querySelector('.ham-btn');
const pass = document.querySelector('.password')
const passcheck = document.querySelector('.passwordcheck')
// modal
const modalSignUp = document.querySelector('.modal-signup');
const modalLogIn = document.querySelector('.modal-login');

// event listeners
window.addEventListener('click', function(e) {
    if (e.target === modalLogIn || e.target === modalSignUp) {
         modalLogIn.style.display = 'none';
         modalSignUp.style.display = 'none';
     }
 });

mainBtn.addEventListener('click', function() {
    modalLogIn.style.display = 'block';
});

signUpBtn.addEventListener('click', function() {
    modalSignUp.style.display = 'block';
});

passcheck.addEventListener('keyup', function() {
  const password = document.querySelector('.password').value
  const passwordCheck = document.querySelector('.passwordcheck').value
  const mismatch = document.querySelector('.mismatch')
  const click = document.querySelector("sign-up-modal btn")
  if (password === passwordCheck) {
    mismatch.innerText = ''
    click.disabled = false
  } else
    mismatch.innerText = "Passwords don't match. Please re-enter"
    click.disabled = true
});

// btn
const signUpBtn = document.querySelector('.sign-up-btn');
const mainBtn = document.querySelector('.ham-btn');

// modal
const modalSignUp = document.querySelector('.modal-signup');
const modalLogIn = document.querySelector('.modal-login');
const modalMain = document.querySelector('modal-main');


mainBtn.addEventListener('click', function() {
    modalLogIn.style.display = 'block';
});

signUpBtn.addEventListener('click', function() {
    modalSignUp.style.display = 'block';
});

window.addEventListener('click', function(e) {
   if (e.target === modalLogIn || e.target === modalSignUp) {
        modalLogIn.style.display = 'none';
        modalSignUp.style.display = 'none';
    }
});

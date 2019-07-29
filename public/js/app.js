// btn
const signUpBtn = document.querySelector('.sign-up-btn');
const mainBtn = document.querySelector('.ham-btn');
const loggedBtn = document.querySelector('.logged');

// modal
const modalSignUp = document.querySelector('.modal-signup');
const modalLogIn = document.querySelector('.modal-login');
const modalMain = document.querySelector('modal-main');
const modalLogged = document.querySelector('.modal-logged-in');


mainBtn.addEventListener('click', () => {
    modalLogIn.style.display = 'block';
});

loggedBtn.addEventListener('click', () => {
    modalLogged.style.display = 'block';
})

signUpBtn.addEventListener('click', () => {
    modalSignUp.style.display = 'block';
});

window.addEventListener('click', (e) => {
   if (e.target === modalLogIn || e.target === modalSignUp || e.target === modalLogged) {
        modalLogIn.style.display = 'none';
        modalSignUp.style.display = 'none';
        modalLogged.style.display = 'none';
    }
});

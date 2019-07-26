const signUpBtn = document.querySelector('.sign-up-btn');
const signInBtn = document.querySelector('.log-in-btn');
const modalSignUp = document.getElementsByClassName('modal')[0];
const modalLogIn = document.getElementsByClassName('modal')[1];


signInBtn.addEventListener('click', function() {
    modalLogIn.style.display = 'block';
});

signUpBtn.addEventListener('click', function() {
    modalSignUp.style.display = 'block';
});

window.addEventListener('click', function(e) {
   if (e.target === modalLogIn || e.target === modalSignUp ) {
        modalLogIn.style.display = 'none';
        modalSignUp.style.display = 'none';
    }
});


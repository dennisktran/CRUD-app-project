// btn
const signUpBtn = document.querySelector('.sign-up-btn');
const mainBtn = document.querySelector('.ham-btn');
const displayCommentBtn = document.querySelector('.display-comment-btn');
const comment = document.querySelector('.comment-area')
// modal
const modalSignUp = document.querySelector('.modal-signup');
const modalLogIn = document.querySelector('.modal-login');
const modalForm = document.querySelector('.comment-form');

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

comment.addEventListener('click', function() {
  comment.textContent = '';
})

displayCommentBtn.addEventListener('click', function() {
    displayCommentBtn.style.display = 'none';
    modalForm.style.display = 'block';
})

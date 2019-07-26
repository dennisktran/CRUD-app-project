// btn
const accountBtn = document.querySelector('.account-btn');

//modal
const modalAccount = document.querySelector('.modal-account')

// event listeners
accountBtn.addEventListener('click', function() {
    modalAccount.style.display = 'block';
});

window.addEventListener('click', function(e) {
    if (e.target === modalAccount ) {
         modalAccount.style.display = 'none';
     }
 });
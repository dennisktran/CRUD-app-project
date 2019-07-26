// btn
const accountBtn = document.querySelector('.account-btn');
const uploadBtn = document.querySelector('.upload-btn');

//modal
const modalAccount = document.querySelector('.modal-account');
const modalUpload = document.querySelector('.modal-upload');

// event listeners
accountBtn.addEventListener('click', function() {
    modalAccount.style.display = 'block';
});

uploadBtn.addEventListener('click', function() {
    modalUpload.style.display = 'block';
});

window.addEventListener('click', function(e) {
    if (e.target === modalAccount || e.target === modalUpload ) {
         modalAccount.style.display = 'none';
         modalUpload.style.display = 'none';
     }
 });
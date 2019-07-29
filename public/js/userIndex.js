
// btn
const accountBtn = document.querySelector('.account-btn');
const uploadBtn = document.querySelector('.upload-btn');
const editBtn = document.querySelector('.edit-btn');
const deleteBtn = document.querySelector('.delete-btn');
const logOutBtn = document.querySelector('.log-out')

//modal
const modalAccount = document.querySelector('.modal-account');
const modalUpload = document.querySelector('.modal-upload');
const modalEditForm = document.querySelector('.edit-form')

// event listeners
accountBtn.addEventListener('click', function() {
    modalAccount.style.display = 'block';
});

uploadBtn.addEventListener('click', function() {
    modalUpload.style.display = 'block';
});

editBtn.addEventListener('click', function() {
    modalEditForm.style.display = 'flex';
    editBtn.style.display = 'none';
    deleteBtn.style.display = 'none';
    logOutBtn.style.display = 'none';
});

window.addEventListener('click', function(e) {
    if (e.target === modalAccount || e.target === modalUpload ) {
        modalAccount.style.display = 'none';
        modalUpload.style.display = 'none';
        modalEditForm.style.display = 'none';
        editBtn.style.display = 'block';
        deleteBtn.style.display = 'block';
        logOutBtn.style.display = 'block';
     }
 });

// btn
const hamBtn = document.querySelector('.ham-btn');
const uploadBtn = document.querySelector('.upload-btn');
const editBtn = document.querySelector('.edit-btn');
const deleteBtn = document.querySelector('.delete-btn');
const logOutBtn = document.querySelector('.log-out');
const editVideoBtn = document.querySelector('.edit-vid-btn');

//modal
const modalAccount = document.querySelector('.modal-account');
const modalUpload = document.querySelector('.modal-upload');
const modalEditUser = document.querySelector('.edit-user');
const modalEditVideo = document.querySelector('.modal-edit-vid')

// event listeners
hamBtn.addEventListener('click', function() {
    modalAccount.style.display = 'block';
});

uploadBtn.addEventListener('click', function() {
    modalUpload.style.display = 'block';
});

editBtn.addEventListener('click', function() {
    modalEditUser.style.display = 'flex';
    editBtn.style.display = 'none';
    deleteBtn.style.display = 'none';
    logOutBtn.style.display = 'none';
});

editVideoBtn.addEventListener('click', function() {
    modalEditVideo.style.display = 'block';
});


window.addEventListener('click', function(e) {
    if (e.target === modalAccount || e.target === modalUpload || e.target === modalEditVideo ) {
        modalAccount.style.display = 'none';
        modalUpload.style.display = 'none';
        modalEditUser.style.display = 'none';
        editBtn.style.display = 'block';
        deleteBtn.style.display = 'block';
        logOutBtn.style.display = 'block';
        modalEditVideo.style.display = 'none';
     }
 });
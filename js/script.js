// script.js
const editProfileBtn = document.getElementById('edit-profile-btn');
const editProfileForm = document.getElementById('edit-profile-form');
const saveProfileBtn = document.getElementById('save-profile-btn');

editProfileBtn.addEventListener('click', () => {
    editProfileForm.style.display = 'block';
    editProfileBtn.style.display = 'none';
});

saveProfileBtn.addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // Update the profile information
    document.querySelector('.profile h2').textContent = name;
    document.querySelector('.profile p:nth-child(2)').textContent = email;
    document.querySelector('.profile p:nth-child(3)').textContent = phone;

    editProfileForm.style.display = 'none';
    editProfileBtn.style.display = 'block';
});
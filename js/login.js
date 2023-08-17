// step-1: add click event handeler with the submit button
document.getElementById('login-btn').addEventListener('click', function(){
    // step-2: Get the email address inside email input field
    // Always Remember to use .value to get text from an input field
    const emailfield = document.getElementById('user-email');
    const email = emailfield.value;
    // console.log(email);
    // step-3: Get password
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // console.log(password);

    // warning!!! Do not verify email and password on the client side
    // step-4: Verify Email And Password and check whether valid user or not
    if(email === 'mdosmangoni6355@gmail.com' && password === 'JAAANtus'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Invalid User');
    }
})
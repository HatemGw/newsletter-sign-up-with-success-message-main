let email = document.getElementById('email');
let submitButton = document.getElementById('submit');
let notValid = document.querySelector('.email label #validity');
let container = document.querySelector(".container");
let overlay = document.querySelector('.overlay');
let dissmis = document.querySelector('.overlay a');
submitButton.addEventListener('click',()=>{
    if(email.checkValidity()){
        overlay.classList.remove('hide');
        container.classList.add('hide');
    }
    else{
        notValid.innerHTML='valid email required';
        email.classList.add('validity');
    }
})

dissmis.addEventListener('click',()=>{
    overlay.classList.add('hide');
    container.classList.remove('hide');
})
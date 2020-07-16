let emailaddress = document.querySelector('#emailaddress');
let passwordfield = document.querySelector('#passwordfield');
let feedback1 =document.querySelector('.feedback1');
let feedback2 = document.querySelector('.feedback2');
let feedbackValid1 =document.querySelector('.feedback-valid1');
let feedbackValid2 = document.querySelector('.feedback-valid2');
let submit = document.querySelector('#submit')
emailaddress.addEventListener('keyup',emailfun);

function emailfun(){
    let str = emailaddress.value;
    let val = /^[a-zA-Z0-9-~@.]+$/;
    if(val.test(str)){
        emailaddress.classList.remove('is-invalid');
        emailaddress.classList.add('is-valid');
    }else if(str.length == 0){
        emailaddress.classList.remove('is-valid');
        emailaddress.classList.remove('is-invalid');
    }else{
        emailaddress.classList.remove('is-valid');
        emailaddress.classList.add('is-invalid');
    }
};
passwordfield.addEventListener('keyup',passwordfun);
function passwordfun(){
    let str =  passwordfield.value;
    if(str.length <= 5){
        passwordfield.classList.add('is-invalid');
    }else if(str.length == 0){
        passwordfield.classList.remove('is-valid');
        passwordfield.classList.remove('is-invalid');    
    }else{
        passwordfield.classList.remove('is-invalid');
    }
}

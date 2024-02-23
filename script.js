const input= document.getElementById('email-input')
const errorMessage= document.getElementById('email-message')

document.getElementById('input-form').addEventListener("submit", function(e){
    e.preventDefault();
    if (input.value.length ===0 || input.value.includes('#')){
        errorMessage.innerHTML = 'Check your email please'
        input.style.border= '1px solid rgb(255, 66, 66)'
    }
    else{
        errorMessage.innerHTML = ''
        input.style.border= 'none'
    }
})

input.addEventListener("invalid", function(e){
    e.preventDefault();
    errorMessage.innerHTML = input.validationMessage
})
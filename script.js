const name = document.getElementById('email')
const password = document.getElementById('password')
const from = document.getElementById('form')
const errorEllement = document.getElementById('error')

from.addEventListener('submit',(e) =>{
    let message = []
    if (Name.value === '' || Name.value == null){
}

if (password.value.length <= 6){
    messages.push('password must be longer than 6 characters')
}
  
if(password.value.length >= 20){
    messages.push('password must be less than 20 characters')
}

if(password.value === 'password') {
    messages.push('password cannot be password')
}

if(messages.length > 0){
    e.preventDefault()
    errorEllement.innerText = messages.join(', ')
} 

})

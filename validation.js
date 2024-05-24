const form = document.querySelector('#button')

form.addEventListener('click',e=>{
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const address = document.getElementById('address').value
    const password = document.getElementById('password').value
    const check = document.getElementById('checkbox')

    if(name === ''){
        alert("Please input your username")
        return false
    }
    if(email === ''){
        alert("Please input your email")
        return false
    }
    if(address === ''){
        alert("Please input your address")
        return false
    }
    if(password === ''){
        alert("Please input your password")
        return false
    }
    if(!check.checked){
        alert("Checkbox must be checked")
        return false
    }

    if(email.includes("@") === false){
        alert("Wrong input for your email")
        return false
    } else if(email.split("@")[1].includes(".") === false){
        alert("Wrong input for your email")
        return false
    }
    else{
        alert("Success")
    }

})
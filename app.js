const validation = () => {
    let email = document.getElementById('text').value;
    let error = document.getElementById('error');


    if (!/\S+@\S+\.\S+/.test(email) || email === '') {
        error.innerText = "Please check your email"
        error.style.color = 'red'
    } else {
        error.innerText = email + " is valid :)"
        error.style.color = 'green';
    }
}

document.getElementById('submitButton').addEventListener('click', (e) => {
    e.preventDefault()
    validation();
})
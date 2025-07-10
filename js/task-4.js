const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const email = event.target.elements.email.value.trim();
    const password = event.target.elements.password.value.trim()
    if (email === "" || password === "") {
        alert("All form fields must be filled in");
    } else {
        const info = {
            Email: email,
            Password: password
        }

        console.log(info);
        form.reset();
    }

}

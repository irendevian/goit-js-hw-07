const input = document.querySelector('input');

input.addEventListener('input', (event) => {
    // console.log('ok');
    // console.log('Користувач вводить: ', event.target.value);
    let user = document.querySelector('span#name-output');
    if (event.target.value.trim() !== "") {
        user.textContent = event.target.value.trim();
    } else {
        user.textContent = "Anonymous";
    }
});


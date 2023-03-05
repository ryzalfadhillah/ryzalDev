const name = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const form = document.querySelector("form");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert(`Thank you for contact me ${name.value}\nYou send me a message "${message.value}" with subject "${subject.value}" using your email "${email.value}"
    `)

    name.value = "";
    email.value = "";
    subject.value = "";
    message.value = "";
})


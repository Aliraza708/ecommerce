import { auth, signInWithEmailAndPassword } from "../../unitly.js";

const signin = document.getElementById("signin")

signin.addEventListener("submit", function (e) {

    console.log(e)
    e.preventDefault();
    const email = e.target[0].value
    const password = e.target[1].value
    signInWithEmailAndPassword(auth, email, password).then(() => {

        window.location.href = "/"

    }).catch((err) => alert(err))


})

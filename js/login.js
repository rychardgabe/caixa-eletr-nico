import { db } from "./db.js"

function login() {
    const cpf = document.getElementById("cpf").value
    const pass = document.getElementById("pass").value

    const ct = db.find(
        (user) => user.cpf === cpf && user.senha === pass
    )


    if(ct) {
        document.getElementById("msg").textContent = "Login realizado...";
        localStorage.setItem("userCPF", ct.cpf)
    
    setTimeout(() => {
        window.location.href = "easycash.html"; 
    }, 800)
    } else {
        document.getElementById("msg").textContent = "CPF ou senha incorretos!";
    }
}

window.login = login

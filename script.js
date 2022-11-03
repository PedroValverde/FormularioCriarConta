const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;

    if (usernameValue === "") {
        setErrorFor(username, "O nome de usuario é obrigatorio.");
    } else {
        setSucessFor(username);
    }

    if (emailValue === "") {
        setErrorFor(email, "O email é obrigatorio.");
    } else if (!checkEmail(emailValue)) {
        setErrorFor(email, "Insira um email valido")
    } else {
        setSucessFor(email);
    }

    if (passwordValue === "") {
        setErrorFor(password, "A senha é obrigatoria.");
    }else if(passwordValue.length < 7 ){
        setErrorFor(password, "A senha tem que ter no mino 7 caracters.");
    }else {
        setSucessFor(password);
    }

    if (passwordConfirmationValue === "") {
        setErrorFor(passwordConfirmation, "A confirmaçaõ de senha é obrigatoria.");
    }else if(passwordConfirmationValue !== passwordValue ){
        setErrorFor(passwordConfirmation, "As senhas não conferem.");
    }else {
        setSucessFor(passwordConfirmation);
    }

    const formControls = form.querySelectorAll(".form-control");

    const formIsValid = [...formControls].every((formControl)=>{
        return formControl.className === "form-control sucess";
    });

    if(formIsValid){
        console.log("O formulário está 100% valido");
        alert("Os dados foram enviados com sucesso");
    }
}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    //add msg de errdo
    small.innerText = message;
    //add class erro
    formControl.className = "form-control error"
}
function setSucessFor(input){
    const formControl = input.parentElement;

    //add class sucess
    formControl.className = "form-control sucess";
}
function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }


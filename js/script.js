import itsACPF from "./valida-cpf.js";
import isOfLegalAge from "./valida-idade.js";
const formFields = document.querySelectorAll('[required]')
const form = document.querySelector('[data-formulario]');

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const formData = {
        "nome": e.target.elements['nome'].value,
        "email": e.target.elements['email'].value,
        "rg": e.target.elements['rg'].value,
        "cpf": e.target.elements['cpf'].value,
        "aniversario": e.target.elements['aniversario'].value
    }

    localStorage.setItem("register", JSON.stringify(formData))

    window.location.href = './abrir-conta-form-2.html'
})

formFields.forEach((field) => {
    field.addEventListener("blur", () => fieldVerify(field));
    field.addEventListener("invalid", event => event.preventDefault()); // tira os pop ups de erros padrão do form
})

const errorType = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
] 

const messages = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    rg: {
        valueMissing: "O campo de RG não pode estar vazio.",
        patternMismatch: "Por favor, preencha um RG válido.",
        tooShort: "O campo de RG não tem caractéres suficientes."
    },
    cpf: {
        valueMissing: 'O campo de CPF não pode estar vazio.',
        patternMismatch: "Por favor, preencha um CPF válido.",
        customError: "O CPF digitado não existe.",
        tooShort: "O campo de CPF não tem caractéres suficientes."
    },
    aniversario: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        customError: 'Você deve ser maior que 18 anos para se cadastrar.'
    },
    termos: {
        valueMissing: 'Você deve aceitar nossos termos antes de continuar.',
    }
}

function fieldVerify(field) {
    let message = "";
    field.setCustomValidity(''); 
    if(field.name == "cpf" && field.value.length >= 11) {
        itsACPF(field);
    }
    if(field.name == "aniversario" && field.value != "") {
        isOfLegalAge(field);
    }

    errorType.forEach(error => {
        if(field.validity[error]){
            message = messages[field.name][error];
        }
    })
    const errorMessage = field.parentNode.querySelector('.mensagem-erro');
    const validateInput = field.checkValidity();

    if(!validateInput) {
        errorMessage.textContent = message;
    } else {
        errorMessage.textContent = "";
    }
    //console.log(field.validity); verifica erros nos campos do formulário
}
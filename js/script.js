import itsACPF from "./valida-cpf.js";
import isOfLegalAge from "./valida-idade.js";

const formFields = document.querySelectorAll('[required]')

formFields.forEach((field) => {
    field.addEventListener("blur", () => fieldVerify(field));
})

function fieldVerify(field) {
    if(field.name == "cpf" && field.value.length >= 11) {
        itsACPF(field);
    }
    if(field.name == "aniversario" && field.value != "") {
        isOfLegalAge(field);
    }
}
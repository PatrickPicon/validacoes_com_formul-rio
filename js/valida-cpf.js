export default function itsACPF(field) {
    const cpf = field.value.replace(/\.|-/g, "");
    if(validateRepeatedNumbers(cpf) || validateFirstNumber(cpf) || validateSecondNumber(cpf)) {
        field.setCustomValidity('Esse CPF não é válido.')
    }
}

function validateRepeatedNumbers(cpf){
    const repeatedNumber = [
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ]

    return repeatedNumber.includes(cpf)
}

function validateFirstNumber(cpf) {
    let sum = 0;
    let multiplier = 10;

    for(let size = 0; size < 9; size++) {
        sum += cpf[size] * multiplier;
        multiplier--;
    }

    sum = (sum * 10) % 11;

    if(sum == 10 || sum == 11){
        sum = 0;
    }

    return sum != cpf[9];
}

function validateSecondNumber(cpf) {
    let sum = 0;
    let multiplier = 11;

    for(let size = 0; size < 10; size++) {
        sum += cpf[size] * multiplier;
        multiplier--;
    }

    sum = (sum * 10) % 11;

    if(sum == 10 || sum == 11){
        sum = 0;
    }

    return sum != cpf[10];
}
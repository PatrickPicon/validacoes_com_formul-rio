export default function isOfLegalAge(field) {
    const birthDate = new Date(field.value);
    validateAge(birthDate);

    console.log(validateAge(birthDate));
}

function validateAge(date) {
    const currentDate = new Date();
    const datePlus18 = new Date(date.getUTCFullYear() + 18, date.getUTCMonth(), date.getUTCDate());

    return currentDate >= datePlus18;
}
const formFields = document.querySelectorAll('[required]')

formFields.forEach((field) => {
    console.log(field)
    field.addEventListener("blur", () => fieldVerify(field))
})

function fieldVerify(field) {
 
}
const buttonStartCamera = document.querySelector("[data-video-botao]");
const fieldCamera = document.querySelector("[data-camera]");
const video = document.querySelector("[data-video]");
const buttonTakePhoto = document.querySelector("[data-tirar-foto]");
const canvas = document.querySelector("[data-video-canvas]");
const message = document.querySelector("[data-mensagem]");
const buttonSendPhoto = document.querySelector("[data-enviar]");

let imageURL = "";

buttonStartCamera.addEventListener("click", async function () {
    const startVideo = await navigator.mediaDevices.getUserMedia({video: true, audio: false});

    buttonStartCamera.style.display = "none";
    fieldCamera.style.display = "block";

    video.srcObject = startVideo;

})

buttonTakePhoto.addEventListener("click", function() {
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.heigth);

    imageURL = canvas.toDataURL("image/jpeg");

    fieldCamera.style.display = "none";
    message.style.display = "block";
})

buttonSendPhoto.addEventListener("click", () => {
    const receiveExistingData = localStorage.getItem('cadastro');
    const convertReturnedData = JSON.parse(receiveExistingData);

    convertReturnedData.imagem = imageURL;

    localStorage.setItem('cadastro', JSON.stringify(convertReturnedData));

    window.location.href = "./abrir-conta-form-3.html"
})
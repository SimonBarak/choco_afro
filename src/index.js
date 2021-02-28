import html2canvas from "html2canvas";

const canvasEl = document.getElementById("canvas");

const buttonEl = document.getElementById("download-button");

const contenteditableEl = document.getElementById("contenteditable");

const imageEl = document.getElementById("finalImage");
const popUpEl = document.getElementById("pop-up");
const finalImageContentEl = document.getElementById("finalImageContent");

const prepareImage = () => {
  html2canvas(canvasEl).then((canvas) => {
    var dataURL = canvas.toDataURL("image/jpeg");

    buttonEl.href = dataURL;

    finalImageContentEl.src = dataURL;

    popUpEl.classList.add("active");
  });
};

contenteditableEl.addEventListener("input", () => {});

buttonEl.addEventListener("click", () => {
  prepareImage();
});

//prepareImage();

setTimeout(function () {
  contenteditableEl.focus();
}, 500);

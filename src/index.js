import html2canvas from "html2canvas";

const canvasEl = document.getElementById("canvas");

const buttonEl = document.getElementById("download-button");

const contenteditableEl = document.getElementById("contenteditable");

const prepareImage = () => {
  html2canvas(canvasEl).then((canvas) => {
    var dataURL = canvas.toDataURL("image/jpeg");

    buttonEl.href = dataURL;
  });
};

contenteditableEl.addEventListener("input", () => {});

buttonEl.addEventListener("click", () => {
  prepareImage();
});

prepareImage();

console.log(buttonEl);

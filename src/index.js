import html2canvas from "html2canvas";

const canvasEl = document.getElementById("canvas");

const bodyEl = document.getElementById("body");

const buttonEl = document.getElementById("create-image");

const contenteditableEl = document.getElementById("contenteditable");

const imageEl = document.getElementById("finalImage");
const editorEl = document.getElementById("editor");
const finalImageContentEl = document.getElementById("finalImageContent");

const prepareImage = () => {
  window.scroll({
    top: 0,
    left: 0,
  });

  html2canvas(canvasEl).then((canvas) => {
    var dataURL = canvas.toDataURL("image/jpeg");

    // buttonEl.href = dataURL;

    finalImageContentEl.src = dataURL;

    bodyEl.classList.add("image-is-generated");
    console.log(editorEl);

    bodyEl.addEventListener("click", () => {
      bodyEl.classList.remove("image-is-generated");
      bodyEl.removeEventListener("click", () => {});
    });
  });
};

buttonEl.addEventListener("click", () => {
  prepareImage();
});

//prepareImage();

setTimeout(function () {
  console.log("contenteditableEl");
  contenteditableEl.focus();
}, 200);

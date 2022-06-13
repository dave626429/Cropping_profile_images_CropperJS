let imgPreview = document.querySelector(".img-preview");
let fileInput = document.querySelector(".img-input");
const reader = new FileReader();

function onUpload(event) {
  reader.onload = (e) => onProgress(e);
  reader.onprogress = (e) => onProgress(e);
  reader.onloadstart = (e) => onLoadStart(e);
  reader.onloadend = (e) => onLoadEnd(e);
  reader.readAsDataURL(event.target.files[0]);
}

function onProgress(event) {
  //   setInterval(() => {
  //     console.log(`${event.type}: ${event.loaded}`);
  //   }, [1]);
  console.log(`${event.type}: `, event);
}
function onLoad(event) {
  imgPreview.src = event.target.result;
  console.log(`${event.type}: ${event.loaded}`);
}
function onLoadStart(event) {
  console.log(`${event.type}: ${event.loaded}`);
}
function onLoadEnd(event) {
  console.log(`${event.type}: ${event.loaded}`);
}

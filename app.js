"use strict";

const videoEl = document.querySelector(".my-video");

if (navigator.mediaDevices.getUserMedia(0)) {
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then((output) => {
      videoEl.src = output;
      videoEl.play();
    })
    .catch((error) => {
      console.log(error);
    });
} else {
  console.log("user media not supported");
}

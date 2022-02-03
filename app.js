// Selecting required elements
const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");
const preloader = document.querySelector(".preloader");

// toggle the slide button with click event
btn.addEventListener("click", function () {
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    video.pause();
  } else {
    btn.classList.remove("slide");
    video.play();
  }
});

// window load event happen after video loaded
window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});

const slide = document.getElementById("slide");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const carousel = document.getElementById("carousel");

const images = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img5.jpg"
];

let index = 0;
let interval;

function showImage(){
  slide.src = images[index];
}

function next(){
  index = (index + 1) % images.length;
  showImage();
}

function prev(){
  index = (index - 1 + images.length) % images.length;
  showImage();
}

// Auto slide
function startSlide(){
  interval = setInterval(next, 3000);
}

function stopSlide(){
  clearInterval(interval);
}

nextBtn.addEventListener("click", next);
prevBtn.addEventListener("click", prev);

carousel.addEventListener("mouseenter", stopSlide);
carousel.addEventListener("mouseleave", startSlide);

showImage();
startSlide();

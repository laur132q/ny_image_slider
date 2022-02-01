const container = document.querySelector("#container");
const image = [
  "tema4/1.jpg",
  "tema4/2.jpg",
  "tema4/3.jpg",
  "tema4/4.jpg",
  "tema4/5.jpg",
  "tema4/6.jpg",
  "tema4/7.jpg",
];

image.forEach(visHvertElement);

function visHvertElement(element) {
  console.log(element);
}

console.log(container);

// let newImage = document.createElement("img");
// let overskriftNew = document.createTextNode(
//   "Min overskrift til den nye artikel"
// );
// container.appendChild(newImage);
// newArticle.appendChild(overskriftNew);
// let backward = document.querySelector(".backward")

let index = 0;

function forward() {
  console.log("forward");
  index++;
  if (index > image.length - 1) {
    index = 0;
  }
  container.style.backgroundImage = `url(${image[index]}`;
}

function backward() {
  console.log("backward");
  index--;
  if (index < 0) {
    index = image.length - 1;
  }
  container.style.backgroundImage = `url(${image[index]})`;
}

const nextknap = document.querySelector("#next");
nextknap.addEventListener("click", forward);

const preknap = document.querySelector("#pre");
preknap.addEventListener("click", backward);

let red = document.querySelector(".red");
let yellow = document.querySelector(".yellow");
let green = document.querySelector(".green");

red.style.backgroundColor = "red";
yellow.style.backgroundColor = "yellow";
green.style.backgroundColor = "green";

function svetafor() {
  setTimeout(() => {
    red.style.opacity = 1;
    yellow.style.opacity = 0.4;
    green.style.opacity = 0.4;
  }, 6000);
  setTimeout(() => {
    red.style.opacity = 0.4;
    yellow.style.opacity = 1;
    green.style.opacity = 0.4;
  }, 8000);
  setTimeout(() => {
    red.style.opacity = 0.4;
    yellow.style.opacity = 0.4;
    green.style.opacity = 1;
  }, 11000);
  setTimeout(() => {
    red.style.opacity = 0.4;
    yellow.style.opacity = 1;
    green.style.opacity = 0.4;
  }, 14000);
  setTimeout(() => {
    red.style.opacity = 1;
    yellow.style.opacity = 0.4;
    green.style.opacity = 0.4;
  }, 17000);
}

let interval = setInterval(() => {
  svetafor();
}, 17000);

svetafor();


// function test() {
//   let setRed = setTimeout(() => {
//     red.style.backgroundColor = "red";
//     yellow.style.opacity = 0.3;
//     green.style.opacity = 0.3;
//   }, 2000);

//   let setYellow = setTimeout(() => {
//     yellow.style.backgroundColor = "yellow";
//   }, 4000);

//   let setGreen = setTimeout(() => {
//     green.style.backgroundColor = "green";
//   }, 6000);
// }

// let time = setInterval(() => {
//   test();
// }, 7000);

// test();

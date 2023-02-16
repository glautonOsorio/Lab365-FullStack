<<<<<<< HEAD
let count = 60;
let stopWatch;
let countDowm = document.getElementById("count");

function start() {
  setInterval(countdowm, 1000);
}
function countdowm() {
  if (count == 0) {
    countDowm.innerText = "1 minuto se passou";
  } else {
    count--;
    countDowm.innerText = `${count}`;
  }
}

function btnReset() {
  count = 60;
  clearInterval(start());
}
=======
let count = 60;
let stopWatch;
let countDowm = document.getElementById("count");

function start() {
  setInterval(countdowm, 1000);
}
function countdowm() {
  if (count == 0) {
    countDowm.innerText = "1 minuto se passou";
  } else {
    count--;
    countDowm.innerText = `${count}`;
  }
}

function btnReset() {
  count = 60;
  clearInterval(start());
}
>>>>>>> e54b4fdaac36bfaadb2592f959705647fe72ca17

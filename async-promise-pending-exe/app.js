const startBtn = document.getElementById("start");
const spinner = document.getElementById("spinner");
let [first, second] = [false, false];

function toggleSpinner() {
  if (first || second) {
    spinner.style.display = "block";
  } else {
    spinner.style.display = "none";
  }
}

function startBtnClickhandler() {
  const promise = new Promise((resolve, reject) => {
    first = true;
    toggleSpinner();
    setTimeout(resolve, 2000);
  });

  const promise2 = new Promise((resolve, reject) => {
    second = true;
    toggleSpinner();
    setTimeout(resolve, 4000);
  });

  promise.then(() => {
    first = false;
    toggleSpinner();
    console.log("lol");
  });

  promise2.then(() => {
    second = false;
    toggleSpinner();
    console.log("lol2");
  });
}
startBtn.addEventListener("click", startBtnClickhandler);

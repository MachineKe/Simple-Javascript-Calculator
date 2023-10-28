// selectors
let screen = document.querySelector(".screen");
let panel = document.querySelector(".panel");
let equal = document.getElementById("equal");

//event isteners
panel.addEventListener("click", numberToScreen);
equal.addEventListener("click", resolve);

//functions
//if a button is clicked on the calculator
function numberToScreen(num) {
  const button = num.target.innerHTML;
  //if its C, delete last digit
  if (button === "C") {
    let onScreen = screen.innerHTML;
    screen.innerHTML = onScreen.slice(0, -1);
  }
  //else if it is 0 on the screen, replace it with the pushed buttons digit
  else if (screen.innerHTML === "0") {
    screen.innerHTML = button;
  } else {
    //else, add the pushed buttons digit to the end
    screen.innerHTML += button;
  }
}

function resolve() {
  //what is written on the screen
  let onScreen = screen.innerHTML;

  // resolve what is on the screen to the nearest thousandth
  screen.innerHTML = Math.round(eval(onScreen) * 1000) / 1000;
}

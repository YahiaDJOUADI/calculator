let display = document.querySelector(".display");
let buttons = document.querySelectorAll("button");
let specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

buttons.forEach((button) => {
    button.onclick = function(e) {
      calculate(e.target.dataset.value);
    };
  });
let calculate = (btnValue) => {
  display.focus();
  if (btnValue === "=" && output !== "") {
    output = eval(output.replace("%", "/100"));
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DEL") {
    output = output.toString().slice(0, -1);
  } else {
    if (output === "" && specialChars.includes(btnValue)) return;
    output += btnValue;
  }
  display.value = output;
};
alert("just say wow")

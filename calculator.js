let displayValue = "";

function updateDisplay() {
  document.getElementById("display").value = displayValue;
}

function appendToDisplay(val) {
  displayValue += val;
  updateDisplay();
}

function calculate() {
  try {
    displayValue = eval(displayValue).toString();
    updateDisplay();
  } catch (error) {
    displayValue = "Error";
    updateDisplay();
  }
}

function clearDisplay() {
  displayValue = "";
  updateDisplay();
}

function clearSingleDigit() {
  if (displayValue.length > 0) {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
  }
}

updateDisplay();

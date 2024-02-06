function addToResult(value) {
  document.getElementById("screen").value += value;
}

function clearScreen() {
  document.getElementById("screen").value = "";
}

function calculateResult() {
  try {
    document.getElementById("screen").value = eval(
      document.getElementById("screen").value
    );
  } catch (error) {
    document.getElementById("screen").value = "Error";
  }
}

function deleteLastCharacter() {
  var currentResult = document.getElementById("screen").value;
  document.getElementById("screen").value = currentResult.slice(0, -1);
}

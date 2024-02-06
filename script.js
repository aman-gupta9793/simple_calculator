function addToResult(value) {
  document.getElementById("screen").value += value;
}

function clearScreen() {
  document.getElementById("screen").value = "";
}

function calculateResult() {
  try {
    var result = eval(document.getElementById("screen").value);
    if (result === Infinity || result === -Infinity) {
      document.getElementById("screen").value = "math error";
    } else {
      var resultString = result.toString();
      if (resultString.length > 10) {
        document.getElementById("screen").value = "error";
      } else {
        document.getElementById("screen").value = result;
      }
    }
  } catch (error) {
    document.getElementById("screen").value = "error";
  }
}

function deleteLastCharacter() {
  var currentResult = document.getElementById("screen").value;
  document.getElementById("screen").value = currentResult.slice(0, -1);
}

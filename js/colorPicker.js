function calculateRBG() {
  // Get each value from the text boxes
  const rValue = parseFloat(document.getElementById('rValue').value);
  const gValue = parseFloat(document.getElementById('gValue').value);
  const bValue = parseFloat(document.getElementById('bValue').value);

  // Calculate denominator
  var denominator = rValue + gValue + bValue;

  // Calculate each value p, y, and b
  var rhoValue = ((1 / denominator) * rValue);
  var gammaValue = ((1 / denominator) * gValue);
  var betaValue = ((1 / denominator) * bValue);

  // Declare var for lambda
  var lambdaValue = 0;

  // Determine max value
  if (rhoValue >= gammaValue) {
    if(rhoValue >= betaValue) {
      lambdValue = rhoValue;
    } else {
      lambdValue = betaValue;
    }
  } else {
    if (gammaValue >= betaValue) {
      lambdValue = gammaValue;
    } else {
      lambdValue = betaValue;
    }
  }

  // store div for answer
  const answerDiv = document.getElementById("answer");

  // Delete old answer if exits
  if (answerDiv.hasChildNodes()){
    answerDiv.removeChild(answerDiv.firstChild);
  }

  // Create new h3 to show pybl
  const newH3 = document.createElement('h3');

  // form string to show pybl
  var answer = document.createTextNode("ρ: " + String(rhoValue.toFixed(2)) + " ɣ: " + String(gammaValue.toFixed(2)) + " β: " + String(betaValue.toFixed(2)) + " L: " + String(lambdValue.toFixed(2)));

  // attach to h3
  newH3.appendChild(answer);

  // attach h3 with pybl to div
  answerDiv.appendChild(newH3);

  // update colorbox to show correct color
  document.getElementById('colorBox').style.backgroundColor = "rgb(" + (rValue * 255) + ", " + (gValue * 255) + ", " + (bValue * 255) + ")";
}

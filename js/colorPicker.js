function calculateRBG() {
  const rValue = parseFloat(document.getElementById('rValue').value);
  const gValue = parseFloat(document.getElementById('gValue').value);
  const bValue = parseFloat(document.getElementById('bValue').value);

  var denominator = rValue + gValue + bValue;

  var rhoValue = ((1 / denominator) * rValue);
  var gammaValue = ((1 / denominator) * gValue);
  var betaValue = ((1 / denominator) * bValue);

  var lambdValue = 0;

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

  const answerDiv = document.getElementById("answer");

  if (answerDiv.hasChildNodes()){
    answerDiv.removeChild(answerDiv.firstChild);
  }

  const newH3 = document.createElement('h3');
  var answer = document.createTextNode("ρ: " + String(rhoValue.toFixed(2)) + " ɣ: " + String(gammaValue.toFixed(2)) + " β: " + String(betaValue.toFixed(2)) + " L: " + String(lambdValue.toFixed(2)));
  newH3.appendChild(answer);
  answerDiv.appendChild(newH3);
}

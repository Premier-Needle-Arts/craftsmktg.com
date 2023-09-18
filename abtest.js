function validateInputs(visitorsA, visitorsB, conversionsA, conversionsB) {
  if(conversionsA > visitorsA || conversionsB > visitorsB) {
    alert("Invalid inputs");
    return false;
  }
  return true;
}

function calculateZScore(conversionRateA, conversionRateB, stdErrorDiff) {
  return (conversionRateB - conversionRateA) / stdErrorDiff;
}

function calculate() {
  // Input values
  const visitorsA = parseFloat(document.getElementById('visitorsA').value);
  const conversionsA = parseFloat(document.getElementById('conversionsA').value);
  const visitorsB = parseFloat(document.getElementById('visitorsB').value);
  const conversionsB = parseFloat(document.getElementById('conversionsB').value);
  const hypothesis = document.getElementById('hypothesis').value;
  const confidence = parseFloat(document.getElementById('confidence').value);

  console.log("Sample A:", visitorsA);
  console.log("Sample B:", visitorsB);
  console.log("Conversion A", conversionsA);
  console.log("Conversion B", conversionsB);
  console.log("Hypothesis Testing:", hypothesis);
  console.log("Confidence", confidence);

  if (!validateInputs(visitorsA, visitorsB, conversionsA, conversionsB)) {
    return;
  }
  // Calculations
  const conversionRateA = (conversionsA / visitorsA);
  const conversionRateB = (conversionsB / visitorsB);
  const relativeUplift = (conversionRateB - conversionRateA) / conversionRateA;

  const stdErrorA = Math.sqrt((conversionRateA * (1 - conversionRateA)) / visitorsA);
  const stdErrorB = Math.sqrt((conversionRateB * (1 - conversionRateB)) / visitorsB);
  const stdErrorDiff = Math.sqrt(Math.pow(stdErrorA, 2) + Math.pow(stdErrorB, 2));

  const zScore = calculateZScore(conversionRateA, conversionRateB, stdErrorDiff);
  
  console.log("Standard Error A:", stdErrorA);
  console.log("Standard Error B:", stdErrorB);
  console.log("Standard Error Difference:", stdErrorDiff);
  console.log("Z-Score:", zScore);

  const pValue = (hypothesis === "two") 
    ? 2 * (1 - normalCDF(Math.abs(zScore)))
    : 1 - normalCDF(Math.abs(zScore));

  const zAlpha = zScoreForConfidence(confidence);
  console.log(zScoreForConfidence(confidence));

  const observedPower = (hypothesis === "two")
    ? 1 - normalCDF((zAlpha / 2 - Math.abs(zScore)) / stdErrorDiff)
    : 1 - normalCDF((zAlpha - Math.abs(zScore)) / stdErrorDiff);

  const onesided = (zAlpha - Math.abs(zScore)) / stdErrorDiff;
  const twosided = (zAlpha / 2 - Math.abs(zScore)) / stdErrorDiff;

  const onesidedtest = 1 - normalCDF((zAlpha / 2 - Math.abs(zScore)) / stdErrorDiff)
  const twosidedtest = 1 - normalCDF((zAlpha - Math.abs(zScore)) / stdErrorDiff);

  console.log("Intermediate Value One Sided:", onesided);
  console.log("Intermediate Value One Sided:", onesidedtest);
  console.log("Intermediate Value Two Sided:", twosided);
  console.log("Intermediate Value One Sided:", twosidedtest);
  console.log("Observed Power:", observedPower);

  const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
    Conversion Rate A: ${(conversionRateA * 100).toFixed(2)}%
    Conversion Rate B: ${(conversionRateB * 100).toFixed(2)}%
    Relative Uplift In Conversion Rate: ${(relativeUplift * 100).toFixed(2)}%
    Observed Power: ${observedPower.toFixed(4)}
    P Value: ${pValue.toFixed(4)}
    Z-Score: ${zScore.toFixed(4)}
    Standard Error A: ${stdErrorA.toFixed(4)}
    Standard Error B: ${stdErrorB.toFixed(4)}
    Standard Error of Difference: ${stdErrorDiff.toFixed(4)}`;
}

// Function for cumulative distribution function
function normalCDF(x) {
  return 0.5 * (1 + math.erf(x / Math.sqrt(2)));
}

// Function to get Z-Score for a confidence level
function zScoreForConfidence(confidence) {
  if(confidence === 0.90) return 1.645;
  if(confidence === 0.95) return 1.960;
  if(confidence === 0.99) return 2.576;
  return 0;
}

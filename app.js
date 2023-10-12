document.getElementById("calculate").addEventListener("click", function () {
  const loanAmount = parseFloat(document.getElementById("loan-amount").value);
  const interestRate =
    parseFloat(document.getElementById("interest-rate").value) / 100;
  const loanTerm = parseFloat(document.getElementById("loan-term").value);

  const monthlyInterestRate = interestRate / 12;
  const numPayments = loanTerm * 12;

  const monthlyPayment =
    (loanAmount * monthlyInterestRate) /
    (1 - Math.pow(1 + monthlyInterestRate, -numPayments));

  document.getElementById(
    "result"
  ).innerHTML = `Monthly Payment: $${monthlyPayment.toFixed(2)}`;
});

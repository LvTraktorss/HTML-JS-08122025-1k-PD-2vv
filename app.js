// your code goes here
const button= document.getElementById("calc");
const input= document.getElementById("amount");
const from= document.getElementById("currency");
const to= document.getElementById("currency2");
const resultContainer = document.getElementById("result");

 const rates = {
    "EUR": { "EUR": 1, "USD": 1.1140, "GBP": 0.8456 },
    "USD": { "EUR": 0.82, "USD": 1, "GBP": 0.70 },
   "GBP": { "EUR": 1.08, "USD": 1.21, "GBP": 1 }
 };

//let rates = { "EUR": 1, "USD": 1.1140, "GBP": 0.8456 };

button.addEventListener("click", function (e) {
    let amount = Number(input.value);
    let fromCurrency= from.value;
    let toCurrency=to.value;

    let converted = amount * rates[fromCurrency][toCurrency];

    resultContainer.innerHTML =
        amount +""+ fromCurrency+"="+converted.toFixed(2)+ ""+ toCurrency;
});









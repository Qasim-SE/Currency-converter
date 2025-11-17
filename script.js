async function convert(){
let amount = document.getElementById("amount").value;
let from = document.getElementById("from").value;
let to = document.getElementById("to").value;
const api = `https://api.exchangerate-api.com/v4/latest/${from}`;
const res = await fetch(api);
const data = await res.json();
let rate = data.rates[to];
let result = amount * rate;
document.getElementById("output").innerHTML = `${amount} ${from} = ${result.toFixed(2)} ${to}`;
}
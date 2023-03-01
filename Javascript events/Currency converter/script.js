const currencyEl_one = document.getElementById('curreny-one');
const currencyEl_two = document.getElementById('curreny-two');
const amountEl_one = document.getElementById('amount-one');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swapEl = document.getElementById('swap');
//fetch the  currency rate and update the dom
function calculate() {
    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;
    fetch(`https://v6.exchangerate-api.com/v6/2bcc5e801b660957a0317eb2/latest/${fromCurrency}`)

         .then((res)=> res.json())
                .then((data)=>{
                  const rate = data.conversion_rates[currency_two];
               rateE1.innerText = `1 ${currency_one} = ${rate} ${currency_two}`
               amountEl_two.vale = (amountEl_one.value * rate).toFixed(2);

                })
               
      


}
currencyEl_one.addEventListener('change',calculate);
currencyEl_two.addEventListener('change',calculate);
amountEl_one.addEventListener('input',calculate);
amountEl_two.addEventListener('input',calculate);
calculate();

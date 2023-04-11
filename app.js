const currencyFirstEl = document.querySelector('#currency-first');

const currencySecondEl = document.querySelector('#currency-second');

const worthFirstEl = document.querySelector('#worth-first');

const worthSecondEl = document.querySelector('#worth-second');

const rateEl = document.querySelector('#exchange-rate');

update()
function update(){

    fetch(`https://v6.exchangerate-api.com/v6/22682deceb5b4ecdcb9919f9/latest/${currencyFirstEl.value}`)
    .then((res) => res.json())
    .then((data) =>{
    
    const rates = data.conversion_rates[currencySecondEl.value];
    console.log(rates)
    

    rateEl.innerText = `1 ${currencyFirstEl.value} =  ${rates.toFixed(2) +' ' + currencySecondEl.value} `;
    
   worthSecondEl.value  = (worthFirstEl.value * rates).toFixed(2);


});
}

currencyFirstEl.addEventListener('change',update);
currencySecondEl.addEventListener('change',update);
worthFirstEl.addEventListener('change',update);
//worthSecondEl.addEventListener('change',update);
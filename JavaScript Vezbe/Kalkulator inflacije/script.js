function inflationCalculator( ) {
    let inflationRate = document.querySelector('#inflationRate');
    let novac = document.querySelector('#novac');

    inflationRate = parseFloat(inflationRate.value);
    novac = parseFloat(novac.value);

    let godine = document.querySelector('#godine').value;
    godine = parseFloat(godine);



    let vrjednost = novac + (novac * (inflationRate / 100));





    for (let i = 1; i < godine; i++) {
        vrjednost += vrjednost * (inflationRate / 100)
    }

    vrjednost = vrjednost.toFixed(2);

   let newElement = document.createElement('div');
   newElement.className - 'new-value';
   newElement.innerText = `Danasnjih ${novac}€ vrjedi isto kao ${vrjednost}€ za ${godine} godina.`;


    document.querySelector('.container').appendChild(newElement);
}
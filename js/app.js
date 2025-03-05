console.log('ciao vincenzo')



const formElement = document.getElementById('my-form')
const ageElement = document.getElementById('age')
const kmElement = document.getElementById('km')
console.log(ageElement)
console.log(kmElement)


formElement.addEventListener('submit', function (event) {
    event.preventDefault()

    let age = parseInt(ageElement.value);
    let numberKilo = parseInt(kmElement.value);

    let price = numberKilo * 0.21;
    
    if (age < 18) {
        priceUnder = ((price * 20) / 100);
    } else if (age > 65) {
        priceUnder = ((price * 40) / 100);
    } else {
        priceUnder = 0;
    }

    price = price - priceUnder
    price = price.toFixed(2)
    
    console.log(`il prezzo del tuo biglietto è ${price} €`)
})



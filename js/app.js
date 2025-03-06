// Dichiarazioni variabili 

const formElement = document.getElementById('my-form')
const ageElement = document.getElementById('age')
const kmElement = document.getElementById('km')
const nameElement = document.getElementById('name')
const ticketElement = document.getElementById('ticket')


// inserimento dei dati e calcolo prezzo 

formElement.addEventListener('submit', function (event) {
    event.preventDefault()

    //  dati utente appresi
    let age = ageElement.value;
    let numberKilo = parseInt(kmElement.value);
    // calcolo del prezzo
    let price = numberKilo * 0.21;
    // applicazione scnto
    if (age === 'Minorenne') {
        priceUnder = ((price * 20) / 100);
    } else if (age === 'Over 65') {
        priceUnder = ((price * 40) / 100);
    } else {
        priceUnder = 0;
    }
    // formattazione prezzo leggibile
    price = price - priceUnder
    price = price.toFixed(2)

    console.log(`il prezzo  biglietto è ${price} €`)

    // stampa nome su biglietto
    const nameTicketElement = document.querySelector('.name-ticket')
    nameTicketElement.innerHTML += `<p class="text-dark">${nameElement.value}</p>`

    // stampa carrozza su biglietto
    const carriageElement = document.querySelector('.carriage')
    let carriage = number()
    carriageElement.innerHTML += `<p>${carriage}</p>`

    // stampa codice treno su biglietto
    const codeElement = document.querySelector('.code')
    let code = numberCode()
    codeElement.innerHTML += `<p>${code}</p>`

    // stampa prezzo sul su biglietto
    const priceElement = document.querySelector('.price')
    priceElement.innerHTML += `<p class="text-dark">${price} €</p>`

    // stampa offerta sul biglietto
    let offerPrint =''
    if (age === 'Minorenne') {
        offerPrint = 'Biglietto under 18'
    } else if (age === 'Over 65') {
        offerPrint = 'Biglietto over 65'
    } else {
        offerPrint = 'Biglietto standard'
    }
    const offerElement = document.querySelector('.offer')
    offerElement.innerHTML += `<p class="text-dark">${offerPrint}</p>`

    const titleElement = document.querySelector('h2')
    titleElement.classList.remove('hidden')
    ticketElement.classList.remove('hidden')

})

// funzioni
function number() {
    return Math.floor(Math.random() * 20) + 1;
}
function numberCode() {
    return Math.floor(Math.random() * 10000) + 1;
}


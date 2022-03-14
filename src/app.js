import axios from "axios";

const messageText = document.getElementById("message");
messageText.textContent = "";

async function fetchCountryInfo(nameCountry) {


    try {
        const response = await axios.get(`https://restcountries.com/v2/name/${nameCountry}`);
        messageText.textContent = "";
        const country = response.data[0];

        createListItem(country);

    } catch (e) {
        // fill message text
        messageText.textContent = "For this input no country found.";

        console.error(e);
        console.log(e);
    }
}

//Referentie userinput
const userInput = document.getElementById("find-country");
// afhandeling user input
userInput.addEventListener('keyup', handleUserInput);


// userinput afhandeling;
function handleUserInput(e) {
    return e.target.value;
}


// Referentie button
const formElement = document.getElementById("fetch-data");


// zoekafhandeling met argument de user input bij id "find-country"
formElement.addEventListener('submit', ((e) => {
        // default gedrag is refreshen en dit willen we nu niet
        e.preventDefault();
        console.log('log', userInput.value);
        fetchCountryInfo(userInput.value);
        // nu de input refreshen
        userInput.value = "";
    })
);


function createListItem(country) {
    // Sla de referentie naar het omwikkelende element op
    const countryItem = document.getElementById('country-item');
    // Zorg ervoor dat na elke zoekopdracht en dat er altijd maar één zoekresultaat op de pagina staat;
    countryItem.replaceChildren();
    countryItem.setAttribute('class', 'country-item2');

    // Creëer het titel-element
    const countryTitle = document.createElement('h3');

    // Creëeer IMG element
    const countryImg = document.createElement('img');
    countryImg.setAttribute('src', `${country.flags.png}`);
    //  vul het titel-element
    countryTitle.textContent = country.name;
    const countryRegion = country.region;
    countryTitle.setAttribute('class', 'font-h3');
    //
    // Creëer en vul het paragraaf-element
    const countryPopText = document.createElement('p');

    countryPopText.textContent = `${country.name} is situated in ${country.region}. It has a population of ${country.population} people.`;
    // Creëer en vul het paragraaf-element
    const countryCapText = document.createElement('p');

    countryCapText.textContent = `The capital is ${country.capital} and you can pay with ${country.currencies[0].name}'s`;
    if (country.currencies.length > 1) {
        countryCapText.textContent += ` and ${country.currencies[1].name}'s`
    }
    countryCapText.textContent += `.`;
    // Creeer en vul paragraaf-element
    const countryLangText = document.createElement('p');
    countryLangText.textContent = `They speak ${country.languages[0].name}`;

    for (let i = 1; i < (country.languages.length - 1); i++) {
        console.log(country.languages[1].name);
        countryLangText.textContent += `, ${country.languages[i].name}`
    }
    let i = country.languages.length;
    if ( i > 1 ) {
        console.log('i', i);

        countryLangText.textContent += ` and ${country.languages[i-1].name}`;
    }
    countryLangText.textContent += `.`;
    //
    // Voeg deze elementen toe aan dit element

    countryItem.appendChild(countryImg);
    countryItem.appendChild(countryTitle);
    countryItem.appendChild(countryPopText);
    countryItem.appendChild(countryCapText);
    countryItem.appendChild(countryLangText);


}


console.log('Test');


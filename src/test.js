const datavoorbeeld = `[{
    "name": "Peru",
    "topLevelDomain": [".pe"],
    "alpha2Code": "PE",
    "alpha3Code": "PER",
    "callingCodes": ["51"],
    "capital": "Lima",
    "altSpellings": ["PE", "Republic of Peru", " República del Perú"],
    "subregion": "South America",
    "region": "Americas",
    "population": 32971846,
    "latlng": [-10.0, -76.0],
    "demonym": "Peruvian",
    "area": 1285216.0,
    "gini": 41.5,
    "timezones": ["UTC-05:00"],
    "borders": ["BOL", "BRA", "CHL", "COL", "ECU"],
    "nativeName": "Perú",
    "numericCode": "604",
    "flags": {"svg": "https://flagcdn.com/pe.svg", "png": "https://flagcdn.com/w320/pe.png"},
    "currencies": [{"code": "PEN", "name": "Peruvian sol", "symbol": "S/."}],
    "languages": [{"iso639_1": "es", "iso639_2": "spa", "name": "Spanish", "nativeName": "Español"}],
    "translations": {
        "br": "Peru",
        "pt": "Peru",
        "nl": "Peru",
        "hr": "Peru",
        "fa": "پرو",
        "de": "Peru",
        "es": "Perú",
        "fr": "Pérou",
        "ja": "ペルー",
        "it": "Perù",
        "hu": "Peru"
    },
    "flag": "https://flagcdn.com/pe.svg",
    "regionalBlocs": [{
        "acronym": "PA",
        "name": "Pacific Alliance",
        "otherNames": ["Alianza del Pacífico"]
    }, {
        "acronym": "USAN",
        "name": "Union of South American Nations",
        "otherAcronyms": ["UNASUR", "UNASUL", "UZAN"],
        "otherNames": ["Unión de Naciones Suramericanas", "União de Nações Sul-Americanas", "Unie van Zuid-Amerikaanse Naties", "South American Union"]
    }],
    "cioc": "PER",
    "independent": true
}]`;

const data = JSON.parse(datavoorbeeld);
console.log(data[0].population);


// Koppelen styles.css in de head section <link rel="stylesheet" href="./styles.css"/>
//
// Koppelen app.js boven het sluiten van de body tag <script src="./main.js" type="module"></script>
// Test of alle koppelingen (js en css) en packages (parcel) werken! npm run start
//
// Stappenplan data fetchen:
// Axios installeren npm i axios
// Axios importeren in JS bestand import axios from "axios";
// Asynchrone functie schrijven async function fetchCountryInfo() { }
// Functie aanroepen fetchCountryInfo()
// Functie testen
// Try & catch block plaatsen in de functie declaratie try {} catch ( e ) { console.error( e ); }
// In het try block een request (get/post/put/del) maken naar een endpoint en wachten op antwoord. Deze slaan we op in een variabele. const response = await axios.get('https://api.uri-here.org/endpoint')
// Test response
// Sla het object met de data op in een variabele const nameOfData = response.data
// Nu kun je elke object binnen je endpoint aanroepen door de naam van de variabele te gebruiken.
// Let op! Een endpoint kan een array of object zijn en/of bevatten.
// Je zult dus middels de juiste syntax moeten aanroepen op onze variabele nameOfDataObject (bijv. nameOfData.obj[0].info)
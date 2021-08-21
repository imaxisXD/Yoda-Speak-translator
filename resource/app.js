let inputText = document.querySelector('#txt-holder');
let translateButton = document.querySelector('#btn-input');
let outputDiv = document.querySelector('#output');
let serverURL = 'https://api.funtranslations.com/translate/yoda.json?text=';

function createTranslateURL(input) {
    return serverURL + input;
}

function errorHandler() {
    console.log("Error Occured on server side ");
    alert("Too Many Requests: Rate limit of 5 requests per hour exceeded.");
}

function clickHandler() {
    let input = inputText.value;
    fetch(createTranslateURL(input))
    .then(resposne => resposne.json())
    .then(json => {
            let translatedText = json.contents.translated;
            outputDiv.textContent = translatedText;
    })
    .catch(errorHandler);
}

translateButton.addEventListener('click',clickHandler);

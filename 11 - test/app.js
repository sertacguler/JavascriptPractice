function getTextFile() { // Text file
    fetch("example.txt")
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(err => console.log(err));
}

function getJsonFile() { // Json file
    fetch("example.json")
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
}

function getExternalAPI() { // External API
    fetch("https://api.exchangeratesapi.io/latest")
        .then(response => response.json())
        .then(data => console.log(data.rates.TRY))
        .catch(err => console.log(err));
}


//getTextFile();

//getJsonFile();

getExternalAPI();
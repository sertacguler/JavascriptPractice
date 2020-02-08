function getData(data) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {

            typeof data === "string" ? resolve(data) : reject(new Error("plz string"))

        }, 5000);
    })
}

getData("Hello")
    .then(response => console.log(response))
    .catch(err => console.log(err));
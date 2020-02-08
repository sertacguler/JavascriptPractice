/*
async function test(data) { // async function must return promise
    //    return data; }

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("This is a value.");
        }, 5000);
    });

    let response = await promise; // await is only valid in async function

    console.log(response); // return response;
    console.log("Hello");

}

test("Hello").then(response => console.log(response));
*/

async function getCurrency(url) {

    const response = await fetch(url); // Response obj
    //console.log(response);
    const data = await response.json(); // Jspn obg

    return data;
}

getCurrency("https://api.exchangeratesapi.io/latest")
    .then(response => console.log(response));
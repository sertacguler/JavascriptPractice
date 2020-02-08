class Request {
    async get(url) {
        /*return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        });*/
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    async post(url, data) {
        /* return new Promise((resolve, reject) => {
             fetch(url, {
                 method: 'POST', body: JSON.stringify(data),
                 headers: {
                     "Content-type": "application/json; charset=UTF-8"
                 }
             })
                 .then(response => response.json())
                 .then(data => resolve(data))
                 .catch(err => reject(err));
         });*/

        const response = await fetch(url, {
            method: 'POST', body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        const resData = await response.json();
        return resData;
    }

    async put(url, data) {
        /*return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'PUT', body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        });*/
        const response = await fetch(url, {
            method: 'PUT', body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        const resData = await response.json();
        return resData;
    }

    async delete(url) {
        /*return new Promise((resolve, reject) => {
            fetch('https://jsonplaceholder.typicode.com/albums/1', {
                method: 'DELETE'
            }).then(response => resolve("delete success"))
                .catch(err => reject(err));
        });*/
        const response = await fetch('https://jsonplaceholder.typicode.com/albums/1', {
            method: 'DELETE'
        });
        return "Delete Success";
    }
}

const request = new Request();

let albums;
request.get("https://jsonplaceholder.typicode.com/albums")
    .then(albums => { console.log(albums) })
    .catch(err => console.log(err));

request.post("https://jsonplaceholder.typicode.com/albums", { userId: 1, title: "Thriller" })
    .then(newAlbums => { console.log(newAlbums) })
    .catch(err => console.log(err));

request.put("https://jsonplaceholder.typicode.com/albums/10", { userId: 10, title: "Tarkan" })
    .then(album => { console.log(album) })
    .catch(err => console.log(err));

request.delete("https://jsonplaceholder.typicode.com/albums/1")
    .then(message => { console.log(message) })
    .catch(err => console.log(err));


// await in bir prromisin resolve etmesini beklediğini bilmeliniz yeterli ve resolve edene kadar orda bekler
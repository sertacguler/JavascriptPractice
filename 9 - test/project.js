const form = document.getElementById("film-form");

const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardbody = document.querySelector(".card-body");

eventlistener();
function eventlistener() {
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded", function () {
        let films = Storage.getFilmsFromStorage();
        UI.loadAllFilms(films);
    });
    cardbody.addEventListener("click", deleteFilm);
}

function addFilm(e) {
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if (title === "" || director === "" || url === "") {
        // error
        UI.displayMessages("Tüm Alanları Doldurun...", "danger");
    } else {
        // New Film
        const newFilm = new Film(title, director, url);
        UI.addFilmToUI(newFilm); // Add to Front
        Storage.addFilmToStorage(newFilm); // Add to Storage
        UI.displayMessages("Film Başarıyla eklendi...", "success");
    }

    UI.clearInputs(titleElement, directorElement, urlElement);

    e.preventDefault();
}

function deleteFilm(e) {
    if (e.target.id === "delete-film") {
        UI.deleteFilmFromUI(e.target);
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        UI.displayMessages("Silme işlemi başarılı...", "success");
    }
}
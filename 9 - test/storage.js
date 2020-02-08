class Storage {

    static addFilmToStorage(newFilm) {
        let films = this.getFilmsFromStorage();

        films.push(newFilm);
        localStorage.setItem("films", JSON.stringify(films));
    }

    static getFilmsFromStorage() {
        let films;
        localStorage.getItem("films") === null ? films = [] : films = JSON.parse(localStorage.getItem("films"));
        return films;
    }

    static deleteFilmFromStorage(filmTitle) {
        let films = this.getFilmsFromStorage();
        films.forEach((film, index) => {
            if (film.title === filmTitle) {
                films.splice(index, 1);
            }
        });
        localStorage.setItem("films", JSON.stringify(films));
    }

}

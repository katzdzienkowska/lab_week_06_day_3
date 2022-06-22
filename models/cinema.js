const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmTitles = function(){
  const filmTitles = [];
  this.films.forEach((film) => {
    filmTitles.push(film.title)
  });
  return filmTitles;
}

Cinema.prototype.filmByTitle = function (title) {
  const foundFilm = this.films.filter((film) => {
    return film.title === title;
  });
  return foundFilm;
};

Cinema.prototype.filmByGenre = function (genre) {
  const filmsInGenre = []
  const foundGenre = this.films.filter((film) => {
    if (film.genre === genre){
      filmsInGenre.push(film)
    }
  });
  return filmsInGenre;
};

Cinema.prototype.filmByYear = function (year) {
  const filmsInYear = []
  const foundYear = this.films.filter((film) => {
    if (film.year === year){
      filmsInYear.push(film)
    }
  });
  return filmsInYear;
};

Cinema.prototype.filmsOverLength = function (length) {
  const result = this.films.every((film) => {
    return film.length > length;
  })
  return result;
};


Cinema.prototype.totalFilmsLength = function () {
  const result = this.films.reduce((runningTotal, film) => {
    return runningTotal + film.length;
  }, 0);
  return result;
};


Cinema.prototype.filmByProperty = function (property, value) {
  const result = this.films.filter((film) => {
    return film[property] === value;
  })
  return result;
};


module.exports = Cinema;

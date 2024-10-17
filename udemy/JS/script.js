
let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };

let movieTitleOne = prompt('Один из последних просмотренных фильмов?', ''),
    movieRankOne = prompt('На сколько вы его оцените?', ''),
    movieTitleTwo = prompt('Один из последних просмотренных фильмов?', ''),
    movieRankTwo = prompt('На сколько вы его оцените?', '');



personalMovieDB.movies[movieTitleOne] = movieRankOne;
personalMovieDB.movies[movieTitleTwo] = movieRankTwo;


console.log(personalMovieDB);
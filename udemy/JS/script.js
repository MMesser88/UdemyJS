// let number = 5;
// const leftBorderWidth = 1;

// number = 10;
// console.log(number);

// const result = alert('Hello, World!');
// console.log(HI);


// const result = confirm('Ты здесь?');
// console.log(result);

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
console.log("Я уже посмотрел ",numberOfFilms," фильмов");

let movies = {};
let movieRank,
    movieTitleOne,
    movieTitleTwo;

let personalMovieDB = {
    count: numberOfFilms,
    movies: {
        // movieTitleOne: movieRank,
        // movieTitleTwo: movieRank,
    },
    actors: {},
    genres: [],
    privat: false
}

movieTitleOne = prompt('Один из последних просмотренных фильмов?', '');
movieRank = prompt('На сколько вы его оцените?', '');
movies[movieTitleOne] = movieRank;

movieTitleTwo = prompt('Один из последних просмотренных фильмов?', '');
movieRank = prompt('На сколько вы его оцените?', '');
movies[movieTitleTwo] = movieRank;

console.log(movies);



// console.log(answers);
// document.write(answers);

// const category = 'toys';
// console.log(`https://someurl.com/${category}/5`)
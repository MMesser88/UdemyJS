'use strict';

let personalMovieDB = {
        count: 0,
        movies: {},
        actors: {},
        genres: [],
        privat: false,

        start: function() {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
            while(personalMovieDB.count == `` || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
                personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '')
            }
        },

        rememberMyFilms: function() {
            for (let i=1; i<=2; i++) {
                let movieTitle = prompt('Один из последних просмотренных фильмов?', '');
                let movieRank = prompt('На сколько вы его оцените?', '');
            
                if (movieTitle != null && movieRank != null && movieTitle != `` && movieRank != `` && movieTitle.length < 50) {
                    personalMovieDB.movies[movieTitle] = movieRank;
                    console.log("Ваш ответ учтён. Спасибо!");
                } else {
                    console.log("Некорректные данные. Попробуйте снова.");
                    i--;
                }
            };
        },

        detectPersonalLevel: function () {
            if (personalMovieDB.count < 10) {
                console.log("Просмотрено довольно мало фильмов")
            } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
                console.log("Вы классический зритель")
            } else if (personalMovieDB.count >= 30) {
                console.log("Вы киноман")
            } else {
                console.log("Произошла ошибка")
            };
        },

        showMyDB: function() {
            if (!personalMovieDB.privat) console.log(personalMovieDB);
        },

        writeYourGenres: function () {
            for (let i = 0; i <3; i++) {
                personalMovieDB.genres[i] = prompt(`"Ваш любимый жанр под номером ${i+1}"`, ``);
                if (personalMovieDB.genres[i] != null && personalMovieDB.genres[i] != ``) {
                    console.log(`Ваш ответ учтён!`)}
                else {console.log(`Некорректные данные. Попробуйте снова`);
                    i--;
                }
            }
            personalMovieDB.genres.forEach(function(genre, index) {
                console.log(`Любимый жанр #${(index + 1)} - это ${genre}`)
            })
        },

        toggleVisibleMyDB: function() {
            if (personalMovieDB.privat == true) {personalMovieDB.privat = false} else {personalMovieDB.privat = true}
        },
    };



















// // function rememberMyFilms() {
// //     for (let i=1; i<=2; i++) {
// //         let movieTitle = prompt('Один из последних просмотренных фильмов?', '');
// //         let movieRank = prompt('На сколько вы его оцените?', '');
    
// //         if (movieTitle != null && movieRank != null && movieTitle != `` && movieRank != `` && movieTitle.length < 50) {
// //             personalMovieDB.movies[movieTitle] = movieRank;
// //             console.log("Ваш ответ учтён. Спасибо!");
// //         } else {
// //             console.log("Некорректные данные. Попробуйте снова.");
// //             i--;
// //         }    
// //     };
// // }

// rememberMyFilms();
  
// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log("Просмотрено довольно мало фильмов")
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log("Вы классический зритель")
//     } else if (personalMovieDB.count >= 30) {
//         console.log("Вы киноман")
//     } else {
//         console.log("Произошла ошибка")
//     };
// }

// detectPersonalLevel();



// function showMyDB() {
//     if (personalMovieDB.privat === false) console.log(personalMovieDB);
// }

// showMyDB();

// function writeYourGenres() {
    
//     for (let i = 0; i <3; i++) {
//         personalMovieDB.genres[i] = prompt(`"Ваш любимый жанр под номером ${i+1}"`, ``)
//     }
// };

// writeYourGenres();
// console.log(genres)
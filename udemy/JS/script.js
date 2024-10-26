let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };

let movieTitle,
    movieRank;
let asks = 0;


for (let i=1; i<=2; i++) {
    movieTitle = prompt('Один из последних просмотренных фильмов?', '');
    movieRank = prompt('На сколько вы его оцените?', '');

    if (!movieTitle || !movieRank || movieTitle.length > 50) {
            // Если данные некорректны, продолжаем цикл
            console.log("Некорректные данные. Попробуйте снова.");
            i--;
            continue}
            
    personalMovieDB.movies[movieTitle] = movieRank;
    console.log("Ваш ответ учтён. Спасибо!");
};



    // while (true) {
    //     movieTitle = prompt('Один из последних просмотренных фильмов?', '');
    //     console.log(movieTitle);
        
    //     movieRank = prompt('На сколько вы его оцените?', '');
    //     console.log(movieRank);
        
    //     // Проверка на пустоту или длинное название
    //     if (!movieTitle || !movieRank || movieTitle.length > 50) {
    //         // Если данные некорректны, продолжаем цикл
    //         console.log("Некорректные данные. Попробуйте снова.");
    //         continue;
    //     }
        
    //     // Добавляем фильм в базу данных
    //     personalMovieDB.movies[movieTitle] = movieRank;
    //     asks +=1;

    //     if (asks === 2) {
    //     break; }// Выход из цикла после успешного ввода
    // }
    

  
if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов")
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель")
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман")
} else {
    console.log("Произошла ошибка")
};
      
console.log(personalMovieDB);


// let result = ``;
// const length = 9;

// for (let i = 1; i < length; i++) {

//     for (let j = 1; j < i; j++){

//         result +=`*`;
//     };

//     result += `\n`
// };

// console.log(result);
"use strict";

const counstFilms = +prompt('How many films do you watch?', '');

const personalMovieDB = {
    count: counstFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}

for(let i = 0; i < 2; i++) {
    const a = prompt('How last films do you watch?', '');
    const b = prompt('How do you rate this film?', '');

    if(a != null && a != '' && a.length < 50 && b != null && b != ''){
        personalMovieDB.movies[a] = b;
        console.log('Data confirm');
    } else {
        console.log('Error');
        i--;
    }
}

console.log(personalMovieDB);

if (personalMovieDB.count < 10) {
    alert('Просмотрено слишком мало фильмов!');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
    alert('Вы киноман');
} else {
    alert('Произошла ошибка!');
}




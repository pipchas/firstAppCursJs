'use strict';

let counstFilms;

// startInterview();

function startInterview() {
    counstFilms = +prompt('How many films do you watch?', '');

    while (counstFilms == '' || counstFilms === null || isNaN(counstFilms)) {
        counstFilms = +prompt('How many films do you watch?', '');
    }
}

const personalMovieDB = {
    count: counstFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}

function reemberMyFilms() {
    for(let i = 0; i < 2; i++) {
        const a = prompt('How last films do you watch?', '').trim();
        const b = prompt('How do you rate this film?', '').trim();
    
        if(a != null && a != '' && a.length < 50 && b != null && b != ''){
            personalMovieDB.movies[a] = b;
            console.log('Data confirm');
        } else {
            console.log('Error');
            i--;
        }
    }
}

// reemberMyFilms()

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено слишком мало фильмов!');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
        alert('Вы классический зритель!');
    } else if (personalMovieDB.count >= 30) {
        alert('Вы настощий киноман!');
    } else {
        alert('Произошла ошибка!');
    }
}

// detectPersonalLevel();

function writeYourGenres() {
    let favoriteGenres;
    for(let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = favoriteGenres = prompt(`What is your favorite genres ${i}?`, '');
        if (favoriteGenres === null || favoriteGenres === '' || !isNaN(favoriteGenres)) {
            personalMovieDB.genres[i - 1] = favoriteGenres = prompt(`What is your favorite genres ${i}?`, '');
        }
    }
}

writeYourGenres();

console.log(personalMovieDB);




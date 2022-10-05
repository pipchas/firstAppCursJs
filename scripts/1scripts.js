let counstFilms = prompt('How many films do you watch?', '');

const personalMovieDB = {
    count: counstFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}

const a = prompt('How last films do you watch?', '');
        b = prompt('How do you rate this film?', ''),
        c = prompt('How last films do you watch?', ''),
        d = prompt('How do you rate this film?', '');

personalMovieDB[a] = b;
personalMovieDB[c] = d;


console.log(personalMovieDB);


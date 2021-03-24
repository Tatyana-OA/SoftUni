function solve(arr){
let movies = [];
for (const line of arr){
    if (line.includes('addMovie')){
    let currentMovie = {}; // обект за всеки филм
    let name = line.substring(9); // взима стринг до 9-тия знак, т.е. "изрязва" Addmovie и space и взима натам
    currentMovie.name = name;
    movies.push(currentMovie)
} else if (line.includes('directedBy')){
let commands = line.split (' directedBy ');
let [movie,movieDirector]=commands
let myMovie = movies.find(x => x.name == movie); // от останалите команди намира имената, които са равни на тези, вече записани в обекти
if (myMovie) {
    myMovie.director = movieDirector; // при такива - добавя името на director
}
}
else {
    let [movie, movieDate]=line.split(' onDate ');
    let myMovie = movies.find (x => x.name ==movie); // аналогично за имена с дати
    if (myMovie){
        myMovie.date = movieDate; //добавя датата
    }
}
}

movies.forEach(movie => { // минава през обекта и запазва всички, които имат и име, и режисьор, и дата
    if(movie.name && movie.director && movie.date) {
        console.log(JSON.stringify(movie))
    }
})

}

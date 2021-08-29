async function returnMovies() {
    const searchResults = document.querySelector(".search-results");
    searchResults.innerHTML =""
    const input = document.querySelector(".inputfield");
    const movies = await fetch("https://www.omdbapi.com/?apikey=6593b869&s=" + input.value);
    const jsonMovies = await movies.json();
    console.log(jsonMovies)
    for (const movie of jsonMovies.Search) {
        const moviePosterTitleandImg = document.createElement("div");
        moviePosterTitleandImg.innerHTML = "";
        const moviePostersBox = document.createElement("img");
        moviePostersBox.innerHTML = "";
        const movieLink = document.createElement("a")
        movieLink.innerHTML =""
        moviePostersBox.src = movie.Poster;
        const movieTitlesBox = document.createElement("h3");
        movieTitlesBox.innerhtml = ""
        movieTitlesBox.innerHTML = movie.Title;
        movieLink.href = ("https://www.imdb.com/title/" + movie.imdbID);
        movieLink.target = "_blank"
        movieLink.appendChild(moviePostersBox)
        moviePosterTitleandImg.append(movieLink, movieTitlesBox);
        searchResults.append(moviePosterTitleandImg)         
    }   
}
searchButton = document.querySelector(".button");
searchButton.addEventListener("click", () => returnMovies())

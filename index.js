let searchBarForm = document.getElementById("search-bar-form")
let searchInput = document.getElementById("search-input")
let searchResults = []
let searchContainer = document.getElementById("search-result-content")
let myWatchlist = JSON.parse(localStorage.getItem("localStorageList"))

if(!myWatchlist){
myWatchlist = []
}

// const searchBtn = document.getElementById("search-btn")

searchBarForm.addEventListener("submit", function(e){
    e.preventDefault()
    fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=ad56d582&s=${searchInput.value}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        searchResults = data.Search
        renderSearch ();
    })

})

function renderSearch () {
    let html = ""

    searchResults.forEach((movie, i) =>{

        html+= `<div class="movie-container">
                    <img src="${movie.Poster}">
                    <div class="movie-info">
                        <p id="${movie.Title}">Title: ${movie.Title}</p>
                        <p>Year Released: ${movie.Year}</p>
                        <p>Type: ${movie.Type}</p>
                        <a href="https://www.imdb.com/title/${movie.imdbID}" target="_blank">IMDB</a>
                        <button id="${i}" onclick="addToWatchList(${i})">Add to watchlist</button>
                    </div>
                </div>`
    })
    searchContainer.innerHTML = html;
}

function addToWatchList (i){
    myWatchlist.push(searchResults[i])
    document.getElementById(i).disabled = true;
    console.log(searchResults[i])
    localStorage.setItem("localStorageList", JSON.stringify(myWatchlist));
}

if (!searchResults.length) {
    searchContainer.innerHTML = `<h3>Try searching for your next Show!</h3>`
}

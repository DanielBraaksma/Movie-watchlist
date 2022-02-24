let searchBar = document.getElementById("site-search")
let searchResults = []
let searchContainer = document.getElementById("search-result-content")
let myWatchlist = []


const searchBtn = document.getElementById("search-btn")


searchBtn.addEventListener("click", function(){
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=ad56d582&s=${searchBar.value}`)
    .then(res => res.json())
    .then(data => {
        // console.log(data)
        searchResults = data.Search
        console.log(searchResults)
        renderSearch ();
    })

})

function renderSearch () {
    let html = ""
    // give each title and individual id
    // increase the id number by one each time when creating it

    // search through the searchResults, return index of the titleid.value
        //push that the obj at that index to the watchlist.


    searchResults.forEach((movie, i) =>{
        // console.log(movie);
        html+= `<div class="movie-container">
                    <img src="${movie.Poster}">
                    <div class="movie-info">
                        <p>Title: ${movie.Title}</p>
                        <p>Year Released: ${movie.Year}</p>
                        <p>Type: ${movie.Type}</p>
                        <a href="https://www.imdb.com/title/${movie.imdbID}" target="_blank">IMDB</a>
                        <button id="watchlist">Add to watchlist</button>
                    </div>
                </div>`


    })

    searchContainer.innerHTML = html
    document.getElementById("watchlist").addEventListener("click", function(){
        let
        // myWatchlist.push(searchResults[$movie.Title])

    })
    console.log(myWatchlist)
}

let searchBar = document.getElementById("site-search")
let searchResults = []
let searchContainer = document.getElementById("search-result-content")


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
    searchResults.forEach(movie =>{
        console.log(movie);
        html+= `<div class="movie-container">
                    <img src="${movie.Poster}">
                    <div class="movie-info">
                        <p>Title: ${movie.Title}</p>
                        <p>Year Released: ${movie.Year}</p>
                        <p>Type: ${movie.Type}</p>
                        <a href="https://www.imdb.com/title/${movie.imdbID}">IMDB</a>
                        <button id="watchlist">Add to watchlist</button>
                    </div>
                </div>`
    })
    //add all the html to the searchContainer once
    searchContainer.innerHTML = html
}

let searchBar = document.getElementById("site-search")
let searchResults = []
let searchContainer = document.getElementById("search-result-content")
let myWatchlist = []





const searchBtn = document.getElementById("search-btn")


searchBtn.addEventListener("click", function(){
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=ad56d582&s=${searchBar.value}`)
    .then(res => res.json())
    .then(data => {
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

        i++
    })
    searchContainer.innerHTML = html;
}

function addToWatchList (i){
    myWatchlist.push(searchResults[i])
    console.log(myWatchlist)
    if (localStorage.getItem('myWatchList') === null) {
        localStorage.setItem("myWatchList", JSON.stringify(myWatchlist));
    renderWatchList()
    } else {

    }
}

// function renderWatchList() {
//     let retrievedData = localStorage.getItem("watchlist");
//     let htmlarray = JSON.parse(retrievedData)
//     console.log(htmlarray)
//     html = ""
//     myWatchlist.forEach((movie, i)=>{
//         html+= `<div class="movie-container">
//         <img src="${movie.Poster}">
//         <div class="movie-info">
//             <p id="${movie.Title}">Title: ${movie.Title}</p>
//             <p>Year Released: ${movie.Year}</p>
//             <p>Type: ${movie.Type}</p>
//             <a href="https://www.imdb.com/title/${movie.imdbID}" target="_blank">IMDB</a>
//             <button id="${i}" onclick="removeWatchList(${i})">Remove from watchlist</button>
//         </div>
//     </div>`
//     })

//     document.getElementById("watchListContainer").innerHTML = html;
// }

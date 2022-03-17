let searchBar = document.getElementById("site-search")
let searchResults = []
let searchContainer = document.getElementById("search-result-content")
let myWatchlist = JSON.parse(localStorage.getItem("localStorageList"))

if(!myWatchlist){
myWatchlist = []
}
// } else {
//     myWatchlist = JSON.parse(localStorage.getItem("localStorageList"))
// }



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
    localStorage.setItem("localStorageList", JSON.stringify(myWatchlist));
    renderWatchList()


    //TRY JUST PUSHING THE PARENT ELEMENT AND all its children to a new array
        //THEN JOIN THE ARRAY AND SET IT TO HTML IN THE RENDER WATCHLIST FUNC.
        // SOMEWHERE NEED TO SAVE IT TO LOCAL STORAGE AND DEAL WITH THAT.!
}

renderWatchList()
























// function renderWatchList() {
//     let retrievedData = localStorage.getItem.watchlist;
//     console.log(retrievedData)
//     // let htmlarray = JSON.parse(retrievedData)
//     // console.log(htmlarray)
//     console.log("in render watchlist fx")
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


let watchListContainer = document.getElementById("watch-container")
let html = ""
console.log(watchListContainer)

function renderWatchList (){
    let storedList = JSON.parse(localStorage.getItem("localStorageList"))
    console.log(storedList)
    // console.log(typeof storedList)

    storedList.forEach((movie, i) =>{


        html+= `<div class="movie-container">
                    <img src="${movie.Poster}">
                    <div class="movie-info">
                        <p id="${movie.Title}">Title: ${movie.Title}</p>
                        <p>Year Released: ${movie.Year}</p>
                        <p>Type: ${movie.Type}</p>
                        <a href="https://www.imdb.com/title/${movie.imdbID}" target="_blank">IMDB</a>
                        <button id="${i}" onclick="removeWatchlist(${i})">Remove</button>
                    </div>
                </div>`

        i++
    })
    console.log(html)


}

renderWatchList()

watchListContainer.innerHTML = html;

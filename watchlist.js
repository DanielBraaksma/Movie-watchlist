
let watchListContainer = document.getElementById("watch-container")
let storedList = JSON.parse(localStorage.getItem("localStorageList"))
// let html;
console.log(watchListContainer)

function renderWatchList (){
    let html = ""
    // let storedList = JSON.parse(localStorage.getItem("localStorageList"))
    console.log(storedList)
    // console.log(typeof storedList)

    storedList.forEach((movie, i) =>{

        html += `<div class="movie-container">
                    <img src="${movie.Poster}">
                    <div class="movie-info">
                        <p id="${movie.Title}">Title: ${movie.Title}</p>
                        <p>Year Released: ${movie.Year}</p>
                        <p>Type: ${movie.Type}</p>
                        <a href="https://www.imdb.com/title/${movie.imdbID}" target="_blank">IMDB</a>
                        <button id="${i}" onclick="removeWatchList(${i})">Remove</button>
                    </div>
                </div>`

    })
    console.log(html)
    watchListContainer.innerHTML = html;

}



function removeWatchList(i){
    storedList.splice(i, 1)
    localStorage.setItem('localStorageList', JSON.stringify(storedList))
    renderWatchList()
}


renderWatchList()

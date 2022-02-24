let search = document.getElementById("site-search")


const searchBtn = document.getElementById("search-btn")

// console.log(searchBtn)

searchBtn.addEventListener("click", function(){
    // console.log(search.value)
    // fetch(`http://www.omdbapi.com/?apikey=ad56d582&s=${search.value}`)
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=ad56d582&t=hello")
        .then(res => res.JSON())
        .them(data => console.log(data))

} )

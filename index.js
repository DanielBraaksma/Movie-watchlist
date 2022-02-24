let search = document.getElementById("site-search")


const searchBtn = document.getElementById("search-btn")

// console.log(searchBtn)

searchBtn.addEventListener("click", function(){
    // console.log(search.value)
    // fetch(`http://www.omdbapi.com/?apikey=ad56d582&s=${search.value}`)
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=ad56d582&s=${search.value}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
})

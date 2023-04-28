const home = document.querySelector(".home")
const universe = document.querySelector(".universe")
const explorer = document.querySelector(".explorer")
const errorPage = document.querySelector(".errorPage")
const htmlDate = document.querySelector("#app")

//mapping
const routes = {
    "/" : "/page/home.html",
    "/universe" : "/page/universe.html",
    "/explorer" : "/page/explorer.html",
    404 : "/page/404.html"
}

home.addEventListener("click", function () {
    route()
    
})
universe.addEventListener("click", function () {
    route()
})
explorer.addEventListener("click", function () {
    route()
    
})
errorPage.addEventListener("click", function () {
    route()
    
})

function route(event) {
    event = event || window.event
    event.preventDefault()

    //get href push in history
    window.history.pushState({},"",event.target.href)

    handle()
}

function handle() {
    //get localization of search stop.
    const {pathname} = window.location
    const route = routes[pathname] || routes[404]

    //reading the html of other pages
    fetch(route)
    .then(data => data.text())
    .then(html => {
        htmlDate.innerHTML= html
    })

    // going back with arrow in search
    window.onpopstate = () => handle() 
}
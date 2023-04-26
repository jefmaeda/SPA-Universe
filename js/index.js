const home = document.querySelector(".home")
const universe = document.querySelector(".universe")
const explorer = document.querySelector(".explorer")
const errorPage = document.querySelector(".errorPage")

//mapeamento
const routes = {
    "/" : "/page/home.html",
    "/universe" : "/page/uviverse.html",
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

    //pegar o meu href é colocar no historico
    window.history.pushState({},"",event.target.href)

    handle()
}

function handle() {
    //pegando a localização da parra de pesquisa.(responsavel)
    const {pathname} = window.location

    console.log(pathname)
}
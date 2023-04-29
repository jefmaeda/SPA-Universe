import {Router} from "./router.js"

const home = document.querySelector(".home")
const universe = document.querySelector(".universe")
const explorer = document.querySelector(".explorer")
// const htmlDate = document.querySelector("#app")
const bgPage = document.body


//mapping
const router = new Router()
router.add("/","/page/home.html")
router.add("/universe","/page/universe.html")
router.add("/explorer","/page/explorer.html")
router.add(404,"/page/404.html")

home.addEventListener("click", function () {
    router.route()
    bgPage.classList.remove("bgUniverse")
    bgPage.classList.remove("bgExplorer")
})

universe.addEventListener("click", function () {
    router.route()
    bgPage.classList.add("bgUniverse")
    bgPage.classList.remove("bgExplorer")
})
explorer.addEventListener("click", function () {
    router.route()
    bgPage.classList.add("bgExplorer")
    bgPage.classList.remove("bgUniverse")
})

router.handle()

// going back with arrow in search
window.onpopstate = () => router.handle() 
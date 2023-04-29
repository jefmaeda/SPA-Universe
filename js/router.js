export class Router{

    routes = {}

    add(routeName, page){
        this.routes[routeName] = page
    }

    route(event) {
        event = event || window.event
        event.preventDefault()
    
        //get href push in history
        window.history.pushState({},"",event.target.href)
        this.handle()
    }

    handle() {
        //get localization of search stop.
        const {pathname} = window.location
        const route = this.routes[pathname] || this.routes[404]
    
        //reading the html of other pages
        fetch(route)
        .then(data => data.text())
        .then(html => {
            document.querySelector("#app").innerHTML= html
        })
    }
    
}
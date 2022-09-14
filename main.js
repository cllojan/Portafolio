
let imgModal;
const route  = (event) => {
    event = event || window.event;    
    event.preventDefault();
    window.history.pushState({},"",event.target.href);
    handleLocation();
    var current = document.getElementsByClassName("active");
    current[0].classList.remove("active");
    event.target.className = "active";
    
}

const routes = {
    404:"/pages/NotFound.html",
    "/":"/pages/proyectos.html",
    "/habilidades":"/pages/habilidades.html"
    
}

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route)
                        .then(data => data.text());
    document.getElementById("content").innerHTML = html;
    
}

window.onpopstate = handleLocation;
window.route = route;
handleLocation();


let modal = document.getElementById("modal");

function imgClick(evt){
    console.log(evt);
    console.log(document.querySelector("content"));
    let img = document.getElementById("img_m");
    console.log(img);
    modal.style.visibility = "visible";
}

modal.addEventListener("click", (evt) => {
    evt.stopPropagation();
    evt.target.style.visibility = "hidden"; 
});



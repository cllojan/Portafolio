let modal = document.getElementById("modal");

let imgPro = document.getElementById("imgPro");
let imgModal;
const route  = (event) => {
    event = event || window.event;    
    event.preventDefault();
    window.history.pushState({},"",event.target.href);
    handleLocation();
    var current = document.getElementsByClassName("active");
    current[0].classList.remove("active");
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

  //  console.log(path);
    if (path == "/"){

	document.getElementById("tab_pro").classList.add("active");
    }
    if(path == "/habilidades"){

	document.getElementById("tab_hab").classList.add("active");

    }
    

    document.getElementById("content").innerHTML = html;
    document.getElementById("ability") || document.getElementById("proyect").childNodes.forEach(elm => {
	elm.addEventListener('click', evt => {
	    modal.style.visibility = "visible";
	    imgPro.src = evt.target.src;
	})
    })
    
}

window.onpopstate = handleLocation;
window.route = route;
handleLocation();


modal.addEventListener("click", (evt) => {

    if(evt.target.className == "mymodal"){

	evt.target.style.visibility = "hidden"; 
    }

    
});


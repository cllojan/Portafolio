let modal = document.getElementById("modal");

let imgPro = document.getElementById("imgPro");
let pro = document.getElementById("proyect");
let hab = document.getElementById("ability");
let imgModal;
let prevtBtn = null
let tabs = document.getElementById("tabs");
tabs.addEventListener("click", (evt) => {
    evt.preventDefault()
    
    if(evt.target.className != ""){
	let current = document.getElementsByClassName("active");
	current[0].classList.remove("active");


	if(prevtBtn !== null){
	    prevtBtn.classList.remove("active");
	}
	evt.target.classList.add("active");

	
	prevtBtn = evt.target;

	if(evt.target.classList[1] == "pro"){

	    pro.style.visibility = "visible";
	    pro.style.left="50px";
	    hab.style.visibility = "hidden";	    
	    hab.style.right="-900px";
	}
	if(evt.target.classList[1] == "hab"){
	    pro.style.visibility = "hidden";
	    pro.style.left="-1500px";
	    hab.style.right="115px";
	    hab.style.visibility = "visible";
	}
    }

})


const handleLocation = async () => {


    document.getElementById("content").innerHTML = html;
    document.getElementById("ability") || document.getElementById("proyect").childNodes.forEach(elm => {
	elm.addEventListener('click', evt => {
	    modal.style.visibility = "visible";
	    imgPro.src = evt.target.src;
	})
    })
    
}



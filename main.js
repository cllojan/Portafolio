let modal = document.getElementById("modal");

let imgPro = document.getElementById("imgPro");
let imgModal;



const handleLocation = async () => {


    document.getElementById("content").innerHTML = html;
    document.getElementById("ability") || document.getElementById("proyect").childNodes.forEach(elm => {
	elm.addEventListener('click', evt => {
	    modal.style.visibility = "visible";
	    imgPro.src = evt.target.src;
	})
    })
    
}



modal.addEventListener("click", (evt) => {

    if(evt.target.className == "mymodal"){

	evt.target.style.visibility = "hidden"; 
    }

    
});


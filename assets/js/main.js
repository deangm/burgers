function showMenu(){
	chicken = document.getElementById('chicken');
	thing = document.getElementById('thing');
	
	chicken.onclick = function(){
		thing.setAttribute("style", "visibility:visible")
	}
}

document.addEventListener("DOMContentLoaded", function(event) { 
	showMenu();
});



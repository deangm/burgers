$(window).load(function() {
	$("body").removeClass("preload");
  });


function modalVisible(){
  document.getElementById("modal").style.visibility=("visible");
  document.getElementsByClassName("container").style.opacity(".5");
}

function closeModal(){
  document.getElementById("modal").style.visibility=("hidden");
}
//Get Modal element
var modal = document.getElementById("simpleModal");
//Get open modal button
var modalBtn = document.getElementById("modalBtn");
//Get close button
var closeBtn = document.getElementsByClassName("closeBtn")[0];

//Liosten for open click
modalBtn.addEventListener("click", openModal);
//Listen for close click
closeBtn.addEventListener("click", closeModal);
//Listen for outside click
window.addEventListener("click", outsideClick);
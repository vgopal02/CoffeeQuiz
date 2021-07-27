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

//Function to open Modal
function openModal() {
    modal.style.display = "block";
}

//Function to close modal
function closeModal() {
    modal.style.display = "none";

}

//Function to close modal if clicked in window outside modal box
function outsideClick(e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
}
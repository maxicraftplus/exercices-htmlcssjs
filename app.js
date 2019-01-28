const modal = document.getElementById("modal");
const img = document.getElementById("img1");
const imgModal = document.querySelector(".modal-content");
const titleModal = document.querySelector("#title");
const btCloseModal = document.querySelector(".close");

img.addEventListener("click", openModal);
btCloseModal.addEventListener("click", closeModal);

function openModal() {
    modal.style.display = "block";
    imgModal.src = img.src;
    titleModal.innerHTML = img.alt;
}

function closeModal() {
    modal.style.display = "none";
}
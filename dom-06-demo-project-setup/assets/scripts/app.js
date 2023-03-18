const addNewMovieBtn = document.getElementById("add-new-movie-btn");
const backdrop = document.getElementById("backdrop");
const addNewMovieModal = document.getElementById("add-modal");
const cancelAddMovieBatton = addNewMovieModal.querySelector(".btn--passive");

const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

const toggleAddNewMovieModal = () => {
  addNewMovieModal.classList.toggle("visible");
};

function addNewMovieBtnClickHandler() {
  toggleBackdrop();
  toggleAddNewMovieModal();
}

function backdropClickHandler() {
  addNewMovieBtnClickHandler();
}

function cancelAddMovieHandler() {
  addNewMovieBtnClickHandler();
}

addNewMovieBtn.addEventListener("click", addNewMovieBtnClickHandler);
backdrop.addEventListener("click", backdropClickHandler);
cancelAddMovieBatton.addEventListener("click", cancelAddMovieHandler);

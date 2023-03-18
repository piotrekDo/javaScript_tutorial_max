const addNewMovieBtn = document.getElementById("add-new-movie-btn");
const backdrop = document.getElementById("backdrop");
const addNewMovieModal = document.getElementById("add-modal");
const cancelAddMovieBatton = addNewMovieModal.querySelector(".btn--passive");
const confirmAddMovieButton = cancelAddMovieBatton.nextElementSibling;
const inputElements = addNewMovieModal.querySelectorAll("input");

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

function confirmAddMovieButtonHandler() {
  const titleValue = inputElements[0].value;
  const imageUrlValue = inputElements[1].value;
  const ratingValue = inputElements[2].value;
  if (
    titleValue.trim() === "" ||
    imageUrlValue === "" ||
    ratingValue === "" ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert('Please enter a valid input');
  }
}

addNewMovieBtn.addEventListener("click", addNewMovieBtnClickHandler);
backdrop.addEventListener("click", backdropClickHandler);
cancelAddMovieBatton.addEventListener("click", cancelAddMovieHandler);
confirmAddMovieButton.addEventListener("click", confirmAddMovieButtonHandler);

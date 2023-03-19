const addNewMovieBtn = document.getElementById("add-new-movie-btn");
const backdrop = document.getElementById("backdrop");
const addNewMovieModal = document.getElementById("add-modal");
const deleteMovieModal = document.getElementById("delete-modal");
const cancelAddMovieBatton = addNewMovieModal.querySelector(".btn--passive");
const confirmAddMovieButton = cancelAddMovieBatton.nextElementSibling;
const inputElements = addNewMovieModal.querySelectorAll("input");
const entryTextSection = document.getElementById("entry-text");

let movies = [];

const updateUI = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = "block";
  } else {
    entryTextSection.style.display = "none";
  }
};

const renderNewMovieElement = (id, title, imageUrl, rating) => {
  const newMovieElement = document.createElement("li");
  newMovieElement.className = "movie-element";
  newMovieElement.innerHTML = `
    <div class="movie-element__image">
        <img src="${imageUrl} alt="${title}">
    </div>
    <div class="movie-element__info">
        <h2>${title}</h2>
        <p>${rating}/5 stars</p>
    </div>`;
  newMovieElement.setAttribute("id", id);
  newMovieElement.addEventListener("click", deleteMovieHandler.bind(null, id));
  const listRoot = document.getElementById("movie-list");
  listRoot.appendChild(newMovieElement);
};

const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

const toggleAddNewMovieModal = () => {
  addNewMovieModal.classList.toggle("visible");
};

const clearMovieInput = () => {
  inputElements.forEach((input) => (input.value = ""));
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
    alert("Please enter a valid input");
  } else {
    const newMovie = {
      id: Math.random().toString(),
      title: titleValue,
      image: imageUrlValue,
      rating: +ratingValue,
    };
    movies.push(newMovie);
    addNewMovieBtnClickHandler();
    clearMovieInput();
    renderNewMovieElement(
      newMovie.id,
      newMovie.title,
      newMovie.image,
      newMovie.rating
    );
    updateUI();
  }
}

function deleteMovie(id) {
  movies = movies.filter((movie) => movie.id !== id);
  console.log(movies);
  const movieToDelete = document.getElementById(id);
  movieToDelete.remove();
}

function cancelDeletehandler() {
  backdrop.classList.remove("visible");
  deleteMovieModal.classList.remove("visible");
}

function confirmAddMovieHandler(id) {
  toggleBackdrop();
  deleteMovieModal.classList.remove("visible");
  deleteMovie(id);
}

function deleteMovieHandler(id) {
  const cancelBtn = deleteMovieModal.querySelector(".btn--passive");
  let confirmBtn = deleteMovieModal.querySelector(".btn--danger");

  confirmBtn.replaceWith(confirmBtn.cloneNode(true));
  confirmBtn = deleteMovieModal.querySelector(".btn--danger");

  toggleBackdrop();
  deleteMovieModal.classList.add("visible");
  cancelBtn.removeEventListener("click", cancelDeletehandler);
  cancelBtn.addEventListener("click", cancelDeletehandler);
  confirmBtn.addEventListener("click", confirmAddMovieHandler.bind(null, id));
}

addNewMovieBtn.addEventListener("click", addNewMovieBtnClickHandler);
backdrop.addEventListener("click", () => {
  toggleBackdrop();
  deleteMovieModal.classList.remove("visible");
  addNewMovieModal.classList.remove("visible");
});
cancelAddMovieBatton.addEventListener("click", cancelAddMovieHandler);
confirmAddMovieButton.addEventListener("click", confirmAddMovieButtonHandler);

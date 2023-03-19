const addNewMovieBtn = document.getElementById("add-new-movie-btn");
const backdrop = document.getElementById("backdrop");
const addNewMovieModal = document.getElementById("add-modal");
const cancelAddMovieBatton = addNewMovieModal.querySelector(".btn--passive");
const confirmAddMovieButton = cancelAddMovieBatton.nextElementSibling;
const inputElements = addNewMovieModal.querySelectorAll("input");
const entryTextSection = document.getElementById("entry-text");

const movies = [];

const updateUI = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = "block";
  } else {
    entryTextSection.style.display = "none";
  }
};

const renderNewMovieElement = (title, imageUrl, rating) => {
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
    const listRoot = document.getElementById('movie-list');
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
      title: titleValue,
      image: imageUrlValue,
      rating: +ratingValue,
    };
    movies.push(newMovie);
    addNewMovieBtnClickHandler();
    clearMovieInput();
    renderNewMovieElement(titleValue, imageUrlValue, ratingValue);
    updateUI();
  }
}

addNewMovieBtn.addEventListener("click", addNewMovieBtnClickHandler);
backdrop.addEventListener("click", backdropClickHandler);
cancelAddMovieBatton.addEventListener("click", cancelAddMovieHandler);
confirmAddMovieButton.addEventListener("click", confirmAddMovieButtonHandler);

const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

const movies = [];

function addMovieHandler() {
  const inputsElements = document.querySelectorAll("#user-input input");
  const [title, extraName, extraValue] = Array.from(inputsElements).map(
    (ele) => ele.value
  );

  if (
    title.trim() === "" ||
    extraName.trim() === "" ||
    extraValue.trim() === ""
  ) {
    return;
  }

  const newMovie = {
    info: {
      title: title,
      [extraName]: extraValue,
    },
    id: Math.random(),
  };

  movies.push(newMovie);
  console.log(movies);
}

addMovieBtn.addEventListener("click", addMovieHandler);

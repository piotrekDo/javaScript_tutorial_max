const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

function renderMovies() {
  const movieList = document.getElementById('movie-list');
  if (movies.length === 0) {
    movieList.classList.remove('visible');
  } else {
    movieList.classList.add('visible');
  }

  movieList.innerHTML = '';
  movies.forEach((movie) => {
    const movieEl = document.createElement('li');
    let text = movie.info.title + ' - ';
    for(const key in movie.info){
      if (key !== 'title') text += `${key}: ${movie.info[key]}`
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
  });
}

function addMovieHandler() {
  const inputsElements = document.querySelectorAll('#user-input input');
  const [title, extraName, extraValue] = Array.from(inputsElements).map(
    (ele) => ele.value
  );

  if (
    title.trim() === '' ||
    extraName.trim() === '' ||
    extraValue.trim() === ''
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
  renderMovies();
}

addMovieBtn.addEventListener('click', addMovieHandler);

const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');
const filterInput = document.getElementById('filter-title');

const movies = mockData();
renderMovies();

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', filterMoviesHandler);
filterInput.addEventListener('keyup', (event) => {
  var name = event.key;
  if (name === 'Enter') filterMoviesHandler();
});

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
  
  function filterMoviesHandler() {
    const filterInput = document.getElementById('filter-title').value;
    // searchBtn.classList.remove('bounce-in');
    searchBtn.classList.add('bounce-in');
    setTimeout(() => {
      searchBtn.classList.remove('bounce-in');
    }, 500)
    renderMovies(filterInput);
  }
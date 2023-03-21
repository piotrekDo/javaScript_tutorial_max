function renderMovies(filter) {
    const movieList = document.getElementById('movie-list');
    if (movies.length === 0) {
      movieList.classList.remove('visible');
    } else {
      movieList.classList.add('visible');
    }
  
    movieList.innerHTML = '';
    let moviesToRender = movies;
    if (filter) {
      moviesToRender = movies.filter((mov) => mov.info.title.includes(filter));
    }
    moviesToRender.forEach((movie) => {
      const movieEl = document.createElement('li');
      let text = movie.info.title + ' - ';
      for (const key in movie.info) {
        if (key !== 'title') text += `${key}: ${movie.info[key]}`;
      }
      movieEl.textContent = text;
      movieList.append(movieEl);
    });
  }
function fetchImages(searchImageName, page) {
  const API_KEY = '22935349-f238c1b9d1a1a29229f76f105';

  return fetch(
    `https://pixabay.com/api/?q=${searchImageName}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }

    return response;
  });
}

export default fetchImages;

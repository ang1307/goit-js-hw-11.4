const ADDRES_API = 'https://pixabay.com/api/';
const KEY_API = '48409293-cb4f9d519a51e4cf248f48e36';

export function creatingRequestPhoto(quest) {
  const parameters = new URLSearchParams({
    key: KEY_API,
    q: quest,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  console.dir(parameters);

  return fetch(`${ADDRES_API}?${parameters}`).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}

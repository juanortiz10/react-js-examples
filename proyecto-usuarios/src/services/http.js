import Fetch from 'whatwg-fetch';

export function get(url){
  return fetch(url)
  .then((response) => {
    return response.json();
  })
};

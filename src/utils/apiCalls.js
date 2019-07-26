import { searchUrl, imageUrl, suggestionsUrl } from "./paths";
import { key } from "./apiKey";
import { cleanSearch } from './cleaner';

export const fetchWatchedShowId = (search) => {
  return fetch(
    `${ searchUrl }${ key }&language=en-US&query=${ search }&page=1`
  ) 
  .then(response => {
    if(!response.ok) {
      throw Error('Could not grab search Id')
    } else {
      return response.json()
    }
  })
  .then(data => cleanSearch(data.results[0]))
  .catch(error => console.log(error.message))
}
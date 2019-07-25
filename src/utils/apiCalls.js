import { searchUrl, imageUrl, suggestionsUrl } from "./paths";
import { key } from "./apiKey";

export const fetchwatchedShowId = (search) => {
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
  .then(data => console.log(data.results.id))
  .catch(error => console.log(error.message))
}
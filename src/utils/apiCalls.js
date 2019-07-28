import { searchUrl, imageUrl, suggestionsUrl } from "./paths";
import { key } from "./apiKey";
import { cleanSearch, cleanSuggestions } from './cleaner';

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
  .catch(error => Error("Error while fetching show"))
}

export const fetchSuggestedShows = (showId) => {
  console.log(showId)
  return fetch(
    `${ suggestionsUrl }tv/${ showId }/similar?api_key=${ key }&language=en-US&page=1`
  )
  .then(response => {
    if(!response.ok) {
      throw Error ('Could not grab suggested shows')
    } else {
      return response.json()
    }
  })
    .then(data => cleanSuggestions(data.results))
    .catch(error => Error("Error while fetching suggestions"))
}
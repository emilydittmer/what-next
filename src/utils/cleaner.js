import { imageUrl } from './paths'

export const cleanSearch = (show) => {
  return ({
    id:show.id,
    name:show.name
  })
}

export const cleanSuggestions = (shows) => {
  return shows.map(show => ({
    id: show.id,
    name: show.name,
    overview: show.overview,
    voteAverage: show.vote_average,
    date: show.first_air_date,
    backgroundImg: `${imageUrl}${show.backdrop_path}`,
    favorited: false
  }))
}
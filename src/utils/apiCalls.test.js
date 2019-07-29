import { fetchWatchedShowId, fetchSuggestedShows } from './apiCalls';
import { key } from "./apiKey";
import { searchUrl, suggestionsUrl } from "./paths";

describe('fetchWatchedShowId', () => {
  let mockShow;
  beforeEach(() => {
    mockShow = {
      id: 1,
      name: "The Office"
    };
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockShow)
      });
    });
  });

  it("should be called with all params", () => {
    const mockSearch = 'The Office';
    const expected = `${ searchUrl }${ key }&language=en-US&query=${ mockSearch }&page=1`
    fetchWatchedShowId(mockSearch)
    expect(window.fetch).toHaveBeenCalledWith(expected)
  });

  it("should thrown an error if the response is not ok", () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });
    expect(fetchWatchedShowId()).resolves.toEqual({error: "Error while fetching show"})
  });
})

describe('fetchSuggestedShows', () => {
  let mockShowId;

  beforeEach(() => {
    mockShowId = 1;
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockShowId)
      });
    });
  });
  it('should be called with all params', () => {
    const expected = `${suggestionsUrl}tv/${mockShowId}/similar?api_key=${key}&language=en-US&page=1`
    fetchSuggestedShows(mockShowId);
    expect(window.fetch).toHaveBeenCalledWith(expected)
  });
  it("should thrown an error if the response is not ok", () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });
    expect(fetchSuggestedShows()).resolves.toEqual({error: "Error while fetching suggestions"})
  });
})
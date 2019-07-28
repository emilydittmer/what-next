import { fetchWatchedShowId } from './apiCalls';
import { key } from "./apiKey";
import { searchUrl } from "./paths";

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
    expect(fetchWatchedShowId()).resolves.toEqual(Error("Error while fetching show"))
  });


})
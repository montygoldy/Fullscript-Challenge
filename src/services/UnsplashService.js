import { toJson } from "unsplash-js";

// Utils
import UnsplashInstance from "../utils/UnsplashInstance";

let UnsplashService = {};

UnsplashService.searchPhotos = (query) => {  
  return UnsplashInstance()
    .search
    .photos(query, window.config.search_page, window.config.search_result_per_page)
    .then(toJson)
    .then(result => result)
    .catch(error => error.response);
}

UnsplashService.getRandomPhotos = () => {  
  return UnsplashInstance()
    .photos
    .getRandomPhoto({ count: window.config.search_result_per_page })
    .then(toJson)
    .then(result => result)
    .catch(error => error.response);
}

export default UnsplashService;

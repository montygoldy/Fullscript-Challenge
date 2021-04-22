

let HomepageService = {};

HomepageService.saveQuery = (queryString) => {
  let localData = HomepageService.retrieveSearchHistory();

  localData = !localData ? [queryString] : [queryString, ...localData];

  localStorage.setItem("searchHistory", JSON.stringify(localData))
}

HomepageService.retrieveSearchHistory = () => {
  return JSON.parse(localStorage.getItem("searchHistory"));
}

export default HomepageService;

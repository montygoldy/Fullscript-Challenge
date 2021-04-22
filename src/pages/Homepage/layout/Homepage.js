import React, { useState, useEffect } from "react";

// Services
import UnsplashService from "../../../services/UnsplashService";
import HomepageService from "../../../services/HomepageService";

// Components
import SearchForm from "../presentation/SearchForm"; 
import HistorySection from "../presentation/HistorySection";
import CustomMasonary from "../presentation/CustomMasonary";

// Lib
import CircularProgress from '@material-ui/core/CircularProgress';

const Homepage = () => {

  const [allValues, setAllValues] = useState({
    search: "",
    disabled: true,
    isLoading: false,
    searchResults: [],
    searchHistory: []
  });

  // Get Random pictures on load
  useEffect(() => {  
    const fetchRandomPics = () => {
       UnsplashService.getRandomPhotos().then(results => {
        setAllValues(prevValues => ({ ...prevValues, searchResults: results, isLoading: false, searchHistory: HomepageService.retrieveSearchHistory() || [] }))
      }) ;
    }

    fetchRandomPics();
  }, [])
  

  //  Input change handler

  const handleOnChange = e => {
    const { name, value } = e.target;

    const disabled = value.trim() ? false : true;

    setAllValues({...allValues, [name]: value.trim(), disabled })
  }

  // search Submissions

  const handleOnSearchClick = async (e, queryString) => {
    e.preventDefault();

    let tempQueryString = queryString;
    
    if (!tempQueryString) {
      tempQueryString = allValues.search;
      
      // 1. Save in localStorage
      HomepageService.saveQuery(allValues.search);
    }

    try {
      setAllValues({ ...allValues, search: "", isLoading: true });
      
      // 2. Api call
      const searchResults = await UnsplashService.searchPhotos(tempQueryString);

      // 3. Update the state
      setAllValues({ ...allValues, searchResults: searchResults.results, isLoading: false, searchHistory: [allValues.search, ...allValues.searchHistory], search: "" })
    } catch (error) {
      console.log(error)
      setAllValues({ ...allValues, isLoading: false });
    }
  };

  const handleOnKeyPress = (e) => {
    // If querystring is there search oon keyboard search click
    if (e.key === 'Enter' && allValues.search) {
      handleOnSearchClick();
    }
  }

  return (
    <main className="homepage">      
      <section>
        <SearchForm 
          handleOnSearchClick={handleOnSearchClick} 
          queryString={allValues.search}
          handleOnChange={handleOnChange}
          disabled={allValues.disabled}
          onKeyPress={handleOnKeyPress}
        />
        <div className="content-container">

          {/* SHow Loader
           */}
          {
            allValues.isLoading
            ?
            <div className="spinner-container">
              <CircularProgress />
            </div>
            :
            allValues.searchResults && allValues.searchResults.length && !allValues.isLoading
            ?
            <CustomMasonary 
              searchResults={allValues.searchResults}
            />
            :
            <div className="no-result">No results found</div>
          } 

          <HistorySection 
            searchHistory={allValues.searchHistory}
            handleOnSearchClick={handleOnSearchClick}
          />
        </div> 
      </section>
    </main>
  );
}

export default Homepage;

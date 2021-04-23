// Lib
import SearchIcon from '@material-ui/icons/Search';


const SearchForm =  ({ queryString, handleOnChange, handleOnSearchClick, onKeyPress, disabled }) => {
  return (
    <form 
      className="form"  
    >
      <input
        type="text"
        name="search"
        className="search-input"
        placeholder="Search pictures"
        value={queryString}
        onChange={handleOnChange}
      />
      <button 
        type="submit" 
        className="submit-button" 
        onClick={handleOnSearchClick}
        onKeyPress={onKeyPress}
        disabled={disabled}
      >
        <SearchIcon className="search-icon" />
      </button>
    </form>
  );
}

export default SearchForm;
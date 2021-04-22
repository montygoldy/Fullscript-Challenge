
const SearchForm =  ({ queryString, handleOnChange, handleOnSearchClick, onKeyPress, disabled }) => {
  return (
    <form 
      className="form"  
    >
      <input
        type="text"
        name="search"
        className="input"
        placeholder="Search pictures"
        value={queryString}
        onChange={handleOnChange}
      />
      <button 
        type="submit" 
        className="button" 
        onClick={handleOnSearchClick}
        onKeyPress={onKeyPress}
        disabled={disabled}
      >
        Search Photos
      </button>
    </form>
  );
}

export default SearchForm;
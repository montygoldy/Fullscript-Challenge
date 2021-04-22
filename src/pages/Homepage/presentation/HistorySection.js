
const HistorySection =  ({ searchHistory, handleOnSearchClick }) => {
  return (
    <div className="history-section">
      <h2>Search History</h2>

      {
        searchHistory.length
        ?
        <ul>
          {
            searchHistory.map((searchItem, i) => (
              <li key={i}>
                <button onClick={(e) => handleOnSearchClick(e, searchItem)}>
                  {
                    searchItem
                  }
                </button>
              </li>
            ))
          }
        </ul>
        :
        <div className="no-result">No history found</div> 
      }
    </div>
  );
}

export default HistorySection;
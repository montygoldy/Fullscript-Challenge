
const HistorySection =  ({ searchHistory, handleOnSearchClick }) => {
  return (
    <div className="history-section">
      <ul>
        {
          searchHistory.length
          ?
          searchHistory.map((searchItem, i) => (
            <li key={i}>
              <button onClick={(e) => handleOnSearchClick(e, searchItem)}>
                {
                  searchItem
                }
              </button>
            </li>
          ))
          :
          <div className="no-result">No history found</div> 
        }
      </ul>
    </div>
  );
}

export default HistorySection;
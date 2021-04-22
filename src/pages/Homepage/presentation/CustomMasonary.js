import Masonry from 'react-masonry-css';

const CustomMasonary = ({ searchResults }) => {
  // Format the incoming data
  const formattedData = searchResults.map((item) => (
    <div className="card-item" key={item.id}>
      <img
        className="card--image"
        alt={item.alt_description}
        src={item.urls.small}
      />
    </div>
  ));

  return (
    <Masonry
      breakpointCols={3}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {formattedData}
    </Masonry>
  );
}

export default CustomMasonary;

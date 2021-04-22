
import Unsplash from "unsplash-js";

// Get the instance of unsplash
const UnsplashInstance = () => {
  return new Unsplash({
    accessKey: window.config.accessKey,
  });
}

export default UnsplashInstance;

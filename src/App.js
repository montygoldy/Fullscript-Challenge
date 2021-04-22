import React, { useState, useEffect } from "react";

// Lib
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';

// Components
import Homepage from "./pages/Homepage/layout/Homepage";
import Header from "./components/reusable/Header";

// Styles
import "./styles/App.css";

// Utils
import UnsplashInstance from "./utils/UnsplashInstance";

const App = () => {

  const [isReady, updateIsReady] = useState(false);

  useEffect(() => {  
    async function initialize() {  
      await axios.get(`${process.env.PUBLIC_URL}/config/config.json`).then(function (res) {
        window.config = res.data;
      });

      UnsplashInstance();

      updateIsReady(true);
    }

    initialize();
  }, [])

  if (!isReady) {
    return <div className="App--loading"><CircularProgress className="spinner-container" /></div>;
  }

  return (
    <div className="App">
      <Header />
      <Homepage />
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import Splash from "../pages/Splash/splash.js";

const LoadingPage = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [main, setMain] = useState({});

  useEffect(() => {
    setTimeout(() => {
      const mainpage = props.children;
      setMain(mainpage);
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div>
          {/* <h1>Loading...</h1> */}
          <Splash />
        </div>
      ) : (
        <div>
          {/* <h1>Welcome to the app!</h1>
          Your main app content goes here */}
          {main}
        </div>
      )}
    </div>
  );
};

export default LoadingPage;

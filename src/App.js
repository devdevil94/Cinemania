import React, { useEffect } from "react";
import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import queryString from "querystring";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const queryData = {
        api_key: process.env.REACT_APP_API_KEY,
        query: "harry",
        language: "en-US",
        page: 2,
      };
      console.log(queryString.stringify(queryData));
      const res = await fetch(
        `${
          process.env.REACT_APP_API_ENDPOINT
        }/search/movie?${queryString.stringify(queryData)}`,
        {
          method: "GET",
        }
      );
      const data = await res.json();
      console.log(data);
    };

    fetchData();
  }, []);
  return <div className="App"></div>;
}

export default App;

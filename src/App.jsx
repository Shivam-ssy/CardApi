import React, { useState, useEffect } from "react";
import Mynav from "./component/Navbar";
import Card from "./component/Card";
import ShowContextProvider from "./context/ShowContextProvider";
import Cardcontainer from "./component/Cardcontainer";
import "./App.css"
const MyComponent = () => {
  // const [apiData, setApiData] = useState([]);
  // // const [dt, setDt] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://api.tvmaze.com/search/shows?q=all"
  //       );
  //       if (response.ok) {
  //         const data = await response.json();
  //         setApiData(data);
  //       } else {
  //         console.error("Failed to fetch data:", response.status);
  //       }
  //     } catch (error) {
  //       console.error("An error occurred while fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  
  return (
    <ShowContextProvider>
      <div className="container-fluid">
        <Mynav />
        
        <Cardcontainer/>
      </div>
    </ShowContextProvider>
  );
};

export default MyComponent;

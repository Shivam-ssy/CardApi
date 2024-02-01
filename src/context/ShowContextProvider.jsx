import React from "react";
import ShowContext from "./ShowContext.js";
import { useState,useEffect } from "react";

const ShowContextProvider = ({children}) => {
    const [apiData, setApiData] = useState([]);
    const [openModal,setModal]=useState(false)
  useEffect(() => {
    const fetchData = async () => {
        const response = await fetch(
            "https://api.tvmaze.com/search/shows?q=all"
          ).then((res)=>res.json());
          setApiData(response)
        //   const data =response.json();
    };

    fetchData();
  }, []);
 
    return(
        <ShowContext.Provider value={{apiData,openModal,setModal}}>    
        {children}
        </ShowContext.Provider>
    )
}

export default ShowContextProvider
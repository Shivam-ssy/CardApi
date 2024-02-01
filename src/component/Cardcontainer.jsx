import React, { useContext, useState } from "react";
import ShowContext from "../context/ShowContext.js";
import Modals from "./Modal.jsx";
import Card from "./Card.jsx";

function Cardcontainer() {
  const { apiData } = useContext(ShowContext);
  const [selectedShow, setSelectedShow] = useState(null);

  const handleDetailsClick = (showDetails) => {
    console.log("Details button clicked");
    setSelectedShow(showDetails);
  };

  const closeModal = () => {
    setSelectedShow(null);
  };

  if (!apiData) {
    return <div>Data not received</div>;
  }

  return (
    <>
    
    <div className=" justify-content-center container gap-5 d-flex flex-wrap mt-3">
        {apiData.map((show) => (
          <div key={show.show.id}>
            <Card
              name={show?.show?.name}
              imageUrl={show?.show?.image?.medium}
              url={show?.show?.url}
              id={show?.show?.id}
              details={show?.show}
              onDetailsClick={() => handleDetailsClick(show?.show)}
            />
          </div>
        ))}
         {selectedShow && (
        <Modals
          name={selectedShow.name}
          imageUrl={selectedShow.image?.medium}
          url={selectedShow.url}
          details={selectedShow}
          onClose={closeModal}
        />
      )}
      </div>
      
   
      

      
    </>
  );
}

export default Cardcontainer;

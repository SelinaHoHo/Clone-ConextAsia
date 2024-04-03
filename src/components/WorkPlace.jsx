import axios from "axios";
import React, { useEffect, useState } from "react";
import BookingFormBtn from "./BookingFormBtn";
import WorkplaceModal from "./WorkplaceModal";

const WorkPlace = () => {
  const [locations, setLocations] = useState([]);
  const [selectedWorkplace, setSelectedWorkplace] = useState(null);

  const openModal = (workplace) => {
    setSelectedWorkplace(workplace);
  };

  const closeModal = () => {
    setSelectedWorkplace(null);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/Locations")
      .then((response) => {
        setLocations(response.data);
      })
      .catch((error) => {
        console.error("Error fetching locations:", error);
      });
  }, []);

  return (
    <div>
      {locations.map((location) => (
        <div key={location.id}>
          <h2>Location Name: {location.name}</h2>
          <div>
            {location.Workplaces.map((workplace) => (
              <div key={workplace.id}>
                <p>Name: {workplace.name}</p>
                <p>Address: {workplace.address}</p>
                <p>Price: {workplace.price}</p>
                <BookingFormBtn onClick={openModal} workplace={workplace} />
                View Details
                {/* Add more fields as needed */}
              </div>
            ))}
          </div>
        </div>
      ))}

      <WorkplaceModal
        isOpen={selectedWorkplace !== null}
        onRequestClose={closeModal}
        selectedWorkplace={selectedWorkplace}
      />
    </div>
  );
};

export default WorkPlace;

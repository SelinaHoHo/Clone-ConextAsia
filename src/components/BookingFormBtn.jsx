import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import BookingForm from "../components/BookingForm";

const BookingFormBtn = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:3000/Locations");
  //       const locations = response.data;
  //       console.log(locations[0].Workplaces[0].price);
  //       const extractedWorkplaces = locations.flatMap(
  //         (location) => location.Workplaces
  //       );

  //       setWorkplaces(extractedWorkplaces);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div>
      <button
        onClick={openModal}
        className="p-4 bg-[#fed702] font-semibold uppercase color-[#171c32] rounded  transform hover:-translate-y-1 transition duration-300 hover:shadow-bottom"
      >
        Book A SEAT
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Booking Form Modal"
        style={{
          content: {
            width: "70%",
            maxWidth: "80%",
            margin: "auto",
            top: "50%",
            left: "50%",
            right: "80%",
            bottom: "-40%",
            transform: "translate(-50%, -50%)",
          },
        }}
      >
        <button onClick={closeModal}>Close</button>
        <BookingForm />
      </Modal>
    </div>
  );
};

export default BookingFormBtn;

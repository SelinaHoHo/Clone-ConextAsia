import React, { useState } from "react";
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
            width: "80%",
            maxWidth: "80%",
            margin: "auto",
            top: "50%",
            left: "50%",
            right: "80%",
            bottom: "-40%",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
          },
        }}
      >
        <BookingForm />
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

export default BookingFormBtn;

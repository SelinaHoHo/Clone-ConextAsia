import React from "react";
import { IoMdClose } from "react-icons/io";
import Modal from "react-modal";
import BookingForm from "./BookingForm";

const WorkplaceModal = ({ isOpen, onRequestClose, selectedWorkplace }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
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
      <button
        onClick={onRequestClose}
        className="flex ml-auto text-[#4f4d4d5e] hover:text-[black] transition duration-300"
      >
        <IoMdClose />
      </button>
      <BookingForm selectedWorkplace={selectedWorkplace} />
    </Modal>
  );
};

export default WorkplaceModal;

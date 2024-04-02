import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Modal from "react-modal";
import i18n from "../../i18n";
import BookingForm from "../components/BookingForm";
import LanguageSwitcher from "../components/LanguageSwitcher";

const HomePage = () => {
  const { t } = useTranslation();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <LanguageSwitcher i18n={i18n} />
      <h1>{t("hello")}</h1>
      <p>{t("welcome")}</p>

      <div>
        <button onClick={openModal}>Open Booking Form</button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Booking Form Modal"
        >
          <h2>Booking Form</h2>
          <BookingForm />
          <button onClick={closeModal}>Close</button>
        </Modal>
      </div>
    </div>
  );
};

export default HomePage;

import { CalendarOutlined, UsergroupAddOutlined } from "@ant-design/icons";
import Search from "antd/es/input/Search";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Modal from "react-modal";
import BookingForm from "../components/BookingForm";
import CardComponent from "../components/CardComponent";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const HomePage = () => {
  const { t } = useTranslation();
  const [locations, setLocations] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchLocations(searchTerm, inputSearch);
  }, [searchTerm, inputSearch]);

  const fetchLocations = async (param1, param2) => {
    try {
      const response = await fetch(
        `http://localhost:3001/search/locations?name=${param1}&workplace?name=${param2}`
      );
      const data = await response.json();
      setLocations(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearchTermChange = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <Header onSearchTermChange={handleSearchTermChange} />
      <div className=" md:flex justify-between my-4 block">
        <div className="md:flex items-center block">
          <h1 className="text-[28px] font-medium mb-[14px] lg:mb-0">
            {t("Workplaces")}
          </h1>
          <Search
            className="md:pl-[112px] pl-0 w-[234px] md:w-full"
            placeholder="Search space"
            value={inputSearch}
            onChange={(e) => {
              setInputSearch(e.target.value);
            }}
          />
        </div>
        <div className="flex gap-4 items-center text-[15px] mt-[15px] md:mt-0 xs:hidden sm:flex">
          <a
            className="border-2 px-[10px] py-[5px] hover:bg-[#d0d0d0]"
            href="#"
          >
            <CalendarOutlined className="pr-[4px]" />
            Month View
          </a>
          <a className="border-2 px-[10px] py-[5px] flex bg-[#d0d0d0]" href="#">
            <img
              className="pr-[4px]"
              src="https://conext.asia/assets/Mothlybudget-a217f820.svg"
              alt=""
            />
            Lowest Price
          </a>
          <a
            className="border-2 px-[10px] py-[5px] hover:bg-[#d0d0d0]"
            href="#"
          >
            <UsergroupAddOutlined className="pr-[4px]" />
            Most Meet Up
          </a>
        </div>
      </div>

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

      {locations &&
        locations[0]?.Workplaces?.map((item) => (
          <CardComponent key={item.id} data={item} />
        ))}
      <Footer />
    </div>
  );
};

export default HomePage;

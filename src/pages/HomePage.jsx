import { CalendarOutlined, UsergroupAddOutlined } from "@ant-design/icons";
import Search from "antd/es/input/Search";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import CardComponent from "../components/CardComponent";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Listing from "./listing";

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

  return (
    <div>
      <Header onSearchTermChange={handleSearchTermChange} />
      <div className=" md:flex justify-between my-4 block md:container md:mx-auto px-5">
        <div className="md:flex items-center block">
          <h1 className="text-[28px] w-full font-medium mb-[14px] lg:mb-0">
            {t("Workplaces")}
          </h1>
          <Search
            className="md:pl-[50px] pl-0 w-[234px] md:w-full pt-[3px] pb-[4px]"
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
            {t("MonthView")}
          </a>
          <a className="border-2 px-[10px] py-[5px] flex bg-[#d0d0d0]" href="#">
            <img
              className="pr-[4px]"
              src="https://conext.asia/assets/Mothlybudget-a217f820.svg"
              alt=""
            />
            {t("LowestPrice")}
          </a>
          <a
            className="border-2 px-[10px] py-[5px] hover:bg-[#d0d0d0]"
            href="#"
          >
            <UsergroupAddOutlined className="pr-[4px]" />
            {t("MostMeetUp")}
          </a>
        </div>
      </div>
      <div className="flex justify-between md:container md:mx-auto px-5 pb-[14px] mb-5">
        <div className="md:w-1/2 w-full md:overflow-y-auto overflow-y-hidden md:pr-[10px] pr-0 mr-[-12px] md:h-[700px] h-full">
          {locations &&
            locations[0]?.Workplaces?.map((item) => (
              <CardComponent key={item.id} data={item} />
            ))}
        </div>
        <div className="w-1/2 pl-[8px] md:block hidden">
          {locations && locations[0]?.Workplaces ? (
            <Listing data={locations[0]} />
          ) : (
            ""
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;

/* eslint-disable react/prop-types */
import { Col, Row } from "antd";
import "./Card.scss";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SignUp from "./Authen/SignUp";
import SignIn from "./Authen/SignIn";
import BookingFormBtn from "./BookingFormBtn";
import WorkplaceModal from "./WorkplaceModal";

const CardComponent = ({ data }) => {
  const [signInVisible, setSignInVisible] = useState(false);
  const [signUpVisible, setSignUpVisible] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isLogin] = localStorage.getItem("isLogin");
  console.log(isLogin);
  const navigate = useNavigate();
  const [selectedWorkplace, setSelectedWorkplace] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = (workplace) => {
    setModalIsOpen(true);
    setSelectedWorkplace(workplace);
  };

  const closeModal = () => {
    // setSelectedWorkplace(false);
    setModalIsOpen(false);
  };

  return (
    <>
      <Row className="mb-5 mt-5 flex">
        <Col
          span={12}
          className="sm:flex min-w-full md:min-w-0 block gap-8 rounded-md shadow-lg px-5 "
        >
          <div className="w-full overflow-hidden">
            <img
              className="block h-full w-full transition-transform duration-500 transform hover:scale-110 rounded-md "
              src={
                data?.url ||
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpKKVwj0K0pO7tkJERpFvOpCcb9kLjYzynm9SoZlvn6Q&s"
              }
              alt="card-image"
            />
          </div>
          <div className="py-[20px] w-full">
            <div>
              <h3 className="text-[20px] font-semibold ">{data?.name}</h3>
              <p className="mb-4 text-base">{data.address}</p>
              <p className="text-red-600 line-through text-base">
                70,000 vnd/day
              </p>
              <p className="mb-[15px] text-base">{data.price} vnd/day</p>
            </div>
            <div className="flex justify-between items-center">
              {isLogin === "t" ? (
                <BookingFormBtn onClick={openModal} workplace={data} />
              ) : (
                <button
                  onClick={() => {
                    setVisible(true);
                    setSignInVisible(true);
                  }}
                  className="relative btn-shadow font-medium text-black px-[18px] py-[12px] bg-[#fed702] rounded transition-transform duration-300 hover:translate-y-[-5px] group"
                >
                  BOOK A SEAT
                </button>
              )}
              {visible ? (
                <SignIn
                  visible={signInVisible}
                  onClose={() => setSignInVisible(false)}
                  onSignUp={() => setSignUpVisible(true)}
                  setVisible={setVisible}
                />
              ) : (
                <SignUp
                  visible={signUpVisible}
                  onClose={() => setSignUpVisible(false)}
                  onSignIn={() => setSignInVisible(true)}
                  setVisible={setVisible}
                />
              )}
              <a
                className="text-[#1890ff] hover:text-[#b6deff]"
                onClick={() => navigate(`/detail/${data.name}`)}
              >
                See more
              </a>
            </div>
          </div>
        </Col>
      </Row>
      <WorkplaceModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        selectedWorkplace={selectedWorkplace}
      />
    </>
  );
};

export default CardComponent;

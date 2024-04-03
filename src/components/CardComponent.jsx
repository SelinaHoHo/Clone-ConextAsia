/* eslint-disable react/prop-types */

import { Col, Row } from "antd";
import "./Card.scss";

const CardComponent = ({ data }) => {
  return (
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
            <button className="relative btn-shadow font-medium text-black px-[18px] py-[12px] bg-[#fed702] rounded transition-transform duration-300 hover:translate-y-[-5px] group">
              BOOK A SEAT
            </button>
            <a className="text-[#1890ff] hover:text-[#b6deff]" href="/about">
              See more
            </a>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default CardComponent;

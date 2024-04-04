import React from "react";

const BookingFormBtn = ({ onClick, workplace }) => {
  return (
    <div>
      <button
        onClick={() => onClick(workplace)}
        className="relative btn-shadow font-medium text-black px-[18px] py-[12px] bg-[#fed702] rounded transition-transform duration-300 hover:translate-y-[-5px] group uppercase"
      >
        Book A SEAT
      </button>
    </div>
  );
};

export default BookingFormBtn;

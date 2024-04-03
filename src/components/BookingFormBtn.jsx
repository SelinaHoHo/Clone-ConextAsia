import React from "react";

const BookingFormBtn = ({ onClick, workplace }) => {
  return (
    <div>
      <button
        onClick={() => onClick(workplace)}
        className="p-4 bg-[#fed702] font-semibold uppercase color-[#171c32] rounded  transform hover:-translate-y-1 transition duration-300 hover:shadow-bottom"
      >
        Book A SEAT
      </button>
    </div>
  );
};

export default BookingFormBtn;

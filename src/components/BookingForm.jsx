import { DatePicker, Select } from "antd";
import "antd/dist/antd";
import { Col, Input, Row } from "antd/lib/index";
import moment from "moment";
import React, { useRef, useState } from "react";
import { FaRegCalendar, FaUser } from "react-icons/fa";
import MoMoLogo from "../assets/MoMo_Logo.png";
import Cash from "../assets/cash-payment.png";

const BookingForm = ({ selectedWorkplace }) => {
  const [selectedOption, setSelectedOption] = useState("daily");

  const [customerCount, setCustomerCount] = useState(1);

  const [selectedDate, setSelectedDate] = useState(null);

  const [selectedDateOut, setSelectedDateOut] = useState(null);

  // valdateInput
  const [fullName, setFullName] = useState("");
  const [fullNameError, setFullNameError] = useState(true);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState(true);
  const [success, setSuccess] = useState(false);

  const validateFullName = (value) => {
    if (!value.trim()) {
      setFullNameError("Full name is required");
    } else {
      setFullNameError("");
    }
  };

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!value.trim()) {
      setEmailError("Email is required");
    } else if (!emailRegex.test(value)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const validatePhoneNumber = (value) => {
    const phoneRegex = /^\d{10}$/;

    if (!value.trim()) {
      setPhoneNumberError("Phone number is required");
    } else if (!phoneRegex.test(value)) {
      setPhoneNumberError("Please enter a valid 10-digit phone number");
    } else {
      setPhoneNumberError("");
    }
  };

  const handleFullNameChange = (e) => {
    const value = e.target.value;
    setFullName(value);
    validateFullName(value);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value);
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    setPhoneNumber(value);
    validatePhoneNumber(value);
    console.log(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    validateFullName(fullName);

    validateEmail(email);

    validatePhoneNumber(phoneNumber);

    if (!phoneNumberError && !fullNameError && !emailError) {
      setSuccess(true);
    }
  };

  const handleDateChange = (date, dateString) => {
    setSelectedDate(dateString);
  };

  const handleDateOutChange = (date, dateString) => {
    setSelectedDateOut(dateString);
  };

  const handleCustomerChange = (e) => {
    setCustomerCount(parseInt(e.target.value));
  };

  const [monthCount, setMonthCount] = useState(1);

  const handleMonthChange = (e) => {
    const newMonthCount = parseInt(e.target.value, 10); // Parse value to integer
    setMonthCount(newMonthCount);
  };

  const divRef = useRef(null);

  const handleInput = (e) => {
    divRef.current.textContent = e.target.textContent;
  };

  const startDate = selectedDate ? moment(selectedDate) : moment();
  const endDate = selectedDateOut
    ? moment(selectedDateOut)
    : moment().add(1, "days");

  const dateRange = endDate.diff(startDate, "days") + 1;

  function formatVND(amount) {
    return amount.toLocaleString("vi-VN");
  }

  const [paymentMethod, setPaymentMethod] = useState("");

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleBackButtonClick = () => {
    setSuccess(false);
  };

  return (
    <div className="overflow-auto">
      <Row className="px-2 py-4">
        {/* LeftForm */}
        <Col xs={24} sm={24} md={24} lg={12}>
          {/* header */}
          <h1 className="font-bold text-2xl mb-4">
            Complete your Day Pass Booking
          </h1>
          {!success ? (
            <form onSubmit={handleSubmit}>
              {/* Input */}
              <Col xs={24} sm={24} md={24} lg={24}>
                <Row gutter={[16, 16]}>
                  <Col xs={24} sm={24} md={12} lg={12} className="mb-4">
                    <div className="lg:mr-10">
                      <div className="pb-2">
                        <label htmlFor="fullName">
                          <span className="font-bold">
                            Full Name <span style={{ color: "red" }}>*</span>
                          </span>
                        </label>
                      </div>
                      <Input
                        type="text"
                        id="fullName"
                        placeholder="Name"
                        className="h-[50px] p-2"
                        value={fullName}
                        onChange={handleFullNameChange}
                      />
                      {fullNameError && (
                        <div style={{ color: "red" }}>{fullNameError}</div>
                      )}
                    </div>
                  </Col>

                  <Col xs={24} sm={24} md={12} lg={12} className="mb-4">
                    <div className="lg:mr-10">
                      <div className="pb-2">
                        <label htmlFor="email">
                          <span className="font-bold">
                            Email <span style={{ color: "red" }}>*</span>
                          </span>
                        </label>
                      </div>
                      <Input
                        placeholder="Email"
                        className="h-[50px] p-2"
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                      />
                      {emailError && (
                        <div style={{ color: "red" }}>{emailError}</div>
                      )}
                    </div>
                  </Col>

                  <Col xs={24} sm={24} md={12} lg={12} className="mb-4">
                    <div className="lg:mr-10">
                      <div className="pb-2">
                        <span className="font-bold">Company Name</span>
                      </div>
                      <Input
                        placeholder="Company Name"
                        className="h-[50px] p-2"
                      />
                    </div>
                  </Col>

                  <Col xs={24} sm={24} md={12} lg={12} className="mb-4">
                    <div className="lg:mr-10">
                      <div className="pb-2">
                        <label htmlFor="phoneNumber">
                          Phone Number <span style={{ color: "red" }}>*</span>
                        </label>
                      </div>
                      <Input
                        placeholder="Phone"
                        className="h-[50px] p-2"
                        type="text"
                        id="phoneNumber"
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                      />
                      {phoneNumberError && (
                        <div style={{ color: "red" }}>{phoneNumberError}</div>
                      )}
                    </div>
                  </Col>
                </Row>
              </Col>

              {/* type */}
              <div className="py-4">
                <span className="font-bold">
                  Type <span style={{ color: "red" }}>*</span>
                </span>
              </div>

              {/* checkbox */}
              <Row>
                <Col span={12}>
                  <div className="lg:mr-10">
                    <input
                      type="radio"
                      id="daily"
                      name="daily"
                      defaultChecked
                      onChange={(e) => {
                        if (e.target.checked) {
                          document.getElementById("monthly").checked = false;
                          setSelectedOption("daily");
                        }
                      }}
                    />
                    <label htmlFor="daily" className="mx-2">
                      Daily
                    </label>
                  </div>
                </Col>
                <Col span={12}>
                  <div className="lg:mr-10 ">
                    <input
                      type="radio"
                      id="monthly"
                      name="monthly"
                      onChange={(e) => {
                        if (e.target.checked) {
                          document.getElementById("daily").checked = false;
                          setSelectedOption("monthly");
                        }
                      }}
                    />
                    <label htmlFor="monthly" className="mx-2">
                      Monthly
                    </label>
                  </div>
                </Col>
              </Row>

              {/* form */}
              {selectedOption === "daily" && (
                <form id="dailyForm">
                  <Col xs={24} sm={24} md={24} lg={24} className="my-4">
                    <Row gutter={[16, 16]}>
                      <Col xs={24} sm={24} md={12} lg={12} className="mb-4">
                        <div className="lg:mr-10">
                          <div className="pb-2">
                            <span className="font-bold">
                              Check-in date{" "}
                              <span style={{ color: "red" }}>*</span>
                            </span>
                          </div>
                          <DatePicker
                            className="h-[50px] p-2 w-full"
                            defaultValue={moment()}
                            onChange={handleDateChange}
                            format="MM/DD/YYYY"
                          />
                        </div>
                      </Col>
                      <Col xs={24} sm={24} md={12} lg={12} className="mb-4">
                        <div className="lg:mr-10">
                          <div className="pb-2">
                            <span className="font-bold">
                              Check-out date{" "}
                              <span style={{ color: "red" }}>*</span>
                            </span>
                          </div>
                          <DatePicker
                            className="h-[50px] p-2 w-full"
                            defaultValue={moment().add(1, "days")}
                            onChange={handleDateOutChange}
                            format="MM/DD/YYYY"
                          />
                        </div>
                      </Col>
                      <Col xs={24} sm={24} md={12} lg={12} className="mb-4">
                        <div className="lg:mr-10">
                          <div className="pb-2">
                            <span className="font-bold">
                              Arrival Time{" "}
                              <span style={{ color: "red" }}>*</span>
                            </span>
                          </div>
                          <Select
                            defaultValue="08:00 - 9:00"
                            className="h-[50px] w-full"
                          >
                            <Select.Option value="08:00 - 9:00">
                              08:00 - 09:00
                            </Select.Option>
                            <Select.Option value="09:00 - 10:00">
                              09:00 - 10:00
                            </Select.Option>
                            <Select.Option value="10:00 - 11:00">
                              10:00 - 11:00
                            </Select.Option>
                            <Select.Option value="11:00 - 12:00">
                              11:00 - 12:00
                            </Select.Option>
                            <Select.Option value="12:00 - 13:00">
                              12:00 - 13:00
                            </Select.Option>
                            <Select.Option value="13:00 - 14:00">
                              13:00 - 14:00
                            </Select.Option>
                            <Select.Option value="14:00 - 15:00">
                              14:00 - 15:00
                            </Select.Option>
                            <Select.Option value="15:00 - 16:00">
                              15:00 - 16:00
                            </Select.Option>
                            <Select.Option value="16:00 - 17:00">
                              16:00 - 17:00
                            </Select.Option>
                          </Select>
                        </div>
                      </Col>
                      <Col xs={24} sm={24} md={12} lg={12} className="mb-4">
                        <div className="lg:mr-10">
                          <div className="pb-2">
                            <span className="font-bold">
                              Number of Customer{" "}
                              <span style={{ color: "red" }}>*</span>
                            </span>
                          </div>
                          <Input
                            className="h-[50px] p-2"
                            type="number"
                            min="1"
                            value={customerCount}
                            onChange={handleCustomerChange}
                          />
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </form>
              )}

              {selectedOption === "monthly" && (
                <form id="monthlyForm">
                  <Col xs={24} sm={24} md={24} lg={24} className="my-4">
                    <Row gutter={[16, 16]}>
                      <Col xs={24} sm={24} md={12} lg={12} className="mb-4">
                        <div className="lg:mr-10">
                          <div className="pb-2">
                            <span className="font-bold">
                              Number of Months
                              <span style={{ color: "red" }}>*</span>
                            </span>
                          </div>
                          <Input
                            className="h-[50px] p-2"
                            type="number"
                            min="1"
                            value={monthCount}
                            onChange={handleMonthChange}
                          />
                        </div>
                      </Col>
                      <Col xs={24} sm={24} md={12} lg={12} className="mb-4">
                        <div className="lg:mr-10">
                          <div className="pb-2">
                            <span className="font-bold">
                              Check-in date{" "}
                              <span style={{ color: "red" }}>*</span>
                            </span>
                          </div>
                          <DatePicker
                            className="h-[50px] p-2 w-full"
                            onChange={handleDateChange}
                            defaultValue={moment()}
                            format="MM/DD/YYYY"
                          />
                        </div>
                      </Col>
                      <Col xs={24} sm={24} md={12} lg={12} className="mb-4">
                        <div className="lg:mr-10">
                          <div className="pb-2">
                            <span className="font-bold">
                              Arrival Time{" "}
                              <span style={{ color: "red" }}>*</span>
                            </span>
                          </div>
                          <Select
                            defaultValue="08:00 - 9:00"
                            className="h-[50px] w-full"
                          >
                            <Select.Option value="08:00 - 9:00">
                              08:00 - 09:00
                            </Select.Option>
                            <Select.Option value="09:00 - 10:00">
                              09:00 - 10:00
                            </Select.Option>
                            <Select.Option value="10:00 - 11:00">
                              10:00 - 11:00
                            </Select.Option>
                            <Select.Option value="11:00 - 12:00">
                              11:00 - 12:00
                            </Select.Option>
                            <Select.Option value="12:00 - 13:00">
                              12:00 - 13:00
                            </Select.Option>
                            <Select.Option value="13:00 - 14:00">
                              13:00 - 14:00
                            </Select.Option>
                            <Select.Option value="14:00 - 15:00">
                              14:00 - 15:00
                            </Select.Option>
                            <Select.Option value="15:00 - 16:00">
                              15:00 - 16:00
                            </Select.Option>
                            <Select.Option value="16:00 - 17:00">
                              16:00 - 17:00
                            </Select.Option>
                          </Select>
                        </div>
                      </Col>
                      <Col xs={24} sm={24} md={12} lg={12} className="mb-4">
                        <div className="lg:mr-10">
                          <div className="pb-2">
                            <span className="font-bold">
                              Number of Customer{" "}
                              <span style={{ color: "red" }}>*</span>
                            </span>
                          </div>
                          <Input
                            className="h-[50px] p-2"
                            type="number"
                            min="1"
                            value={customerCount}
                            onChange={handleCustomerChange}
                          />
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </form>
              )}

              {/* Message */}
              <Col span={24}>
                <div className="lg:mr-10">
                  <div className="pb-2">
                    <span className="font-bold">
                      Message of additional requirements
                    </span>
                  </div>
                  <div
                    ref={divRef}
                    contentEditable="true"
                    className="w-full h-32 border border-gray-300 overflow-y-auto p-4 rounded-md"
                    onInput={handleInput}
                  ></div>
                </div>
              </Col>

              {/* BTN */}
              <button
                className="p-4 bg-[#fed702] font-semibold uppercase color-[#171c32] rounded  transform hover:-translate-y-1 transition duration-300 hover:shadow-bottom my-8 "
                type="submit"
              >
                continue
              </button>
            </form>
          ) : (
            <Col xs={24} sm={24} md={24} lg={24}>
              <Row gutter={[16, 16]}>
                <Col span={24} className="mb-4">
                  <div className="lg:mr-10">
                    <div className="mt-8 mb-4">
                      <div className="bg-[#f3f9fb] p-4 rounded-md">
                        <label
                          htmlFor="cash"
                          className="flex items-center border p-2 rounded-md gap-5"
                        >
                          <input
                            type="radio"
                            id="cash"
                            name="paymentMethod"
                            value="cash"
                            checked={paymentMethod === "cash"}
                            onChange={handlePaymentMethodChange}
                          />

                          <div>
                            <img
                              src={Cash}
                              alt="MoMo Logo"
                              className="w-[40px] h-[40px]"
                            />
                          </div>
                          <div>Payment by Direct Transfer</div>
                        </label>
                      </div>
                    </div>
                  </div>
                </Col>

                <Col span={24} className="mb-4">
                  <div className="lg:mr-10">
                    <div className="mb-8">
                      <div className="bg-[#f3f9fb] p-4 rounded-md">
                        <label
                          htmlFor="momo"
                          className="flex items-center border p-2 rounded-md gap-5"
                        >
                          <input
                            type="radio"
                            id="momo"
                            name="paymentMethod"
                            value="momo"
                            checked={paymentMethod === "momo"}
                            onChange={handlePaymentMethodChange}
                          />

                          <div>
                            <img
                              src={MoMoLogo}
                              alt="MoMo Logo"
                              className="w-[40px] h-[40px]"
                            />
                          </div>
                          <div>Payment by MoMo</div>
                        </label>
                      </div>
                    </div>
                  </div>
                </Col>

                <div className="flex items-center gap-5">
                  <button
                    className="uppercase border border-[#fed702] px-4 py-2 font-semibold color-[#171c32] hover:-translate-y-1 transition duration-300 hover:bg-[#fed702]"
                    onClick={handleBackButtonClick}
                  >
                    back
                  </button>
                  <button className="uppercase  border px-4 py-2 bg-[#fed702] font-semibold color-[#171c32] hover:-translate-y-1 transition duration-300">
                    payment
                  </button>
                </div>
              </Row>
            </Col>
          )}
        </Col>

        {/* RightForm */}
        <Col xs={24} sm={24} md={24} lg={12}>
          <div className="lg:ml-10">
            <Col span={24}>
              <div className=" bg-[#f8f9fa] p-4">
                <div className="lg:flex">
                  <div className="lg:w-2/5 overflow-hidden flex items-center justify-center">
                    <img
                      src={selectedWorkplace.url}
                      className="hover:scale-110 transition-transform duration-500 object-cover lg:h-[100px] w-full"
                    />
                  </div>
                  <div className="lg:w-3/5 ml-4">
                    <h1 className="color-[#171c32] text-xl font-semibold">
                      {selectedWorkplace.name}
                    </h1>
                    <p className="text-base">{selectedWorkplace.address}</p>
                  </div>
                </div>
              </div>
            </Col>

            <Col span={24} className="my-8">
              <div className=" bg-[#f8f9fa] p-4">
                {/* Count customer */}
                <div className="flex items-center my-4">
                  <FaUser style={{ color: "#c9ac17" }} />
                  <p className="ml-8">{customerCount} customer</p>
                </div>

                {/* Date */}
                <div className="flex items-center my-4">
                  <FaRegCalendar style={{ color: "#c9ac17" }} />
                  <p className="ml-8">
                    {selectedOption === "daily" &&
                      (selectedDate
                        ? moment(selectedDate).format("DD/MM/YYYY")
                        : moment().format("DD/MM/YYYY"))}{" "}
                    {selectedOption === "monthly" &&
                      (selectedDate
                        ? moment(selectedDate).format("DD/MM/YYYY")
                        : moment().format("DD/MM/YYYY"))}{" "}
                    -{" "}
                    {selectedOption === "daily" &&
                      (selectedDateOut
                        ? moment(selectedDateOut)
                            .add(1, "days")
                            .format("DD/MM/YYYY")
                        : moment().add(1, "days").format("DD/MM/YYYY"))}
                    {selectedOption === "monthly" &&
                      (selectedDate
                        ? moment(selectedDate)
                            .add(monthCount, "months")
                            .format("DD/MM/YYYY")
                        : moment()
                            .add(monthCount, "months")
                            .format("DD/MM/YYYY"))}
                  </p>
                </div>

                <hr />

                <div className="flex items-center justify-between mb-20">
                  <div>
                    {customerCount} seat x {formatVND(selectedWorkplace.price)}{" "}
                    VND x {""}
                    {selectedOption === "daily" &&
                      dateRange + " " + "days"}{" "}
                    {selectedOption === "monthly" &&
                      monthCount + " " + "months"}
                  </div>
                  <div>
                    {selectedOption === "daily" &&
                      formatVND(
                        parseInt(customerCount) *
                          parseInt(selectedWorkplace.price) *
                          parseInt(dateRange)
                      )}{" "}
                    {selectedOption === "monthly" &&
                      formatVND(
                        parseInt(customerCount) *
                          parseInt(selectedWorkplace.price) *
                          parseInt(monthCount * 30)
                      )}
                    VND
                  </div>
                </div>

                <hr />

                <div className="flex items-center justify-between mb-4">
                  <div>Deposit</div>
                  <div>600.000 VND</div>
                </div>

                <hr />

                <div className="flex items-center justify-between mb-4 font-bold">
                  <div>Remaining amount</div>
                  <div>
                    {selectedOption === "daily" &&
                      formatVND(
                        parseInt(customerCount) *
                          parseInt(selectedWorkplace.price) *
                          parseInt(dateRange)
                      )}{" "}
                    VND
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4 font-bold text-[#fed702]">
                  <div>Payable now</div>
                  <div>600.000 VND</div>
                </div>
              </div>
            </Col>

            <Col span={24}>
              <p className="text-[#6c757d]">
                The amount to be paid is now a deposit for your reservation and
                will be refunded if your booking is not successful! The
                remaining amount will be paid for coworking when receiving your
                seat.
              </p>
            </Col>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default BookingForm;

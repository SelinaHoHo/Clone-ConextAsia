import { DatePicker, Select } from "antd";
import "antd/dist/antd";
import { Col, Input, Row } from "antd/lib/index";
import moment from "moment";
import React, { useRef, useState } from "react";

const BookingForm = () => {
  const [selectedOption, setSelectedOption] = useState("daily");

  const [customerCount, setCustomerCount] = useState(1);

  const handleCustomerChange = (e) => {
    setCustomerCount(parseInt(e.target.value));
  };

  const [monthCount, setMonthCount] = useState(1);

  const handleMonthChange = (e) => {
    setMonthCount(parseInt(e.target.value));
  };

  const divRef = useRef(null);

  const handleInput = (e) => {
    divRef.current.textContent = e.target.textContent;
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

          {/* Input */}
          <Col xs={24} sm={24} md={24} lg={24}>
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={24} md={12} lg={12} className="mb-4">
                <div className="lg:mr-10">
                  <div className="pb-2">
                    <span className="font-bold">
                      Full Name <span style={{ color: "red" }}>*</span>
                    </span>
                  </div>
                  <Input placeholder="Name" className="h-[50px] p-2" />
                </div>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} className="mb-4">
                <div className="lg:mr-10">
                  <div className="pb-2">
                    <span className="font-bold">
                      Email <span style={{ color: "red" }}>*</span>
                    </span>
                  </div>
                  <Input placeholder="Email" className="h-[50px] p-2" />
                </div>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} className="mb-4">
                <div className="lg:mr-10">
                  <div className="pb-2">
                    <span className="font-bold">Company Name</span>
                  </div>
                  <Input placeholder="Company Name" className="h-[50px] p-2" />
                </div>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} className="mb-4">
                <div className="lg:mr-10">
                  <div className="pb-2">
                    <span className="font-bold">
                      Phone Number <span style={{ color: "red" }}>*</span>
                    </span>
                  </div>
                  <Input placeholder="Phone" className="h-[50px] p-2" />
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
                          Check-in date <span style={{ color: "red" }}>*</span>
                        </span>
                      </div>
                      <DatePicker
                        className="h-[50px] p-2 w-full"
                        defaultValue={moment()}
                        format="MM/DD/YYYY"
                      />
                    </div>
                  </Col>
                  <Col xs={24} sm={24} md={12} lg={12} className="mb-4">
                    <div className="lg:mr-10">
                      <div className="pb-2">
                        <span className="font-bold">
                          Check-out date <span style={{ color: "red" }}>*</span>
                        </span>
                      </div>
                      <DatePicker
                        className="h-[50px] p-2 w-full"
                        defaultValue={moment().add(1, "days")}
                        format="MM/DD/YYYY"
                      />
                    </div>
                  </Col>
                  <Col xs={24} sm={24} md={12} lg={12} className="mb-4">
                    <div className="lg:mr-10">
                      <div className="pb-2">
                        <span className="font-bold">
                          Arrival Time <span style={{ color: "red" }}>*</span>
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
                          Check-in date <span style={{ color: "red" }}>*</span>
                        </span>
                      </div>
                      <DatePicker
                        className="h-[50px] p-2 w-full"
                        defaultValue={moment()}
                        format="MM/DD/YYYY"
                      />
                    </div>
                  </Col>
                  <Col xs={24} sm={24} md={12} lg={12} className="mb-4">
                    <div className="lg:mr-10">
                      <div className="pb-2">
                        <span className="font-bold">
                          Arrival Time <span style={{ color: "red" }}>*</span>
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
          <button className="p-4 bg-[#fed702] font-semibold uppercase color-[#171c32] rounded  transform hover:-translate-y-1 transition duration-300 hover:shadow-bottom my-8">
            continue
          </button>
        </Col>

        {/* RightForm */}
        <Col xs={24} sm={24} md={24} lg={12}>
          b
        </Col>
      </Row>
    </div>
  );
};

export default BookingForm;

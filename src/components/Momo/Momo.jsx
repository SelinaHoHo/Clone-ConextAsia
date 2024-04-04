import axios from "axios";
import { useState } from "react";

const Momo = () => {
  const [amountNumber, setAmountNumber] = useState(0);

  // const callPayment = async (number) => {
  //   const data = await axios.post('http://localhost:3001/order', {amountNumber: number})
  //   console.log(data);
  //   return data.json();
  // }
  const callPayment = async (number) => {
    try {
      const response = await axios.post('http://localhost:3001/order', { amountNumber: number });
      const payUrl = response.data.payUrl;
      console.log(payUrl);
      window.location.href = payUrl; // Chuyển hướng sang payUrl
    } catch (error) {
      console.error("Error while calling payment:", error);
    }
  };  

  const buttonSubmit = () =>{
    callPayment(amountNumber)
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border border-gray-300 shadow-md rounded-md mb-11">
      <h1 className="text-2xl font-bold mb-4">Trang thanh toán tạm thời</h1>
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2" htmlFor="amount">
          Số tiền (VND):
        </label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          type="number"
          id="amount"
          placeholder="Nhập số tiền"
          value={amountNumber}
          onChange={(e) => setAmountNumber(e.target.value)}
        />
      </div>
      <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"onClick={buttonSubmit} >
        Thanh toán
      </button>
    </div>
  );
};

export default Momo;

import React, { useState } from "react";

const PaymentForm = () => {
  const [paymentData, setPaymentData] = useState({
    orderId: "ORD-1123",
    paidAmount: "1,500",
    supplierName: "ABC ",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentData({
      ...paymentData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", paymentData);
  };

  return (
    <div className="w-full p-4">
      <h2 className="text-2xl font-semibold mb-4">Make Payment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="orderId" className="block text-gray-700">
            Order ID:
          </label>
          <input
            type="text"
            id="orderId"
            name="orderId"
            value={paymentData.orderId}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label htmlFor="paidAmount" className="block text-gray-700">
            Paid Amount:
          </label>
          <input
            type="text"
            id="paidAmount"
            name="paidAmount"
            value={paymentData.paidAmount}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label htmlFor="paidDate" className="block text-gray-700">
            Paid Date:
          </label>
          <input
            type="date"
            id="paidDate"
            name="paidDate"
            value={paymentData.paidDate}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label htmlFor="supplierName" className="block text-gray-700">
            Supplier Name:
          </label>
          <input
            type="text"
            id="supplierName"
            name="supplierName"
            value={paymentData.supplierName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600"
        >
          Make Payment
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;

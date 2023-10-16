import { useParams } from "react-router-dom";
import StaffSidebar from "@/dashboards/staff/components/page-title.jsx";
import PageTitle from "@/dashboards/staff/components/page-title.jsx";
import { useState } from "react";
import { Link } from "react-router-dom";
import PaymentForm from "./payment-pay.jsx";

const payment = {
  id: 8,
  paidDate: "2023-09-23",
  paidAmount: 1000.0,
  paidTo: {
    userId: 6,
    supplierId: 1,
    name: "Shabina",
    location: "keaglle",
    email: "shabina.supplier@gmail.com",
  },
  paidBy: {
    userId: 1,
    employeeId: "7",
    email: "shabina.staff@gmail.com",
    firstName: "Shabina",
    lastName: "staff",
    gender: "F",
    dateOfBirth: null,
    userRole: "STAFF",
  },
  invoices: [
    {
      id: 1,
      raisedDate: "2023-10-16T18:18:34",
      raisedBy: {
        userId: 6,
        supplierId: 1,
        name: "Shabina",
        location: "keaglle",
        email: "shabina.supplier@gmail.com",
      },
      totalAmount: 500.0,
      delivery: {
        id: 1,
        deliveredDate: "2023-10-18T10:03:05",
        deliveredSite: "Kegalle",
        collectedBy: {
          userId: 7,
          employeeId: "9",
          email: "shabina.site@gmail.com",
          firstName: "Shabina",
          lastName: "site",
          gender: "F",
          dateOfBirth: null,
          userRole: "SITE_MANAGER",
        },
        isDeliveredInOnce: false,
        amount: 500.0,
        deliveredItemList: null,
        suppliedBy: {
          userId: 6,
          supplierId: 1,
          name: "Shabina",
          location: "keaglle",
          email: "shabina.supplier@gmail.com",
        },
      },
    },
    {
      id: 2,
      raisedDate: "2023-10-16T19:21:44",
      raisedBy: {
        userId: 6,
        supplierId: 1,
        name: "Shabina",
        location: "keaglle",
        email: "shabina.supplier@gmail.com",
      },
      totalAmount: 500.0,
      delivery: {
        id: 2,
        deliveredDate: "2023-10-18T10:03:05",
        deliveredSite: "Kegalle",
        collectedBy: {
          userId: 7,
          employeeId: "9",
          email: "shabina.site@gmail.com",
          firstName: "Shabina",
          lastName: "site",
          gender: "F",
          dateOfBirth: null,
          userRole: "SITE_MANAGER",
        },
        isDeliveredInOnce: false,
        amount: 500.0,
        deliveredItemList: null,
        suppliedBy: {
          userId: 6,
          supplierId: 1,
          name: "Shabina",
          location: "keaglle",
          email: "shabina.supplier@gmail.com",
        },
      },
    },
  ],
};

const StaffPaymentView = () => {
  const { id } = useParams();
  const [invoices, setInvoices] = useState(payment.invoices);
  const [paidAmount, setPaidAmount] = useState(payment.paidAmount);
  const [paidBy, setPaidBy] = useState(payment.paidBy);
  const [paidTo, setPaidTo] = useState(payment.paidTo);
  const [paymentId, setPaymentId] = useState(payment.id);

  return (
    <div className="flex flex-row w-full justify-stretch m-4 rounded-xl">
      <div className="flex flex-col w-2/3 justify-around">
        {invoices.map((invoice) => (
          <div
            key={invoice.id}
            className="flex flex-row justify-between p-4 rounded-xl border-2 m-4 border-zinc-200"
          >
            <div className="border-2 p-4 rounded-xl">
              <h3>Deliveries</h3>
              <p>Invoice ID: {invoice.id}</p>
              <p>Raised Date: {invoice.raisedDate}</p>
              <p>Raised By: {invoice.raisedBy.name}</p>
              <p>Total Amount: {invoice.totalAmount}</p>
              <p>Delivery Date: {invoice.delivery.deliveredDate}</p>
              <p>Delivered Site: {invoice.delivery.deliveredSite}</p>
              <p>
                Collected By: {invoice.delivery.collectedBy.firstName}{" "}
                {invoice.delivery.collectedBy.lastName}
              </p>
              <p>
                Is Delivered in Once:{" "}
                {invoice.delivery.isDeliveredInOnce ? "Yes" : "No"}
              </p>
              <p>Delivery Amount: {invoice.delivery.amount}</p>
            </div>
            <div className="border-2 p-4 rounded-xl">
              <h3>Invoices</h3>
              <p>Invoice ID: {invoice.id}</p>
              <p>Raised Date: {invoice.raisedDate}</p>
              <p>Raised By: {invoice.raisedBy.name}</p>
              <p>Total Amount: {invoice.totalAmount}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-1/3 flex flex-col justify-between pb-8">
        <PaymentForm />
      </div>
    </div>
  );
};

export default StaffPaymentView;

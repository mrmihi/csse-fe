import { useParams } from "react-router-dom";
import StaffSidebar from "./components/sidebar";
import PageTitle from "./components/page-title";
import { useState } from "react";
import { Link } from "react-router-dom";

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
    <>
      <div className="grid lg:grid-cols-6">
        <div>
          <StaffSidebar />
        </div>
        <div className="col-span-3 lg:col-span-5 lg:border-l mt-10 mr-10 pl-8">
          <div>
            <PageTitle title={"Payment details"} />

            <div className="flex flex-row w-full justify-stretch border-2 border-zinc-500 rounded-xl">
              <div className="flex flex-col w-2/3 justify-around">
                {invoices.map((invoice) => (
                  <div
                    key={invoice.id}
                    className="flex flex-row justify-between p-4 rounded-xl border-2 m-4 border-zinc-500"
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
                <div className="flex flex-col h-fit justify-between p-4 rounded-xl border-2 m-4 border-zinc-500">
                  <h3>Payment Details</h3>
                  <p>Paid Amount: {paidAmount}</p>
                  <p>
                    Paid By: {paidBy.firstName} {paidBy.lastName}
                  </p>
                  <p>Paid Date: {paidBy.paidDate}</p>
                  <p>Paid To: {paidTo.name}</p>
                </div>
                <div className="flex flex-col h-fit justify-between p-4 rounded-xl border-2 m-4 bg-zinc-500">
                  <p className="text-xl text-white">
                    <Link to={`/staff/payment`}>Close</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StaffPaymentView;

import { useEffect, useMemo, useState } from "react";
import { MaterialReactTable } from "material-react-table";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import PageTitle from "../page-title";
import PaymentStatsSection from "./payment-stats-section.jsx";
import {
  getAllOfMyPayment,
  getAllPayment,
} from "@/services/payment/payment.services.js";

const data = [
  {
    id: 1,
    paidAmount: "750 LKR",
    paidBy: {
      name: "Alice",
    },
    paidTo: {
      name: "XYZ Electronics",
    },
    paidOn: "2023-10-15",
  },
  {
    id: 2,
    paidAmount: "1,000 LKR",
    paidBy: {
      name: "Elon",
    },
    paidTo: {
      name: "ABC Hardware",
    },
    paidOn: "2023-09-23",
  },
  {
    id: 3,
    paidAmount: "1,500 LKR",
    paidBy: {
      name: "Eva",
    },
    paidTo: {
      name: "Tech Universe",
    },
    paidOn: "2023-09-28",
  },
  {
    id: 4,
    paidAmount: "900 LKR",
    paidBy: {
      name: "David",
    },
    paidTo: {
      name: "Hardware Haven",
    },
    paidOn: "2023-10-20",
  },
  {
    id: 5,
    paidAmount: "500 LKR",
    paidBy: {
      name: "Catherine",
    },
    paidTo: {
      name: "GigaTools",
    },
    paidOn: "2023-10-05",
  },
];

const PaymentAll = () => {
  const [allPayments, setAllPayments] = useState({});

  const fetchAllPayments = async () => {
    const payments = await getAllOfMyPayment();
    if (payments != null && payments.length > 0) {
      setAllPayments(payments);
    }
  };
  useEffect(() => {
    fetchAllPayments();
  }, []);

  const columns = useMemo(
    () => [
      {
        accessorKey: "paidAmount",
        header: "Paid Amount",
        size: 150,
      },
      {
        accessorKey: "paidBy.name",
        header: "Paid Staff",
        size: 150,
      },
      {
        accessorKey: "paidTo.name",
        header: "Supplier",
        size: 200,
      },
      {
        accessorKey: "paidOn",
        header: "Paid Date",
        size: 150,
      },
    ],
    [],
  );

  return (
    <>
      <PageTitle title={"Payment History"} />
      <PaymentStatsSection />
      <MaterialReactTable
        columns={columns}
        data={data}
        enableRowActions
        positionActionsColumn="last"
        renderRowActions={({ row }) => (
          <div
            style={{
              display: "flex",
              flexWrap: "nowrap",
              gap: "0.5rem",
            }}
          >
            <Link to={`/staff/payment/${row.original.id}`}>
              <Button className="bg-blue-600">View</Button>
            </Link>
          </div>
        )}
      />
    </>
  );
};

export default PaymentAll;

import { useMemo } from "react";
import { MaterialReactTable } from "material-react-table";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import PaymentStatsSection from "./payment-stats-section.jsx";
import PageTitle from "../page-title";

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
const PaymentPending = () => {
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
      <PageTitle title={"Pending Payments"} />
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
            <Link to={`/staff/requisition/${row.original.id}`}>
              <Button className="bg-green-600">View</Button>
            </Link>
          </div>
        )}
      />
      <Button className="float-left mt-2">Generate Income Report</Button>
    </>
  );
};

export default PaymentPending;

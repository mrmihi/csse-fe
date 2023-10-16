import { useMemo } from "react";
import { MaterialReactTable } from "material-react-table";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import PageTitle from "../page-title";
import OrderStatsSection from "./order-stats-section";

const data = [
  {
    id: 1,
    name: {
      firstName: "John",
      lastName: "Doe",
    },
    supplier: "XYZ Electronics",
    date: "2021 Jan 21",
    totalAmount: "LKR 250000",
  },
  {
    id: 2,
    name: {
      firstName: "Alice",
      lastName: "Smith",
    },
    supplier: "ABC Tech",
    date: "2022 Feb 15",
    totalAmount: "LKR 175000",
  },
  {
    id: 3,
    name: {
      firstName: "Bob",
      lastName: "Johnson",
    },
    supplier: "Tech Solutions",
    date: "2020 Dec 10",
    totalAmount: "LKR 120000",
  },
  {
    id: 4,
    name: {
      firstName: "Emily",
      lastName: "Davis",
    },
    supplier: "Gadget World",
    date: "2019 Nov 5",
    totalAmount: "LKR 310000",
  },
  {
    id: 5,
    name: {
      firstName: "Michael",
      lastName: "Wilson",
    },
    supplier: "ElectroMart",
    date: "2023 Mar 3",
    totalAmount: "LKR 98000",
  },
];

const RequisitionPendingOrder = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: "name.firstName",
        header: "First Name",
        size: 150,
      },
      {
        accessorKey: "name.lastName",
        header: "Last Name",
        size: 150,
      },
      {
        accessorKey: "supplier",
        header: "Supplier",
        size: 200,
      },
      {
        accessorKey: "date",
        header: "Date",
        size: 150,
      },
      {
        accessorKey: "totalAmount",
        header: "Total Amount",
        size: 150,
      },
    ],
    [],
  );

  return (
    <>
      <PageTitle title={"Pending Requisitions"} />
      <OrderStatsSection />
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
              <Button className="bg-blue-600">Review</Button>
            </Link>
          </div>
        )}
      />
    </>
  );
};

export default RequisitionPendingOrder;

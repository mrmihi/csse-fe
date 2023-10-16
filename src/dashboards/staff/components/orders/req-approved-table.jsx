import { useMemo } from "react";
import { MaterialReactTable } from "material-react-table";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import OrderStatsSection from "./order-stats-section";
import PageTitle from "../page-title";

const data = [
  {
    id: 1,
    name: {
      firstName: "John",
      lastName: "Doe",
    },
    address: "261 Erdman Ford",
    city: "East Daphne",
    state: "Kentucky",
  },
  {
    id: 2,
    name: {
      firstName: "Jane",
      lastName: "Doe",
    },
    address: "769 Dominic Grove",
    city: "Columbus",
    state: "Ohio",
  },
  {
    id: 3,
    name: {
      firstName: "Joe",
      lastName: "Doe",
    },
    address: "566 Brakus Inlet",
    city: "South Linda",
    state: "West Virginia",
  },
  {
    id: 4,
    name: {
      firstName: "Kevin",
      lastName: "Vandy",
    },
    address: "722 Emie Stream",
    city: "Lincoln",
    state: "Nebraska",
  },
  {
    id: 5,
    name: {
      firstName: "Joshua",
      lastName: "Rolluffs",
    },
    address: "32188 Larkin Turnpike",
    city: "Charleston",
    state: "South Carolina",
  },
];

const RequisitionApprovedOrder = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: "name.firstName", //access nested data with dot notation
        header: "First Name",
        size: 150,
      },
      {
        accessorKey: "name.lastName",
        header: "Last Name",
        size: 150,
      },
      {
        accessorKey: "address", //normal accessorKey
        header: "Address",
        size: 200,
      },
      {
        accessorKey: "city",
        header: "City",
        size: 150,
      },
      {
        accessorKey: "state",
        header: "State",
        size: 150,
      },
    ],
    [],
  );

  return (
    <>
      <PageTitle title={"Approved Requisitions"} />
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
              <Button className="bg-green-600">View</Button>
            </Link>
          </div>
        )}
      />
      <Button className="float-left mt-2">Generate Income Report</Button>
    </>
  );
};

export default RequisitionApprovedOrder;
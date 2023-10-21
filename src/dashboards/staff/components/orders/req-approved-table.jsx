import React, { useMemo, useState, useEffect } from "react";
import { MaterialReactTable } from "material-react-table";
import { Link } from "react-router-dom";
import OrderStatsSection from "./order-stats-section";
import PageTitle from "../page-title";
import SupplierService from "@/services/supplier";
import { Button } from "@/components/ui/button";

const RequisitionApprovedOrder = () => {
  const [approvedOrders, setApprovedOrders] = useState([]);

  const fetchData = async () => {
    try {
      const response = await SupplierService.getAllApprovedOrders();
      if (response.status === 200) {
        setApprovedOrders(response.data.results);
      } else {
        console.error("Error fetching data:", response.status);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const columns = useMemo(
    () => [
      {
        accessorKey: "placedBy.firstName",
        header: "First Name",
        size: 150,
      },
      {
        accessorKey: "placedBy.lastName",
        header: "Last Name",
        size: 150,
      },
      {
        accessorKey: "placedTo.name",
        header: "Supplier",
        size: 200,
      },
      {
        accessorKey: "placedAt",
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
      <PageTitle title={"Approved Requisitions"} />
      <OrderStatsSection />
      <MaterialReactTable
        columns={columns}
        data={approvedOrders}
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
              <Button className="bg-blue-600">View</Button>
            </Link>
          </div>
        )}
      />
    </>
  );
};

export default RequisitionApprovedOrder;

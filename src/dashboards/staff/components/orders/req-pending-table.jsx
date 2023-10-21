import { useMemo } from "react";
import { MaterialReactTable } from "material-react-table";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import PageTitle from "../page-title";
import OrderStatsSection from "./order-stats-section";
import { useEffect, useState } from "react";
import SupplierService from "@/services/supplier";

const RequisitionPendingOrder = () => {
  const [pendingRequests, setPendingRequests] = useState([]);

  const fetchData = async () => {
    try {
      const response = await SupplierService.getPendingOrders();
      if (response.status === 200) {
        setPendingRequests(response.data.results);
      } else {
        console.error("Error fetching data:", response.statusText);
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
        accessorKey: "createdAt",
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
        data={pendingRequests}
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

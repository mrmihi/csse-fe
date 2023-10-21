import React, { useEffect, useState, useMemo } from "react";
import { MaterialReactTable } from "material-react-table";
import SupplierService from "@/services/supplier";

const StaffOrderTable = () => {
  const [autoApprovedRequests, setAutoApprovedRequests] = useState([]);

  const fetchData = async () => {
    try {
      const response = await SupplierService.getAllAutoApprovedOrders();
      if (response.status === 200) {
        setAutoApprovedRequests(response.data.results);
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
        accessorKey: "placedTo.location",
        header: "Location",
        size: 150,
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

  return <MaterialReactTable columns={columns} data={autoApprovedRequests} />;
};

export default StaffOrderTable;

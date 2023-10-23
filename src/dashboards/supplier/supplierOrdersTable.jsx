import { useMemo } from "react";
import { Box, Stack } from "@mui/material";
import { MaterialReactTable } from "material-react-table";
import { data } from "./makeData";

const SupplierOrderTable = () => {
  const averageSalary = useMemo(
    () => data.reduce((acc, curr) => acc + curr.salary, 0) / data.length,
    [],
  );

  const maxAge = useMemo(
    () => data.reduce((acc, curr) => Math.max(acc, curr.age), 0),
    [],
  );

  const columns = useMemo(
    () => [
      {
        header: "Company",
        accessorKey: "firstName",
        enableGrouping: false, //do not let this column be grouped
      },
      {
        header: "Site Manger",
        accessorKey: "lastName",
      },
      {
        header: "Items",
        accessorKey: "age",
        aggregationFn: "max", //show the max age in the group (lots of pre-built aggregationFns to choose from)
        //required to render an aggregated cell
        AggregatedCell: ({ cell, table }) => (
          <>
            Oldest by{" "}
            {table.getColumn(cell.row.groupingColumnId ?? "").columnDef.header}:{" "}
            <Box
              sx={{ color: "info.main", display: "inline", fontWeight: "bold" }}
            >
              {cell.getValue()}
            </Box>
          </>
        ),
        Footer: () => (
          <Stack>
            Max Items:
            <Box color="warning.main">{Math.round(maxAge)}</Box>
          </Stack>
        ),
      },
      {
        header: "Address",
        accessorKey: "gender",
        //optionally, customize the cell render when this column is grouped. Make the text blue and pluralize the word
        GroupedCell: ({ cell, row }) => (
          <Box sx={{ color: "primary.main" }}>
            <strong>{cell.getValue()}s </strong> ({row.subRows?.length})
          </Box>
        ),
      },
      {
        header: "Location",
        accessorKey: "state",
      },
      {
        header: "Amount",
        accessorKey: "salary",
        aggregationFn: "mean",
        //required to render an aggregated cell, show the average salary in the group
        AggregatedCell: ({ cell, table }) => (
          <>
            Average by{" "}
            {table.getColumn(cell.row.groupingColumnId ?? "").columnDef.header}:{" "}
            <Box sx={{ color: "success.main", fontWeight: "bold" }}>
              {cell.getValue()?.toLocaleString?.("en-US", {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </Box>
          </>
        ),
        //customize normal cell render on normal non-aggregated rows
        Cell: ({ cell }) => (
          <>
            {cell.getValue()?.toLocaleString?.("en-US", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </>
        ),
        Footer: () => (
          <Stack>
            Average Amount:
            <Box color="warning.main">
              {averageSalary?.toLocaleString?.("en-US", {
                style: "currency",
                currency: "USD",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </Box>
          </Stack>
        ),
      },
    ],
    [averageSalary, maxAge],
  );

  return <MaterialReactTable columns={columns} data={data} enableExpanding />;
};

export default SupplierOrderTable;

import { useMemo } from "react";
import { Box, Stack } from "@mui/material";
import { MaterialReactTable } from "material-react-table";
import { data } from "./makeDeliveryData";
import { MenuItem } from "@mui/material";
import { useCallback, useState } from "react";

const SupplierDeliveryTable = () => {
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [tableData, setTableData] = useState(() => data);
  const [validationErrors, setValidationErrors] = useState({});

  const handleCreateNewRow = (values) => {
    tableData.push(values);
    setTableData([...tableData]);
  };

  const handleSaveRowEdits = async ({ exitEditingMode, row, values }) => {
    if (!Object.keys(validationErrors).length) {
      tableData[row.index] = values;
      //send/receive api updates here, then refetch or update local table data for re-render
      setTableData([...tableData]);
      exitEditingMode(); //required to exit editing mode and close modal
    }
  };

  const handleCancelRowEdits = () => {
    setValidationErrors({});
  };

  const handleDeleteRow = useCallback(
    (row) => {
      if (
        !confirm(`Are you sure you want to delete ${row.getValue("delivery")}`)
      ) {
        return;
      }
      //send api delete request here, then refetch or update local table data for re-render
      tableData.splice(row.index, 1);
      setTableData([...tableData]);
    },
    [tableData],
  );

  const getCommonEditTextFieldProps = useCallback(
    (cell) => {
      return {
        error: !!validationErrors[cell.id],
        helperText: validationErrors[cell.id],
        onBlur: (event) => {
          const isValid =
            cell.column.id === "email"
              ? validateEmail(event.target.value)
              : cell.column.id === "age"
              ? validateAge(+event.target.value)
              : validateRequired(event.target.value);
          if (!isValid) {
            //set validation error for cell if invalid
            setValidationErrors({
              ...validationErrors,
              [cell.id]: `${cell.column.columnDef.header} is required`,
            });
          } else {
            //remove validation error for cell if valid
            delete validationErrors[cell.id];
            setValidationErrors({
              ...validationErrors,
            });
          }
        },
      };
    },
    [validationErrors],
  );

  const validateRequired = (value) => !!value.length;
  const validateEmail = (email) =>
    !!email.length &&
    email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      );
  const validateAge = (age) => age >= 18 && age <= 50;

  const averageAmount = useMemo(
    () => data.reduce((acc, curr) => acc + curr.amount, 0) / data.length,
    [],
  );

  const maxItems = useMemo(
    () => data.reduce((acc, curr) => Math.max(acc, curr.items), 0),
    [],
  );

  const columns = useMemo(
    () => [
      {
        header: "Company",
        accessorKey: "company",
        enableGrouping: false, //do not let this column be grouped
      },
      {
        header: "Delivery",
        accessorKey: "delivery",
      },
      {
        header: "Items",
        accessorKey: "items",
        aggregationFn: "max", //show the max age in the group (lots of pre-built aggregationFns to choose from)
        //required to render an aggregated cell
        AggregatedCell: ({ cell, table }) => (
          <>
            Latest Delivery{" "}
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
            <Box color="warning.main">{Math.round(maxItems)}</Box>
          </Stack>
        ),
      },
      {
        header: "Address",
        accessorKey: "address",
        //optionally, customize the cell render when this column is grouped. Make the text blue and pluralize the word
        GroupedCell: ({ cell, row }) => (
          <Box sx={{ color: "primary.main" }}>
            <strong>{cell.getValue()}s </strong> ({row.subRows?.length})
          </Box>
        ),
      },
      {
        header: "Order",
        accessorKey: "order",
      },
      {
        header: "Status",
        accessorKey: "status",
      },
      {
        header: "Amount",
        accessorKey: "amount",
        aggregationFn: "mean",
        //required to render an aggregated cell, show the average salary in the group
        AggregatedCell: ({ cell, table }) => (
          <>
            Average{" "}
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
              {averageAmount?.toLocaleString?.("en-US", {
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
    [averageAmount, maxItems],
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={tableData}
      enableColumnResizing
      enableGrouping
      enableStickyHeader
      enableStickyFooter
      initialState={{
        density: "compact",
        expanded: true, //expand all groups by default
        grouping: ["order"], //an array of columns to group by by default (can be multiple)
        pagination: { pageIndex: 0, pageSize: 20 },
        sorting: [{ id: "order", desc: false }], //sort by state by default
      }}
      muiToolbarAlertBannerChipProps={{ color: "primary" }}
      muiTableContainerProps={{ sx: { maxHeight: 700 } }}
      positionActionsColumn="last"
      enableRowActions
      enableEditing
      renderRowActionMenuItems={({ row, table, closeMenu }) => [
        <MenuItem
          key={1}
          onClick={() => {
            table.setEditingRow(row);
            console.info("Halt", row);
            closeMenu();
          }}
        >
          Halt
        </MenuItem>,
        <MenuItem
          key={2}
          onClick={() => {
            handleDeleteRow(row);
            console.info("Remove", row);
            closeMenu();
          }}
        >
          Remove
        </MenuItem>,
        <MenuItem
          key={3}
          onClick={() => {
            console.info("Share", row);
            closeMenu();
          }}
        >
          Share
        </MenuItem>,
      ]}
    />
  );
};

export default SupplierDeliveryTable;

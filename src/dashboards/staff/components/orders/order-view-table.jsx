import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  {
    itemId: "1",
    name: "Cement",
    totalAmount: "LKR 2500.00",
    quantity: 8,
  },
  {
    itemId: "2",
    name: "Glass",
    totalAmount: "LKR 1500.00",
    quantity: 7,
  },
  {
    itemId: "3",
    name: "Pipes",
    totalAmount: "LKR 3500.00",
    quantity: 4,
  },
  {
    itemId: "4",
    name: "Wires",
    totalAmount: "4500.00",
    quantity: 1,
  },
  {
    itemId: "5",
    name: "Nuts",
    totalAmount: "LKR 550.00",
    quantity: 8,
  },
];

const OrderViewTable = () => {
  return (
    <div className="mt-5">
      <Table style={{ width: "70%", margin: "0 auto" }}>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Item ID</TableHead>
            <TableHead className="text-left">Name</TableHead>
            <TableHead className="text-left">Quantity</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium text-left">
                {invoice.itemId}
              </TableCell>
              <TableCell className="text-left">{invoice.name}</TableCell>
              <TableCell className="text-left">{invoice.quantity}</TableCell>
              <TableCell className="text-right">
                {invoice.totalAmount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default OrderViewTable;

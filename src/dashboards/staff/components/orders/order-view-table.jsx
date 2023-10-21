import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const OrderViewTable = ({ items }) => {
  const totalAmount = items.reduce((total, item) => total + item.amount, 0);

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
          {items.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium text-left">
                {item.item.itemId}
              </TableCell>
              <TableCell className="text-left">{item.item.itemName}</TableCell>
              <TableCell className="text-left">{item.quantity}</TableCell>
              <TableCell className="text-right">{item.amount}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell className="font-medium text-left"></TableCell>
            <TableCell className="text-left"></TableCell>
            <TableCell className="text-left">Total Amount</TableCell>
            <TableCell className="text-right">{totalAmount}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default OrderViewTable;

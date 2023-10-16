import StaffOrderTable from "./components/orders/order-table";
import PageTitle from "./components/page-title";
import StaffSidebar from "./components/sidebar";

const StaffOrders = () => {
  return (
    <>
      <StaffSidebar />
      <PageTitle title={"Staff Orders"} />
      <StaffOrderTable />
    </>
  );
};

export default StaffOrders;

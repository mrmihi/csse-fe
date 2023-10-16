import StaffOrderTable from "./components/orders/order-table";
import PageTitle from "./components/page-title";
import StaffSidebar from "./components/sidebar";

const StaffOrders = () => {
  return (
    <>
      <div className="grid lg:grid-cols-6">
        <div>
          <StaffSidebar />
        </div>
        <div className="col-span-3 lg:col-span-5 mt-10 mr-10">
          <PageTitle title={"Staff Orders"} />
          <StaffOrderTable />
        </div>
      </div>
    </>
  );
};

export default StaffOrders;

import { useParams } from "react-router-dom";
import StaffSidebar from "./components/sidebar";
import PageTitle from "./components/page-title";
import OrderViewTable from "./components/orders/order-view-table";

const StaffRequisitionView = () => {
  const { id } = useParams();

  return (
    <>
      <StaffSidebar />
      <PageTitle title={"View Requisition- More Details"} />
      <p>Requisition ID: {id}</p>
      <OrderViewTable />
    </>
  );
};

export default StaffRequisitionView;

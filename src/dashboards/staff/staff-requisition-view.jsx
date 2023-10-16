import { useParams } from "react-router-dom";
import StaffSidebar from "./components/sidebar";
import PageTitle from "./components/page-title";
import OrderViewTable from "./components/orders/order-view-table";

const StaffRequisitionView = () => {
  const { id } = useParams();

  return (
    <>
      <div className="grid lg:grid-cols-6">
        <div>
          <StaffSidebar />
        </div>
        <div className="col-span-3 lg:col-span-5 lg:border-l mt-10 mr-10">
          <div>
            <PageTitle title={"View Requisition- More Details"} />
            <p>Requisition ID: {id}</p>
            <OrderViewTable />
          </div>
        </div>
      </div>
      \
    </>
  );
};

export default StaffRequisitionView;

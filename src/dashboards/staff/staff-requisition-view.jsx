import { useParams } from "react-router-dom";
import StaffSidebar from "./components/sidebar";
import PageTitle from "./components/page-title";
import OrderViewTable from "./components/orders/order-view-table";
import { Button } from "@/components/ui/button";

const StaffRequisitionView = () => {
  const { id } = useParams();

  return (
    <>
      <div className="grid lg:grid-cols-6">
        <div>
          <StaffSidebar />
        </div>
        <div className="col-span-3 lg:col-span-5 mt-10 mr-10">
          <div>
            <PageTitle title={"View Requisition- More Details"} />
            <p className="pl-10 pt-10">Requisition ID: {id}</p>
            <p className="pl-10 pt-10">Name: Nimal Perera</p>
            <OrderViewTable />
            <div className="float-right mr-60">
              <Button className="bg-green-600 m-2" style={{ float: "right" }}>
                Approve
              </Button>
              <Button className="bg-red-600 m-2" style={{ float: "right" }}>
                Decline
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StaffRequisitionView;

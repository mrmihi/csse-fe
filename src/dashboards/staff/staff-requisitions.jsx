import { useState } from "react";
import StaffSidebar from "./components/sidebar";
import RequisitionPendingOrder from "./components/orders/req-pending-table";
import RequisitionApprovedOrder from "./components/orders/req-approved-table";
import RequisitionDeclinedOrder from "./components/orders/req-declined-table";
import { Tabs } from "@/components/ui/tabs";
import { TabsList } from "@/components/ui/tabs";
import { TabsTrigger } from "@/components/ui/tabs";

const StaffRequisition = () => {
  const [activeTable, setActiveTable] = useState("pending");
  const showPendingTable = () => setActiveTable("pending");
  const showApprovedTable = () => setActiveTable("approved");
  const showDeclinedTable = () => setActiveTable("declined");

  return (
    <>
      <div className="grid lg:grid-cols-6">
        <div>
          <StaffSidebar />
        </div>
        <div className="col-span-3 lg:col-span-5 mt-10 mr-10">
          <div>
            <Tabs defaultValue="account" className="w-[1080px]">
              <TabsList className="grid w-full grid-cols-3 justify-center">
                <TabsTrigger value="pending" onClick={showPendingTable}>
                  Pending
                </TabsTrigger>
                <TabsTrigger value="approved" onClick={showApprovedTable}>
                  Approved
                </TabsTrigger>
                <TabsTrigger value="declined" onClick={showDeclinedTable}>
                  Declined
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          {activeTable === "pending" && <RequisitionPendingOrder />}
          {activeTable === "approved" && <RequisitionApprovedOrder />}
          {activeTable === "declined" && <RequisitionDeclinedOrder />}
        </div>
      </div>
    </>
  );
};

export default StaffRequisition;

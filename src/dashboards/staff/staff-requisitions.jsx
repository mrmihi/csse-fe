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
      <StaffSidebar />
      <div className="flex justify-center">
        <Tabs defaultValue="account" className="w-[1080px]">
          <TabsList className="grid w-full grid-cols-3">
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
    </>
  );
};

export default StaffRequisition;
